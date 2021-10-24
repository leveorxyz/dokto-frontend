import { Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import { SpacedContainer } from "../common/Containers";

const AvailableCareHeader = () => {
  const animationVariants = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: {
      initial: { y: 100, opacity: 0 },
      animate: (custom: number) => (
        { y: 0, opacity: 1, transition: { delay: custom * 0.1, duration: 0.2 } }
      ),
      exit: { y: -100, opacity: 0 },
    },
  };

  return (
    <AnimatePresence>
      <SpacedContainer py={[12, 12, 36, 48, 48]}>
        <Box
          as={motion.h1}
          fontWeight="bold"
          color="#170041"
          fontSize={["6xl", "6xl", "8xl", "8xl", "8xl"]}
          {...animationVariants}
          custom={0}
        >
          Available Care
        </Box>
        <Box
          as={motion.h2}
          fontWeight="bold"
          fontSize="2xl"
          color="#A42BAD"
          mb={4}
          {...animationVariants}
          custom={1}
        >
          What We Treat
        </Box>
        <Box
          as={motion.div}
          fontSize="md"
          color="rgba(51, 51, 51, 0.5)"
          mb={2}
          {...animationVariants}
          custom={2}
        >
          In the new normal era like now, your health is very important,
          <br />
          especially the Covid-19 cases are increasing every day.
          <br />
          therefore your health, happiness for medical personnel.
        </Box>
      </SpacedContainer>
    </AnimatePresence>
  );
};

export default AvailableCareHeader;
