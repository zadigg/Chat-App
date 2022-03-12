import { ChakraProvider } from "@chakra-ui/react";
import Login from "../components/Login";
import { useAuthState } from "react-firebase-hooks/auth";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth, options);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
