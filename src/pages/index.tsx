import { Heading, Text } from "@chakra-ui/react";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Heading shadow="brand.double">Hello!</Heading>
      <Text>Meow</Text>
    </>
  );
};

export default Home;
