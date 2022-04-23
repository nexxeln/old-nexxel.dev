import { Button } from "@mantine/core";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/clientApp";

const Logout = () => {
  return (
    <>
      <Button variant="default" onClick={() => signOut(auth)}>
        Log Out
      </Button>
    </>
  );
};

export default Logout;
