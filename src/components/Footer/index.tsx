import { Text, useTheme, VStack } from "@chakra-ui/react";
import Socials from "../Socials";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation(["common"]);
  const theme = useTheme();

  return (
    <VStack as="footer" px="4" py="3" spacing={2} justify="center">
      <Socials boxSize="3em" color={theme.colors.brand.white[0]} />
      <Text color="brand.white.0" fontFamily="heading" fontSize="1em">
        {t("socials-footer")}
      </Text>
      <Text color="brand.white.0" fontSize="0.8125em">
        {t("copyright")} © 2024 Reyhan Ardiya
      </Text>
    </VStack>
  );
};

export default Footer;
