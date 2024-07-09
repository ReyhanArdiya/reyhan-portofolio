import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import LogoBoard from "./LogoBoard";

const highlightTitle = (title: string) => {
  const titleSplit = title.split(/(<%.*%>)/gm);

  return titleSplit.map((t, i) => {
    if (t.match(/<.*>/)) {
      return (
        <Text as="span" key={i} color="brand.sage.0">
          {t.replace(/<%|%>/g, "")}
        </Text>
      );
    } else {
      return (
        <Text as="span" color="inherit" key={i}>
          {t}
        </Text>
      );
    }
  });
};

const LoveStory = () => {
  const { t } = useTranslation("stories");

  const title = t(`${1}.title`) as string;
  const paragraphs = t(`${1}.paragraphs`, {
    returnObjects: true
  }) as string[];

  const pTexts = paragraphs.map((p, i) => (
    <Text zIndex={2} color="inherit" textAlign="center" key={i} fontSize="md">
      {p}
    </Text>
  ));

  const titleText = highlightTitle(title);

  return (
    <VStack
      color="brand.white.0"
      spacing="6"
      justify="center"
      minH="100vh"
      bg="transparent"
      w="full"
      px="4"
      py="3"
      pos="relative"
    >
      <Box pos="absolute" w="full" h="full" zIndex={3}>
        <LogoBoard />
      </Box>

      <Heading
        color="inherit"
        textAlign="center"
        fontSize="x-large"
        as="h2"
        zIndex={2}
      >
        {titleText}
      </Heading>

      <Image
        src="/images/love-finger.svg"
        alt="Good luck, babe~"
        zIndex={2}
        draggable="false"
      />
      {pTexts}
      <Image
        zIndex={2}
        position="absolute"
        src={`/images/arrow-down-white.png`}
        alt="Arrow"
        w="45px"
        h="50px"
        alignSelf="center"
        bottom="6"
        draggable="false"
      />
    </VStack>
  );
};

export default LoveStory;
