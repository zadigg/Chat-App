import { ChakraProvider } from "@chakra-ui/react";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Sidebar />
    </ChakraProvider>
  );

  // <Component {...pageProps} />
}

export default MyApp;
