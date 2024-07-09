import { Text, useTheme, VStack } from "@chakra-ui/react";
import Socials from "../Socials";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation(["common"]);
  const theme = useTheme();

  return (
    <VStack px="4" py="3" spacing={2} justify="center">
      <Socials boxSize="48" color={theme.colors.brand.white[0]} />
      <Text color="brand.white.0" fontFamily="heading">
        {t("socials-footer")}
      </Text>
      <Text color="brand.white.0" fontSize="small">
        {t("copyright")} © 2024 Reyhan Ardiya
      </Text>
    </VStack>
  );
};

export default Footer;
