import { useState } from "react";
import { User } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import { Button } from "@mantine/core";
import Logout from "./Logout";

type InputProps = {
  user?: User;
};

const Input = ({ user }: InputProps) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const name = user?.displayName || user?.email?.split("@")[0];

  const guestbookRef = collection(firestore, "guestbook");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (message.length === 0) {
      setLoading(false);
      setError("Your message is empty!");
      return;
    }

    if (message.length > 100) {
      setLoading(false);
      setError("Message must be less than 100 characters.");
      return;
    }

    await addDoc(guestbookRef, {
      name: name,
      message: message,
      createdAt: serverTimestamp()
    });

    setLoading(false);
    setMessage("");
    location.reload();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="w-full">
        {error && <p className="pl-1 text-red-500">{error}</p>}
        <div className="flex items-center w-full text-sm text-black border-2 border-black rounded-md md:text-lg dark:text-white dark:border-gray-400">
          <input
            name="message"
            type="text"
            className="w-full px-4 py-2 rounded-md focus:outline-none placeholder:text-gray-400 dark:placeholder:text-gray-300 dark:bg-zinc-900"
            placeholder="Your message..."
            value={message}
            onChange={handleChange}
          />
        </div>
        <p className="flex justify-end items-end pr-2 pt-1 text-sm">
          {message.length}/100
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">- {name}</p>
        <div className="flex" />
        <div className="pb-2" />
        <Button
          type="submit"
          variant="outline"
          color="cyan"
          loading={loading}
          className="transition-colors duration-300 dark:hover:bg-gray-800"
        >
          Sign
        </Button>
        <Logout />
      </form>
    </>
  );
};

export default Input;
