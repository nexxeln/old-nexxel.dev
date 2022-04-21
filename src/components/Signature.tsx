type SignatureProps = {
  name: string;
  message: string;
};

const Signature: React.FC<SignatureProps> = ({ name, message }) => {
  return (
    <>
      <div className="flex flex-col pb-4">
        <p className="text-2xl">{message}</p>
        <p className="text-base text-gray-500 dark:text-gray-400">- {name}</p>
      </div>
    </>
  );
};
export default Signature;
