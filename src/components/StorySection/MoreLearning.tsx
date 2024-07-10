import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import DirectionArrow from "../DirectionArrow";
import Footer from "../Footer";

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

const MoreLearning = () => {
  const { t } = useTranslation("stories");
  const router = useRouter();

  const title = t(`${3}.title`) as string;
  const paragraphs = t(`${3}.paragraphs`, {
    returnObjects: true
  }) as string[];

  const pTexts = paragraphs.map((p, i) => (
    <Text
      maxW={{
        base: "600px",
        md: "650px"
      }}
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
      color="brand.white.0"
      spacing="6"
      justify="center"
      minH="100vh"
      bg="transparent"
      w="full"
      px="4"
      py="3"
      pos="relative"
      as="section"
      fontSize={{
        base: "1em",
        md: "1.25em"
      }}
    >
      <Heading
        color="inherit"
        textAlign="center"
        fontSize="1.5em"
        as="h2"
        maxW={{
          base: "390px",
          md: "500px"
        }}
        zIndex={2}
      >
        {titleText}
      </Heading>

      <Image
        src="/images/ceocar.png"
        alt="CEO Car"
        zIndex={2}
        draggable="false"
        w={{
          base: "12.5em"
        }}
      />

      <VStack spacing="9">
        <VStack spacing="1">
          {pTexts[0]}
          <Heading
            color="brand.white.0"
            textDecor="underline"
            cursor="pointer"
            as="h4"
            fontSize="1.5em"
            onClick={() => router.push("/projects")}
          >
            {paragraphs[1]} -&gt;
          </Heading>
        </VStack>

        <DirectionArrow color="white" reverse />
      </VStack>

      <Box position="absolute" bottom="0">
        <Footer />
      </Box>
    </VStack>
  );
};

export default MoreLearning;
