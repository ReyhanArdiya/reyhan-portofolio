import { VStack } from "@chakra-ui/react";
import { GetStaticProps, type NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "navbar"]))
    }
  };
};

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return <VStack></VStack>;
};

export default Home;
