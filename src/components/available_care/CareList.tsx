import { Grid, Box } from "@chakra-ui/react";
import { range } from "lodash";
import { motion, AnimatePresence } from "framer-motion";

import { SpacedContainer } from "../common/Containers";
import CareListData from "./CareListData";
import CareListCard from "./CareListCard";

const CareList = () => {
  const parentAnimationTransition = { transition: { delayChildren: 0.3, staggerChildren: 0.2 } };
  const childAnimationTransition = { transition: { duration: 0.25 } };
  const partentAnimationProps = {
    initial: "initial",
    animate: "animate",
    exit: "exit",
    variants: {
      initial: parentAnimationTransition,
      animate: parentAnimationTransition,
      exit: parentAnimationTransition,
    },
  };

  const childAnimationProps = {
    variants: {
      initial: { opacity: 0, x: -50, ...childAnimationTransition },
      animate: { opacity: 1, x: 0, ...childAnimationTransition },
      exit: { opacity: 0, x: 50, ...childAnimationTransition },
    },
  };

  return (
    <AnimatePresence>
      <SpacedContainer>
        <Grid
          as={motion.div}
          templateColumns={{
            base: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)",
          }}
          gap={6}
          mb="20"
          {...partentAnimationProps}
        >
          {range(0, CareListData.length, 6).map(
            (i) => (
              <motion.div key={i} {...childAnimationProps}>
                <CareListCard listData={CareListData.slice(i, i + 6)} />
              </motion.div>
            ),
          )}
        </Grid>

        <Box fontSize="md" color="gray" textAlign="center" px="2" mb="20">
          *Some services may require additional or in-person follow-up consultation with a
          specialized practitioner, which may not be available online.
          <br />
          Please sign in to your account access the available services.
        </Box>
      </SpacedContainer>
    </AnimatePresence>
  );
};

export default CareList;
