import fonts from "@/styles/fonts";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
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
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
