import { useState } from "react";

const Input = () => {
  const [form, setForm] = useState({
    name: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    // do stuff
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
      <form onSubmit={(e) => handleSubmit(e)} className="w-full">
        <div className="flex items-center w-full text-sm text-black border-2 border-black rounded-md md:text-lg dark:text-white dark:border-gray-400">
          <input
            name="name"
            type="text"
            className="w-[30%] px-4 py-2 border-r-2 border-black rounded-l-md focus:outline-none dark:bg-zinc-900 dark:border-gray-400 placeholder:text-gray-400 dark:placeholder:text-gray-300"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            name="message"
            type="text"
            className="w-[70%] px-4 py-2 rounded-r-md focus:outline-none placeholder:text-gray-400 dark:placeholder:text-gray-300 dark:bg-zinc-900"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
          />
        </div>
        <div className="mt-3" />
        <button
          type="submit"
          className="px-4 py-2 text-teal-600 transition-all duration-300 border-2 border-teal-600 rounded-md hover:scale-[1.04]"
        >
          Sign
        </button>
      </form>
    </>
  );
};

export default Input;
