import { Image, ImageProps } from "@chakra-ui/react";
import FloatAnimation from "../Animations/FloatAnimation";

export interface DirectionArrowProps extends ImageProps {
  color: "white" | "black";
  reverse?: boolean;
}

const DirectionArrow = ({
  color,
  reverse = false,
  ...props
}: DirectionArrowProps) => {
  const src = `/images/arrow-down-${color}.png`;

  return (
    <FloatAnimation reverse>
      <Image
        {...props}
        transform={reverse ? "rotate(180deg)" : "none"}
        zIndex={2}
        src={src}
        alt="Arrow"
        w="45px"
        h="50px"
        alignSelf="center"
        draggable="false"
      />
    </FloatAnimation>
  );
};

export default DirectionArrow;
