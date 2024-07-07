import { ReactNode } from "react";
import Navbar from "../Navbar";
import { Box, VStack } from "@chakra-ui/react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <VStack
      h="100vh"
      minH="844px"
      spacing={0}
      as="main"
      background="linear-gradient(rgba(27, 27, 27, 0.5), rgba(27, 27, 27, 0.5)), url('/images/StarFall.gif')"
      // background="linear-gradient(rgba(231, 0, 0, 0.5), rgba(27, 27, 27, 0.5)), url('/images/StarFall.gif')"
    >
      <Navbar />

      {children}
    </VStack>
  );
};

export default Layout;
