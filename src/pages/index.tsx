import { Button, Heading, Text } from "@chakra-ui/react";
import { GetStaticProps, type NextPage } from "next";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import changeLanguage from "@/utils/changeLanguage";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"]))
    }
  };
};

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <>
      <Text>{t("title")}</Text>
      <Button onClick={() => changeLanguage(router, "en")}>EN</Button>
      <Button onClick={() => changeLanguage(router, "id")}>ID</Button>
    </>
  );
};

export default Home;
