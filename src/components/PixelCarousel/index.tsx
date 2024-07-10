import useEmblaCarousel from "embla-carousel-react";
import CNImage from "../CNImage";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Button, HStack, Image } from "@chakra-ui/react";

const CarouselImage = ({ src }: { src: string }) => {
  return (
    <CNImage
      src={src}
      alt="Pixel Carousel"
      width="1000"
      height="1000"
      boxSize="full"
      flex="0 0 100%"
      minWidth={0}
    />
  );
};

export interface PixelCarouselProps {
  images: string[];
}

const PixelCarousel = ({ images }: PixelCarouselProps) => {
  const imageComps = images.map((image, index) => (
    <CarouselImage key={index} src={image} />
  ));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <HStack
      id="pixel-carousel"
      spacing="0.75em"
      pos="relative"
      fontSize={{
        base: "1em",
        sm: "1.25em"
      }}
    >
      <Image
        draggable={false}
        src="/images/HeartGreen.png"
        alt="logo"
        width="300"
        height="260"
        w="3em"
        h="2.599375em"
        pos="absolute"
        zIndex="1"
        top="-10%"
        right="2.5%"
      />

      <Box onClick={() => emblaApi?.scrollPrev()}>
        <Image
          draggable={false}
          src="/images/arrow-left-black.png"
          alt="Previous"
          width="24"
          height="54"
          w="1.5em"
          h="3.375em"
          fontSize="1em"
        />
      </Box>

      <Box
        ref={emblaRef}
        overflow="hidden"
        bg="brand.sage.0"
        boxShadow="4px 4px 0px 0px #1B1B1B, 8px 8px 0px 0px #90B5A0"
      >
        <Box
          w="18.75em"
          h="12.5em"
          fontSize={{
            base: "1em",
            md: "1.25em"
          }}
          display="flex"
        >
          {imageComps}
        </Box>
      </Box>

      <Box onClick={() => emblaApi?.scrollNext()}>
        <Image
          draggable={false}
          src="/images/arrow-left-black.png"
          transform="rotate(180deg)"
          alt="Next"
          width="24"
          height="54"
          w="1.5em"
          h="3.375em"
          fontSize="1em"
        />
      </Box>
    </HStack>
  );
};

export default PixelCarousel;
