import Footer from "@/components/Footer";
import ProjectsList from "@/components/ProjectsList";
import { VStack } from "@chakra-ui/react";
import { GetStaticProps, type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const pixelCarouselImage = ["/images/stories/1.jpg"];

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "navbar", "projects"]))
    }
  };
};

const ProjectsPage: NextPage = () => {
  return (
    <VStack as="section" w="full" h="100vh">
      <ProjectsList
        projects={[
          {
            title: "Project 1",
            description: "Project 1 description",
            image: pixelCarouselImage[0],
            stackUrl: [
              pixelCarouselImage,
              pixelCarouselImage,
              pixelCarouselImage,
              pixelCarouselImage
            ]
          },
          {
            title: "Project 2",
            description: "Project 2 description",
            image: pixelCarouselImage[0],
            stackUrl: pixelCarouselImage
          },
          {
            title: "Project 3",
            description: "Project 3 description",
            image: pixelCarouselImage[0],
            stackUrl: pixelCarouselImage
          }
        ]}
      />
      <Footer />
    </VStack>
  );
};

export default ProjectsPage;
