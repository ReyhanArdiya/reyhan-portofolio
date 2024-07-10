import FloatAnimation from "@/components/Animations/FloatAnimation";
import CNImage from "@/components/CNImage";
import PixelCarousel from "@/components/PixelCarousel";
import Profile from "@/components/Profile";
import StorySection from "@/components/StorySection";
import LoveStory from "@/components/StorySection/LoveStory";
import MoreLearning from "@/components/StorySection/MoreLearning";
import { Box, Image, useBoolean, useCounter, VStack } from "@chakra-ui/react";
import { GetStaticProps, type NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useMemo, useRef } from "react";

const pixelCarouselImage = ["/images/stories/1.jpg"];

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        "common",
        "navbar",
        "hero",
        "stories"
      ]))
    }
  };
};

const Home: NextPage = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const firstStoryRef = useRef<HTMLDivElement>(null);
  const loveStoryRef = useRef<HTMLDivElement>(null);
  const pixelCarouselRef = useRef<HTMLDivElement>(null);
  const moreLearningRef = useRef<HTMLDivElement>(null);
  const refCounter = useCounter();
  const [isScrolling, setIsScrolling] = useBoolean();
  const sectionRefs = useMemo(
    () => [
      profileRef,
      firstStoryRef,
      loveStoryRef,
      pixelCarouselRef,
      moreLearningRef
    ],
    []
  );

  useEffect(() => {
    sectionRefs[+refCounter.value]?.current?.scrollIntoView({
      behavior: "smooth"
    });

    const toggleIsScrollingTimeout = setTimeout(() => {
      setIsScrolling.off();
    }, 500);

    return () => {
      clearTimeout(toggleIsScrollingTimeout);
    };
  }, [refCounter.value, sectionRefs, setIsScrolling]);

  return (
    <VStack
      w="full"
      maxH="100vh"
      onWheel={event => {
        const counterVal = +refCounter.value || 0;

        if (
          isScrolling ||
          (counterVal === 0 && event.deltaY < 0) ||
          (counterVal === sectionRefs.length - 1 && event.deltaY > 0)
        ) {
          return;
        }

        if (event.deltaY > 0) {
          refCounter.increment();
        } else {
          refCounter.decrement();
        }

        setIsScrolling.on();
      }}
    >
      <Box w="full" ref={profileRef}>
        <VStack
          as="section"
          px="4"
          pt="3"
          pb="6"
          // h="full"
          minH="100vh"
          justify={{
            base: "end",
            sm: "center"
          }}
        >
          <Profile />
        </VStack>
      </Box>

      <Box w="full" ref={firstStoryRef}>
        <StorySection
          storyIndex={0}
          image={
            <Box pos="relative">
              <Box pos="absolute" bottom="-0.4em" left="-2.5em">
                <FloatAnimation maxW="none">
                  <Image
                    draggable={false}
                    src="/images/visualstudio.svg"
                    alt="Visual Studio Code"
                    // width={80}
                    // height={80}
                    boxSize="5em"
                    transform="rotate(25deg)"
                  />
                </FloatAnimation>
              </Box>
              <Box pos="absolute" right="-5em" top="-1.5em">
                <FloatAnimation maxW="none" reverse>
                  <Image
                    draggable={false}
                    src="/images/headfirst-htmlcss.png"
                    alt="Visual Studio Code"
                    // width={854}
                    // height={993}
                    w="7.154375em"
                    h="8.31875em"
                    transform="rotate(-25deg)"
                  />
                </FloatAnimation>
              </Box>
              <CNImage
                src="/images/laptop.svg"
                alt="My first tools"
                width={200}
                height={200}
                boxSize={{
                  base: "12.5em"
                }}
              />
            </Box>
          }
        />
      </Box>

      <Box w="full" ref={loveStoryRef}>
        <LoveStory />
      </Box>

      <Box w="full" ref={pixelCarouselRef}>
        <StorySection
          storyIndex={2}
          image={<PixelCarousel images={pixelCarouselImage} />}
        />
      </Box>

      <Box w="full" ref={moreLearningRef}>
        <MoreLearning />
      </Box>
    </VStack>
  );
};

export default Home;
