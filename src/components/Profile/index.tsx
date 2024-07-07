import { Divider, Heading, Text, useTheme, VStack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Socials from "../Socials";

const Profile = () => {
  const { t } = useTranslation(["common", "hero"]);
  const theme = useTheme();

  return (
    <VStack spacing="58px">
      <VStack spacing="6">
        <Image src="/images/Avatar.png" alt="Reypixel" width={192} height={192} />
        <VStack spacing="2">
          <VStack spacing="2.5">
            <Heading color="brand.white.0" size="lg" textAlign="center">
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
              size="sm"
              as="h2"
              color="brand.white.0"
              textAlign="center"
            >
              {t("tagline")}
            </Heading>
          </VStack>
          <Text maxW="358px" color="brand.white.0" textAlign="center">
            {t("self-summary")}
          </Text>
        </VStack>
        <VStack spacing={2} justify="center">
          <Socials boxSize="48" color={theme.colors.brand.white[0]} spacing="4" />
          <Text color="brand.white.0" fontFamily="heading">
            {t("socials-footer", { ns: "common" })}
          </Text>
        </VStack>
      </VStack>

      <VStack maxW="220px">
        <Heading size="sm" as="h3" color="brand.white.0" textAlign="center">
          {t("scroll", { ns: "hero" })}
        </Heading>
        <Image
          src="/images/arrow-down-white.png"
          alt="arrow-down"
          width={45}
          height={50}
        />
      </VStack>
    </VStack>
  );
};

export default Profile;
