import { ChakraProvider } from "@chakra-ui/react";
import Login from "../components/Login";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );

  // <Component {...pageProps} />
}

export default MyApp;
