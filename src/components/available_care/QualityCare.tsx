import {
  Heading, Box, Flex, Button, Divider, Image,
} from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import doctorsSVG from "../../static/doctors.svg";
import doktoIconSVG from "../../static/DoktoIcon.png";

const QualityCare = () => (
  <div>
    <SpacedContainer py={100}>
      <Flex direction="column" alignItems="center">
        <Box position="relative">
          <Image src={doctorsSVG} height="100%" fit="contain" overflow="hidden" />
          <Image
            src={doktoIconSVG}
            fit="contain"
            position="absolute"
            boxSize={[12, 12, 24, 48, 48]}
            top={[6, 6, 12, 16, 16]}
            borderWidth={[8, 8, 8, 24, 24]}
            borderColor="brand.darkPink"
            borderRadius="full"
            borderStyle="solid"
            left="50%"
            transform="translateX(-50%)"
            bg="brand.darkPink"
            rounded="full"
          />
        </Box>
        <Heading as="h1" fontWeight="bold" fontSize="7xl" pt="12" color="brand.darkPink" textAlign="center">Quality care with peace of mind.</Heading>
        <Box p="12" borderColor="brand.light">
          <Divider />
          <Box fontSize="md" color="brand.light" py="1rem" px={[0, 0, "3rem", "4rem"]}>Our board-certified doctors and specialists can diagnose and treat a wide variety of things remotely.</Box>
          <Divider />
        </Box>
        <Button
          bg="brand.darkPink"
          color="white"
          rounded="full"
          py="1.5rem"
          px="3rem"
          textTransform="uppercase"
          _hover={{ opacity: ".9" }}
          _active={{ opacity: ".9" }}
        >
          See a doctor now
        </Button>
      </Flex>
    </SpacedContainer>
  </div>
);

export default QualityCare;
