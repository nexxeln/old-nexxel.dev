import { Button } from "@mantine/core";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/clientApp";

const Logout = () => {
  return (
    <>
      <Button
        variant="outline"
        color="cyan"
        ml={8}
        className="transition-colors duration-300 dark:hover:bg-gray-800"
        onClick={() => signOut(auth)}
      >
        Log Out
      </Button>
    </>
  );
};

export default Logout;
