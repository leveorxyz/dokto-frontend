import React from "react";
import {
  Box, Flex, Text, Image, Input, Select, Button, IconButton, Link, Heading,
} from "@chakra-ui/react";

import { IoSearch } from "react-icons/io5";
import SearchDoctorSVG from "../../static/SearchDoctor.svg";
import { SpacedContainer } from "../common/Containers";

export default function LandingSearch() {
  return (
    <SpacedContainer>
      <Flex height={["35vh", "25vh", "25vh", "25vh"]} direction={["column", "column", "row", "row"]}>
        <Box width={["100%", "100%", "35%", "35%"]} p="5" bg="#170041" d="flex" flexDir="row" alignItems="center">
          <Heading as="h2" flex="1" mr="5" fontWeight="bold" fontSize="xl" textTransform="uppercase" color="white">Search our doctors</Heading>
          <Image
            display="block"
            src={SearchDoctorSVG}
            fit="cover"
            flex="1"
            height="100%"
          />
        </Box>
        <Box
          width={["100%", "100%", "65%", "65%"]}
          backgroundColor="#F4F4F4"
          px={[4, 8, 12, 24]}
          py={[3, 6, 12, 12]}
        >
          <Text as="h1" fontSize="lg" fontWeight={600} color="#170041">Refine Your Search</Text>
          <Flex
            my={2}
            justifyContent={["space-between", "space-between", "flex-start", "flex-start"]}
            alignItems="center"
            wrap="wrap"
          >
            <Input
              placeholder="Search doctors, clinics, hospitals etc."
              variant="filled"
              colorScheme="white"
              width={["100%", "48%", "40%", "35%"]}
              sx={{
                backgroundColor: "white",
              }}
              mr={[0, 0, 2, 3]}
              my={[2, 2, 0, 0]}
            />
            <Select
              placeholder="Select a location"
              color="#4D4C4C"
              variant="filled"
              colorScheme="white"
              width={["100%", "48%", "40%", "35%"]}
              sx={{
                backgroundColor: "white",
              }}
              mr={[0, 0, 2, 3]}
              my={[2, 2, 0, 0]}
            >
              {[...Array(4).keys()]
                .map((item:string| number) => (
                  <option key={item} value={item}>
                    Option
                    {item}
                  </option>
                ))}
            </Select>

            <Link href="/" color="#3DE0FF" textDecor="underline" display={["inline-block", "inline-block", "none", "none"]}>
              Advanced search
            </Link>

            <Button
              variant="solid"
              colorScheme="#3DE0FF"
              aria-label="Search doctors, clinics, hospitals, etc."
              leftIcon={<IoSearch />}
              display={["flex", "none", "none", "none"]}
              my={[2, 2, 0, 0]}
            >
              Search
            </Button>

            <IconButton
              variant="solid"
              colorScheme="cyan"
              aria-label="Search doctors, clinics, hospitals, etc."
              icon={<IoSearch size="1.2rem" />}
              display={["none", "flex", "flex", "flex"]}
            />
          </Flex>

          <Link href="/" color="cyan.500" textDecor="underline" display={["none", "none", "block", "block"]}>
            Advanced search
          </Link>
        </Box>
      </Flex>
    </SpacedContainer>
  );
}
