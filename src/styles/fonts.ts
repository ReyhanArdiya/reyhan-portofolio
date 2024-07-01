// lib/fonts.ts
import { Press_Start_2P, Montserrat_Alternates } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: "400"
});

const montserratAlternates = Montserrat_Alternates({
  weight: ["400"]
});

const fonts = {
  pressStart2P,
  montserratAlternates
};

export default fonts;
