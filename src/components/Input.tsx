const Input = () => {
  return (
    <>
      <div className="flex w-full text-black dark:text-white text-lg rounded-md items-center border-gray-300 dark:border-gray-400 border-2">
        <input
          type="text"
          className="px-4 py-2 w-2/6 rounded-l-md focus:outline-none dark:bg-zinc-900 border-gray-300 dark:border-gray-400 placeholder:text-gray-400 dark:placeholder:text-gray-300 border-r-2"
          placeholder="Your name"
        />
        <input
          type="text"
          className="px-4 py-2 w-4/6 rounded-r-md focus:outline-none dark:bg-zinc-900 placeholder:text-gray-400 dark:placeholder:text-gray-300"
          placeholder="Your message..."
        />
      </div>
    </>
  );
};

export default Input;
