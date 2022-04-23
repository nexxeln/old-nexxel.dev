import { Button } from "@mantine/core";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";

const LoginWithGoogle = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <>
      {error && <p>{error.message}</p>}
      <Button
        variant="subtle"
        color="cyan"
        loading={loading}
        onClick={() => {
          signInWithGoogle;
        }}
      >
        Login with google
      </Button>
    </>
  );
};

export default LoginWithGoogle;
