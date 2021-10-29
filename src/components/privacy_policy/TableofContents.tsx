import React from "react";
import { Grid, Heading } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { range } from "lodash";
import { SpacedContainer } from "../common/Containers";
import UnfilteredTableContent from "./TableContentList.json";
import CustomBulletList from "../common/CustomBulletList";

const TableofContents = () => {
  const TableContent = UnfilteredTableContent.slice(0, 14);

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
        <Heading as="h2" color="#170041" fontWeight="bold" fontSize="4xl" mb="10">Table of Contents</Heading>
        <Grid
          as={motion.div}
          templateColumns={{
            base: "repeat(1, 1fr)", sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(2, 1fr)",
          }}
          gap={6}
          mb="20"
          {...partentAnimationProps}
        >
          {range(0, TableContent.length, 7).map(
            (i) => (
              <motion.div key={i} {...childAnimationProps}>
                <CustomBulletList listData={TableContent.slice(i, i + 7)} />
              </motion.div>
            ),
          )}
        </Grid>
      </SpacedContainer>
    </AnimatePresence>
  );
};

export default TableofContents;
