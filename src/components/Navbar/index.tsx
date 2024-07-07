import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  DrawerProps,
  Heading,
  HStack,
  Text,
  useBoolean,
  VStack
} from "@chakra-ui/react";
import Image from "next/image";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from "@chakra-ui/react";
import { useRef } from "react";
import { useTranslation } from "next-i18next";
import Socials from "../Socials";
import { useRouter } from "next/router";
import changeLanguage from "../../utils/changeLanguage";
import GitHubCalendar from "react-github-calendar";

const LangButton = ({
  label,
  activeLocale
}: {
  activeLocale: string;
  label: string;
}) => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => changeLanguage(router, activeLocale)}
      fontFamily="heading"
      color={router.locale === activeLocale ? "brand.orange.0" : "brand.charcoal.0"}
    >
      {label}
    </Button>
  );
};

const Sidebar = (props: Omit<DrawerProps, "children">) => {
  const { t } = useTranslation(["navbar", "common"]);

  return (
    <Drawer
      placement="right"
      // isOpen={isOpen}
      // onClose={onClose}
      // finalFocusRef={btnRef}
      {...props}
    >
      <DrawerOverlay />
      <DrawerContent bg="brand.white.0">
        {/* TODO add pages links */}
        <DrawerCloseButton />
        <DrawerHeader fontFamily="heading" fontSize="lg">
          {t("title")}
        </DrawerHeader>
        <Divider />

        <DrawerBody as={VStack} align="start">
          <VStack align="start">
            <Text>{t("change-lang")}</Text>
            <HStack>
              <LangButton label="EN" activeLocale="en" />
              <LangButton label="ID" activeLocale="id" />
            </HStack>
          </VStack>

          <Divider />

          <VStack align="start" spacing={4}>
            <Heading as="h2" size="md" lineHeight={"1.5em"}>
              {t("github")}
            </Heading>
            <GitHubCalendar
              username="reyhanardiya"
              colorScheme="light"
              transformData={activities => activities.slice(-106)}
              hideColorLegend
              weekStart={0}
              labels={{
                totalCount: `{{count}} ${t("commits")}`
              }}
              // theme={
              //   {
              //     light
              //   }
              // }
            />
          </VStack>
        </DrawerBody>

        <Divider />

        <DrawerFooter as={VStack} spacing={2} justify="center">
          <Socials boxSize="48" />
          <Text fontFamily="heading">{t("socials-footer", { ns: "common" })}</Text>
          <Text fontSize="small">
            {t("copyright", { ns: "common" })} © 2024 Reyhan Ardiya
          </Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const Navbar = () => {
  const [isOpen, toggleIsOpen] = useBoolean();
  const btnRef = useRef(null);
  const router = useRouter();

  return (
    <HStack as="nav" py="9" px="6" justify="space-between" w="full">
      <Image
        style={{ cursor: "pointer" }}
        src="/images/HeartGreen.png"
        alt="logo"
        width={48}
        height={41.6}
        onClick={() => router.push("/")}
      />
      <>
        <HamburgerIcon
          ref={btnRef}
          onClick={toggleIsOpen.on}
          boxSize="8"
          color="brand.white.0"
          cursor="pointer"
        />
        <Sidebar
          isOpen={isOpen}
          onClose={() => toggleIsOpen.off()}
          finalFocusRef={btnRef}
        />
      </>
    </HStack>
  );
};

export default Navbar;
