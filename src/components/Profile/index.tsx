import { Divider, Heading, Text, useTheme, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Socials from "../Socials";
import DirectionArrow from "../DirectionArrow";
import CNImage from "../CNImage";

const Profile = () => {
  const { t } = useTranslation(["common", "hero"]);
  const theme = useTheme();

  return (
    <VStack
      spacing="58px"
      fontSize={{
        base: "1em",
        md: "1.25em"
      }}
    >
      <VStack spacing="6">
        <CNImage
          src="/images/Avatar.svg"
          alt="Reypixel"
          width={1600}
          height={1600}
          boxSize="12em"
        />

        <VStack spacing="2">
          <VStack spacing="2.5">
            <Heading color="brand.white.0" fontSize="1.875em" textAlign="center">
              Reyhan Ardiya
            </Heading>
            <Divider
              maxW="240px"
              borderColor="brand.white.0"
              borderWidth="2px"
              opacity={1}
            />
            <Heading
              maxW="358px"
              fontSize="1em"
              as="h2"
              color="brand.white.0"
              textAlign="center"
            >
              {t("tagline")}
            </Heading>
          </VStack>
          <Text fontSize="1em" maxW="400px" color="brand.white.0" textAlign="center">
            {t("self-summary")}
          </Text>
        </VStack>

        <VStack spacing={2} justify="center">
          <Socials boxSize="3em" color={theme.colors.brand.white[0]} spacing="4" />
          <Text fontSize="1em" color="brand.white.0" fontFamily="heading">
            {t("socials-footer", { ns: "common" })}
          </Text>
        </VStack>
      </VStack>

      <VStack maxW="260px">
        <Heading fontSize="1em" as="h3" color="brand.white.0" textAlign="center">
          {t("scroll", { ns: "hero" })}
        </Heading>

        <DirectionArrow color="white" />
      </VStack>
    </VStack>
  );
};

export default Profile;
