import Footer from "@/components/Footer";
import ProjectsList, { Project } from "@/components/ProjectsList";
import { serverDb } from "@/utils/firebase/server";
import { VStack } from "@chakra-ui/react";
import { collection, CollectionReference, getDocs } from "firebase/firestore";
import { GetStaticProps, type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { createInstance } from "i18next";

export interface ProjectsPageProps {
  projects: Project[];
}

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async ({
  locale
}) => {
  // const db = serverDb;

  // const projectsCollection = collection(
  //   db,
  //   "projects"
  // ) as CollectionReference<Project>;

  // const projectsSnapshot = await getDocs(projectsCollection);

  // const projects = projectsSnapshot.docs.map(doc => ({
  //   id: doc.id,
  //   ...doc.data()
  // })) as Project[];

  const tr = await serverSideTranslations(locale!, ["common", "navbar", "projects"]);
  const i18n = createInstance({
    lng: tr?._nextI18Next?.initialLocale,
    ns: tr?._nextI18Next?.ns,
    resources: tr?._nextI18Next?.initialI18nStore
  });
  i18n.init();
  const projects = i18n.t("projects:projects", { returnObjects: true }) as Project[];

  return {
    props: {
      ...tr,
      projects
    }
  };
};

const ProjectsPage: NextPage<ProjectsPageProps> = ({ projects }) => {
  return (
    <VStack as="section" w="full" h="100vh">
      <ProjectsList projects={projects} />
      <Footer />
    </VStack>
  );
};

export default ProjectsPage;
