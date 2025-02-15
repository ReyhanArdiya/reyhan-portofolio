import { chakra } from "@chakra-ui/react";
import Image from "next/image";

const CNImage = chakra(Image, {
  shouldForwardProp: prop => ["width", "height", "src", "alt"].includes(prop)
});

export default CNImage;
