import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import LogoBoard from "./LogoBoard";
import DirectionArrow from "../DirectionArrow";
import CNImage from "../CNImage";

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
    <Text
      maxW={{
        base: "480px",
        md: "580px"
      }}
      zIndex={2}
      color="inherit"
      textAlign="center"
      key={i}
      fontSize="1em"
    >
      {p}
    </Text>
  ));

  const titleText = highlightTitle(title);

  return (
    <VStack
      as="section"
      color="brand.white.0"
      spacing="6"
      justify="center"
      minH="100vh"
      bg="transparent"
      w="full"
      px="4"
      py="3"
      pos="relative"
      fontSize={{
        base: "1em",
        md: "1.25em"
      }}
    >
      <Box pos="absolute" w="full" h="full" zIndex={3}>
        <LogoBoard />
      </Box>

      <Heading
        color="inherit"
        textAlign="center"
        fontSize="1.5em"
        as="h2"
        zIndex={2}
        maxW={{
          base: "390px",
          md: "420px"
        }}
      >
        {titleText}
      </Heading>

      <CNImage
        src="/images/love-finger.svg"
        alt="Good luck, babe~"
        zIndex={2}
        draggable="false"
        width={200}
        height={200}
        boxSize={{
          base: "12.5em"
        }}
      />

      {pTexts}

      <Box
        zIndex={3}
        position="absolute"
        w="45px"
        h="50px"
        alignSelf="center"
        bottom="6"
      >
        <DirectionArrow color="white" />
      </Box>
    </VStack>
  );
};

export default LoveStory;
