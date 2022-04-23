import { Button } from "@mantine/core";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";

const LoginWithGoogle = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <>
      {error && <p>{error.message}</p>}
      <Button
        variant="outline"
        color="cyan"
        loading={loading}
        className="transition-colors duration-300 dark:hover:bg-gray-700"
        onClick={() => signInWithGoogle()}
      >
        Login to comment
      </Button>
      <p className="pt-1 text-sm text-gray-400 dark:text-gray-500">
        Your information is only used to display your name to avoid
        impersonation.
      </p>
    </>
  );
};

export default LoginWithGoogle;
