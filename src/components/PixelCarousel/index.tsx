import useEmblaCarousel from "embla-carousel-react";
import CNImage from "../CNImage";
import { useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Button, HStack } from "@chakra-ui/react";

const CarouselImage = ({ src }: { src: string }) => {
  return (
    <CNImage
      src={src}
      alt="Pixel Carousel"
      width="900"
      height="600"
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
    <HStack spacing="3" pos="relative">
      <CNImage
        src="/images/HeartGreen.png"
        alt="logo"
        width="300"
        height="260"
        w="48px"
        h="41.6px"
        pos="absolute"
        zIndex="1"
        top="-10%"
        right="2.5%"
      />

      <Box onClick={() => emblaApi?.scrollPrev()}>
        <CNImage
          src="/images/arrow-left-black.png"
          alt="Previous"
          width="24"
          height="54"
          w="24px"
          h="54px"
        />
      </Box>

      <Box
        ref={emblaRef}
        overflow="hidden"
        bg="brand.sage.0"
        boxShadow="4px 4px 0px 0px #1B1B1B, 8px 8px 0px 0px #90B5A0"
      >
        <Box w="300px" h="200px" display="flex">
          {imageComps}
        </Box>
      </Box>

      <Box onClick={() => emblaApi?.scrollNext()}>
        <CNImage
          src="/images/arrow-left-black.png"
          transform="rotate(180deg)"
          alt="Next"
          width="24"
          height="54"
          w="24px"
          h="54px"
        />
      </Box>
    </HStack>
  );
};

export default PixelCarousel;
