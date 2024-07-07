import fonts from "@/styles/fonts";
import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
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
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default appWithTranslation(App);
