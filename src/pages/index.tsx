import Profile from "@/components/Profile";
import { VStack } from "@chakra-ui/react";
import { GetStaticProps, type NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "navbar", "hero"]))
    }
  };
};

const Home: NextPage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <VStack
      px="4"
      pt="3"
      pb="6"
      position="relative"
      h="full"
      justify={{
        base: "end",
        md: "center"
      }}
    >
      <Profile />
    </VStack>
  );
};

export default Home;
