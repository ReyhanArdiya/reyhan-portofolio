import { Box, BoxProps, Center, Image } from "@chakra-ui/react";
import { motion, useAnimationControls, useDragControls } from "framer-motion";
import { ReactNode, useRef, useState } from "react";

const FloatAnimation = ({ children }: { children: ReactNode }) => {
  const start = 0;
  const end = 30;

  const reverse = Math.random() > 0.5;

  return (
    <motion.div
      initial={{
        y: reverse ? end : start
      }}
      animate={{
        y: reverse ? start : end,
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          type: "keyframes",
          duration: 5,
          ease: "easeInOut",
          repeatDelay: 1,
          delay: Math.random() * 5
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

interface LogoProps {
  src: string;
}

const Logo = ({ src }: LogoProps) => {
  return (
    <FloatAnimation>
      <Image src={src} w="full" h="full" alt="Tech Logo" draggable="false" />
    </FloatAnimation>
  );
};

interface DraggableBoxProps extends BoxProps {
  dragConstraints?: React.MutableRefObject<null>;
  rotateDeg?: string;
}

const DraggableBox = (props: DraggableBoxProps) => {
  const dragControls = useDragControls();
  const animationControls = useAnimationControls();
  const [oldTimeOut, setOldTimeOut] = useState<ReturnType<typeof setTimeout>>();

  const onReset = () => {
    animationControls.start({
      x: 0,
      y: 0,
      rotate: props.rotateDeg
    });
  };

  const onDragEndHandler = () => {
    clearTimeout(oldTimeOut);
    setOldTimeOut(setTimeout(onReset, 3000));
  };

  const onDragStartHandler = () => {
    clearTimeout(oldTimeOut);
  };

  const boxProps = { ...props };
  delete boxProps.dragConstraints;
  delete boxProps.rotateDeg;

  return (
    <Box
      {...boxProps}
      as={motion.div}
      transform="auto"
      pos="absolute"
      drag
      dragElastic={0.3}
      dragConstraints={props.dragConstraints}
      rotate={props.rotateDeg}
      animate={animationControls}
      dragControls={dragControls}
      onDragEnd={onDragEndHandler}
      onDragStart={onDragStartHandler}
    >
      {props.children}
    </Box>
  );
};

const DraggableLogo = (props: DraggableBoxProps & LogoProps) => {
  return (
    <DraggableBox {...props} cursor="grab">
      <Logo src={props.src} />
    </DraggableBox>
  );
};

const LogoBoard = () => {
  const leftTilt = "15deg";
  const rightTilt = "-15deg";
  const dragConstraints = useRef(null);

  return (
    <Center pos="relative" w="full" h="full" ref={dragConstraints} overflow="hidden">
      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={rightTilt}
        bottom="50%"
        right="20%"
        src="/images/techs/typescript.png"
      />

      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={leftTilt}
        top="10%"
        left="5%"
        src="/images/techs/react.png"
      />

      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={leftTilt}
        bottom="11%"
        left="28%"
        src="/images/techs/FlutterFlow.jpeg"
      />

      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={rightTilt}
        bottom="5%"
        right="25%"
        src="/images/techs/chakraui.png"
      />

      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={rightTilt}
        top="10%"
        right="30%"
        src="/images/techs/figma.png"
      />

      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={leftTilt}
        bottom="7%"
        left="5%"
        src="/images/techs/firebase.png"
      />

      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={leftTilt}
        bottom="50%"
        left="20%"
        src="/images/techs/gcp.png"
      />

      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={leftTilt}
        top="35%"
        left="5%"
        src="/images/techs/git-bash.png"
      />

      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={leftTilt}
        bottom="15%"
        right="2.5%"
        src="/images/techs/github.png"
      />

      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={leftTilt}
        top="2.5%"
        right="5%"
        src="/images/techs/javascript.png"
      />

      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={leftTilt}
        right="5%"
        top="33%"
        src="/images/techs/storybook.svg"
      />

      <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={leftTilt}
        top="5%"
        left="30%"
        src="/images/techs/node.png"
      />

      {/* <DraggableLogo
        dragConstraints={dragConstraints}
        rotateDeg={leftTilt}
        bottom="40%"
        left="15%"
        src="/images/techs/prisma.png"
      /> */}
    </Center>
  );
};

export default LogoBoard;
