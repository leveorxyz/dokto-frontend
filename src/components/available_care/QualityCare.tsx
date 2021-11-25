import {
  Heading, Box, Flex, Button, Divider, Image,
} from "@chakra-ui/react";

import { SpacedContainer } from "../common/Containers";
import doctorsSVG from "../../static/doctors.svg";
import doktoIcon from "../../static/DoktoIcon.png";

const QualityCare = () => (
  <div>
    <SpacedContainer py={100}>
      <Flex direction="column" alignItems="center">
        <Box position="relative">
          <Image src={doctorsSVG} height="100%" fit="contain" overflow="hidden" />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
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
          >
            <Image
              height="100%"
              width="auto"
              src={doktoIcon}
              fit="contain"
            />
          </Box>
        </Box>
        <Heading as="h1" fontWeight="bold" fontSize="7xl" pt="12" color="brand.darkPink" textAlign="center">Quality care with peace of mind.</Heading>
        <Box p="12" borderColor="brand.light">
          <Divider sx={{
            borderBottomWidth: 2,
            borderBottomColor: "primary.light",
          }}
          />
          <Box fontSize="lg" color="brand.light" py="1rem" px={[0, 0, "3rem", "4rem"]}>Our board-certified doctors and specialists can diagnose and treat a wide variety of things remotely.</Box>
          <Divider sx={{
            borderBottomWidth: 2,
            borderBottomColor: "primary.light",
          }}
          />
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
