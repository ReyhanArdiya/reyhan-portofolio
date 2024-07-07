import { ReactNode } from "react";
import Navbar from "../Navbar";
import { Box, VStack } from "@chakra-ui/react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <VStack spacing={0} as="main" backgroundImage="/images/StarFall.gif">
      <Navbar />

      {children}
    </VStack>
  );
};

export default Layout;
