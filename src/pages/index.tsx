import Profile from "@/components/Profile";
import StorySection from "@/components/StorySection";
import { Text, VStack } from "@chakra-ui/react";
import { GetStaticProps, type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Image } from "@chakra-ui/react";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "navbar",
        "hero",
        "stories"
      ]))
    }
  };
};

const Home: NextPage = () => {
  const { t } = useTranslation("stories");

  return (
    <>
      <VStack
        as="section"
        px="4"
        pt="3"
        pb="6"
        // h="full"
        minH="100vh"
        justify={{
          base: "end",
          md: "center"
        }}
      >
        <Profile />
      </VStack>

      <StorySection
        storyIndex={0}
        image={<Image src="/images/story0-image.png" alt="My first tools" />}
      />
      <StorySection
        storyIndex={1}
        image={<Image src="/images/love-finger.svg" alt="Good luck, babe~" />}
        bg="#ffffff00"
        textColor="brand.white.0"
        arrowColor="white"
      />

      <StorySection storyIndex={2} image={<Text></Text>} />
    </>
  );
};

export default Home;
