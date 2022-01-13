import "@fontsource/space-mono/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import Layout from "@components/Layout";
import CustomScrollBar from "@styles/customScrollbar";
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <CustomScrollBar/>
        <Layout location={router}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
