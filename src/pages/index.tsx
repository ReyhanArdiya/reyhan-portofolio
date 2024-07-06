import { Heading, Text } from "@chakra-ui/react";
import { type NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Heading>Hello!</Heading>
      <Text>Meow</Text>
      <Image
        src="/assets/arrow_down_black.png"
        alt="Black down arrow"
        width={45}
        height={50}
      />
    </>
  );
};

export default Home;
