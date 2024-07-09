import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

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
      as="section"
    >
      <Heading
        color="inherit"
        textAlign="center"
        fontSize="x-large"
        as="h2"
        zIndex={2}
      >
        {titleText}
      </Heading>

      <Image src="/images/ceocar.png" alt="CEO Car" zIndex={2} draggable="false" />

      <VStack spacing="6">
        <VStack spacing="1">
          {pTexts}
          <Heading
            color="brand.white.0"
            textDecor="underline"
            cursor="pointer"
            as="h4"
            size="lg"
            onClick={() => router.push("/projects")}
          >
            {paragraphs[1]} -&gt;
          </Heading>
        </VStack>

        <Image
          zIndex={2}
          src={`/images/arrow-down-white.png`}
          alt="Arrow"
          w="45px"
          h="50px"
          alignSelf="center"
          bottom="6"
          draggable="false"
          transform="rotate(180deg)"
        />
      </VStack>
    </VStack>
  );
};

export default MoreLearning;
