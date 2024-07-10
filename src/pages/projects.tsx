import Footer from "@/components/Footer";
import ProjectsList, { Project } from "@/components/ProjectsList";
import { serverDb } from "@/utils/firebase/server";
import { VStack } from "@chakra-ui/react";
import { collection, CollectionReference, getDocs } from "firebase/firestore";
import { GetStaticProps, type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export interface ProjectsPageProps {
  projects: Project[];
}

export const getStaticProps: GetStaticProps<ProjectsPageProps> = async ({
  locale
}) => {
  const db = serverDb;

  const projectsCollection = collection(
    db,
    "projects"
  ) as CollectionReference<Project>;

  const projectsSnapshot = await getDocs(projectsCollection);

  const projects = projectsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Project[];

  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "navbar", "projects"])),
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
