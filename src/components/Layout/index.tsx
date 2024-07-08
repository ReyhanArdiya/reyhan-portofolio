import { ReactNode } from "react";
import Navbar from "../Navbar";
import { Box, VStack } from "@chakra-ui/react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <VStack
      minH="844px"
      spacing={0}
      as="main"
      background="linear-gradient(rgba(27, 27, 27, 0.5), rgba(27, 27, 27, 0.5)), url('/images/StarFall.gif')"
      pos="relative"
      // background="linear-gradient(rgba(231, 0, 0, 0.5), rgba(27, 27, 27, 0.5)), url('/images/StarFall.gif')"
    >
      <Box w="full" pos="absolute" top="0">
        <Navbar />
      </Box>

      {children}
    </VStack>
  );
};

export default Layout;
