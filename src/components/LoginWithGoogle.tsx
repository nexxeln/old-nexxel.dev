import { Button } from "@mantine/core";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import Privacy from "./Privacy";

const LoginWithGoogle = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <>
      {error && <p className="pb-1 text-red">{error.message}</p>}
      <Button
        variant="outline"
        color="cyan"
        loading={loading}
        className="transition-colors duration-300 dark:hover:bg-gray-800"
        onClick={() => signInWithGoogle()}
      >
        Login to comment
      </Button>
      <Privacy />
    </>
  );
};

export default LoginWithGoogle;
