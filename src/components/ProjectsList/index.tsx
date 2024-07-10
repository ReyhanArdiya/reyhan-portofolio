import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Spinner,
  Text,
  VStack,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CNImage from "../CNImage";

const CarouselImage = ({ src }: { src: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const imgCurrent = imgRef.current;

  useEffect(() => {
    if (
      (imgCurrent?.naturalHeight && imgCurrent.naturalHeight > 0) ||
      // Check if from cache
      imgCurrent?.src !== src
    ) {
      setIsLoaded(true);
    }
  }, [imgCurrent, src]);

  return (
    <Box pos="relative">
      <CNImage
        src={src}
        alt="Pixel Carousel"
        width="1000"
        height="1000"
        // w="20.375em"
        // h="12.5em"
        maxH={{
          base: "12.5em",
          sm: "20em"
        }}
        w="Full"
        onLoad={() => {
          console.log("Image loaded");
          setIsLoaded(true);
        }}
        quality={100}
        ref={imgRef}
        objectFit="cover"
      />

      {!isLoaded && (
        <Center pos="absolute" top="0" w="full" h="full" zIndex={3}>
          <Spinner boxSize="36" />
        </Center>
      )}
    </Box>
  );
};

export interface Project {
  title: string;
  description: string;
  image: string;
  stackUrl: string[];
}

export interface ProjectsListProps {
  projects: Project[];
}

const ListControls = ({
  onClickPrev,
  onClickNext,
  title
}: {
  onClickPrev: () => void;
  onClickNext: () => void;
  title: string;
}) => {
  return (
    <HStack spacing="4">
      <Image
        src="/images/arrow-left-white.png"
        alt="Previous"
        onClick={onClickPrev}
        cursor="pointer"
        w="1.5em"
        h="3.375em"
        fontSize="1em"
        draggable={false}
        userSelect="none"
        as={motion.img}
        whileHover={{ scale: 1.1 }}
      />

      <Heading fontSize="1em" as="h3" size="md" color="brand.white.0">
        {title}
      </Heading>

      <Image
        src="/images/arrow-right-white.png"
        alt="Next"
        onClick={onClickNext}
        cursor="pointer"
        w="1.5em"
        h="3.375em"
        fontSize="1em"
        draggable={false}
        userSelect="none"
        as={motion.img}
        whileHover={{ scale: 1.1 }}
      />
    </HStack>
  );
};

const CarouselItem = ({ project }: { project: Project }) => {
  const stackImages = project.stackUrl.map((url, index) => (
    <WrapItem key={index} w="3.125rem" h="3.125rem">
      <CNImage
        src={url}
        alt="Stack"
        width="100"
        height="100"
        boxSize="3.125rem"
        objectFit="cover"
      />
    </WrapItem>
  ));

  return (
    <VStack px="4" as="article" flex="0 0 100%" minW="0" spacing="1.5625em">
      <CarouselImage src={project.image} />

      <VStack spacing="1" w="full">
        <Heading fontSize="1.5em" as="h2" color="brand.charcoal.0">
          {project.title}
        </Heading>

        <Text w="full" maxH="full">
          {project.description}
        </Text>
      </VStack>

      <VStack w="full" spacing="1">
        <Heading fontSize="1em" as="h2" color="brand.charcoal.0">
          Stack
        </Heading>

        <Wrap spacing="2" justify="center">
          {stackImages}
        </Wrap>
      </VStack>
    </VStack>
  );
};

const PageListBoxes = ({
  count,
  activeIndex,
  onClick
}: {
  count: number;
  activeIndex: number;
  onClick: (index: number) => void;
}) => {
  const boxes = Array.from({ length: count }, (_, index) => (
    <WrapItem
      key={index}
      boxSize="1em"
      bg={index === activeIndex ? "brand.sage.0" : "brand.charcoal.0"}
      cursor="pointer"
      onClick={() => onClick(index)}
    />
  ));

  return <Wrap spacing="2.5">{boxes}</Wrap>;
};

const ProjectsList = ({ projects }: ProjectsListProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  });
  const [activePage, setActivePage] = useState(0);

  const carouselItems = projects.map((project, index) => (
    <CarouselItem key={index} project={project} />
  ));

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("scroll", () => {
        setActivePage(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <VStack
      spacing="3"
      pt="7.1em"
      px="4"
      pb="3"
      w="full"
      as="article"
      flex="1"
      justify="center"
    >
      {projects.length ? (
        <>
          <ListControls
            onClickPrev={() => {
              emblaApi?.scrollPrev();
              // setActivePage(emblaApi?.selectedScrollSnap() || 0);
            }}
            onClickNext={() => {
              emblaApi?.scrollNext();
              // setActivePage(emblaApi?.selectedScrollSnap() || 0);
            }}
            title={projects[activePage].title}
          />

          <VStack
            w="full"
            h="full"
            maxW="40em"
            minH="32.7125em"
            maxH="60em"
            bg="brand.white.0"
            boxShadow="4px 4px 0px 0px #1B1B1B, 8px 8px 0px 0px #90B5A0"
            ref={emblaRef}
            overflow="hidden"
            as="section"
            py="6"
          >
            <Box display="flex" h="full" w="full">
              {carouselItems}
            </Box>

            <PageListBoxes
              count={projects.length}
              activeIndex={activePage}
              onClick={index => {
                emblaApi?.scrollTo(index);
                // setActivePage(index);
              }}
            />
          </VStack>
        </>
      ) : (
        <Spinner boxSize="100" color="brand.white.0" />
      )}
    </VStack>
  );
};

export default ProjectsList;
