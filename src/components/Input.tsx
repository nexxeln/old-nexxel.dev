import { useState } from "react";
import { server } from "../lib/config";

const Input = () => {
  const [form, setForm] = useState({
    name: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const body = JSON.stringify(form);

    try {
      const response = await fetch(`${server}/api/signatures`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body
      });

      if (response.status !== 200) {
        console.log("something went wrong");
      } else {
        resetForm();
        location.reload();
        console.log("success");
      }
    } catch (error) {
      console.log("there was an error submitting", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setForm({
      name: "",
      message: ""
    });
  };

  return (
    <>
      <form
        action="#"
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
        className="w-full"
      >
        <div className="flex items-center w-full text-sm text-black border-2 border-gray-300 rounded-md md:text-lg dark:text-white dark:border-gray-400">
          <input
            name="name"
            type="text"
            className="w-[30%] px-4 py-2 border-r-2 border-gray-300 rounded-l-md focus:outline-none dark:bg-zinc-900 dark:border-gray-400 placeholder:text-gray-400 dark:placeholder:text-gray-300"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="message"
            type="text"
            className="w-[70%] px-4 py-2 rounded-r-md focus:outline-non placeholder:text-gray-400 dark:placeholder:text-gray-300 dark:bg-zinc-900"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3" />
        <button
          type="submit"
          className="px-4 py-2 transition-all duration-300 border-2 border-teal-700 rounded-md hover:bg-teal-600 hover:border-teal-600"
        >
          Sign
        </button>
      </form>
    </>
  );
};

export default Input;
