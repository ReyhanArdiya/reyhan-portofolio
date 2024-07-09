import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const FloatAnimation = ({
  children,
  reverse = false
}: {
  children: ReactNode;
  reverse?: boolean;
}) => {
  const start = 0;
  const end = reverse ? -30 : 30;

  return (
    <motion.div
      initial={{
        y: start
      }}
      animate={{
        y: end,
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          type: "keyframes",
          duration: 2,
          ease: "easeInOut",
          repeatDelay: 0
        }
      }}
    >
      <Box
        as={motion.div}
        whileHover={{
          scale: 1.3
        }}
        maxW="48px"
      >
        {children}
      </Box>
    </motion.div>
  );
};

export default FloatAnimation;
