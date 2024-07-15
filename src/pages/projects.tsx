import Footer from "@/components/Footer";
import ProjectsList, { Project } from "@/components/ProjectsList";
import { serverDb } from "@/utils/firebase/server";
import { VStack } from "@chakra-ui/react";
import { collection, CollectionReference, getDocs } from "firebase/firestore";
import { GetStaticProps, type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { i18n, useTranslation } from "next-i18next";
import { createInstance } from "i18next";

export interface ProjectsPageProps {
  // projects: Project[];
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

  // const projects = i18n?.t("projects", {
  //   returnObjects: true,
  //   ns: "projects"
  // }) as Project[];

  // console.log(i18n, projects);

  return {
    props: {
      ...tr
      // projects
    }
  };
};

const ProjectsPage: NextPage<ProjectsPageProps> = (/* { projects } */) => {
  const { t } = useTranslation("projects");

  const projects = t("projects", {
    returnObjects: true
  }) as Project[];

  return (
    <VStack
      as="section"
      w="full"
      // maxH={{
      //   base: "max-content",
      //   md: "100vh"
      // }}
      minH="100vh"
    >
      {projects.length && <ProjectsList projects={projects} />}
      <Footer />
    </VStack>
  );
};

export default ProjectsPage;
