import { Box, Heading, Image, StackProps, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { ReactNode } from "react";
import DirectionArrow from "../DirectionArrow";

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

export interface StorySectionProps {
  // title: string;
  image: ReactNode;
  // paragraphs: string[];
  bg?: StackProps["bg"];
  textColor?: StackProps["color"];
  storyIndex: number;
  arrowColor?: "white" | "black";
}

const StorySection = ({
  storyIndex,
  image,
  bg = "brand.white.0",
  textColor = "brand.charcoal.0",
  arrowColor = "black"
}: StorySectionProps) => {
  const { t } = useTranslation("stories");

  const title = t(`${storyIndex}.title`) as string;
  const paragraphs = t(`${storyIndex}.paragraphs`, {
    returnObjects: true
  }) as string[];

  const pTexts = paragraphs.map((p, i) => (
    <Text maxW="600px" color="inherit" textAlign="center" key={i} fontSize="md">
      {p}
    </Text>
  ));

  const titleText = highlightTitle(title);

  return (
    <VStack
      as="section"
      color={textColor}
      spacing="6"
      justify="center"
      minH="100vh"
      bg={bg}
      w="full"
      px="4"
      py="3"
      pos="relative"
    >
      <Heading
        color="inherit"
        textAlign="center"
        fontSize="x-large"
        as="h2"
        maxW="390px"
      >
        {titleText}
      </Heading>
      {image}
      {pTexts}

      <Box position="absolute" w="45px" h="50px" alignSelf="center" bottom="6">
        <DirectionArrow color={arrowColor} />
      </Box>
    </VStack>
  );
};

export default StorySection;
