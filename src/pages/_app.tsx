import Layout from "@/components/Layout";
import fonts from "@/styles/fonts";
import { theme } from "@/styles/theme";
import { getAnalyticsInstance } from "@/utils/firebase/clients";
import { ChakraProvider } from "@chakra-ui/react";

import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useEffect } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    getAnalyticsInstance();
  }, []);

  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-presstart2p: ${fonts.pressStart2P.style.fontFamily};
            --font-montserrat: ${fonts.montserratAlternates.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default appWithTranslation(App);
