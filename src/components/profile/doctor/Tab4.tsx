import React from "react";
import StarRatingComponent from "react-star-rating-component";
import {
  Heading, Box, Flex, Input, InputGroup, InputLeftElement, Select,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

export default function Tab4() {
  const reviews = [
    {
      value: 1,
      text: "Just another COVID-crazy doc. Wouldn’t let me physically enter because I didn’t have a booster. Don’t waste your time",
    },
    {
      value: 1,
      text: "Office was old, cramped, and dirty. Seemed to be under construction.",
    },
    {
      value: 3,
      text: "This was the worst appointment and recommendation follow up that I’ve ever been treated for in my life. Stay away!",
    },
    {
      value: 5,
      text: "Dr. Pollak was great and made my first visit very comfortable. He was up front about everything and very genuine.",
    },
    {
      value: 4,
      text: "This doctor is great and has been so easy to interact with throughout my 3 years as his patient.",
    },
    {
      value: 1,
      text: "The office feels outdated and I had to wait 40 min before I was seen.",
    },
  ];
  return (
    <>
      <Heading as="h3" fontSize="xl" fontWeight="normal" color="brand.dark" mb="3">Patient reviews</Heading>
      <Box color="rgba(51, 51, 51, 0.5)" fontSize="md" mb="3">All reviews have been submitted by patients after seeing the provider</Box>
      <Flex alignItems="center">
        <Box w="12%">
          <Box fontSize="sm" fontWeight="normal" color="brand.dark">Overall Rating</Box>
          <Box fontSize="5xl" fontWeight="normal" color="brand.dark" fontFamily="poppins">4.6</Box>
          <Box mb="5">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={4}
              emptyStarColor="#c4c4c4"
              starColor="#ffc107"
            />
          </Box>
        </Box>
        <Select
          placeholder="Most recent"
          color="#4D4C4C"
          variant="filled"
          size="sm"
          rounded="md"
          border="2px"
          borderColor="brand.dark"
          colorScheme="white"
          width="20%"
          sx={{
            backgroundColor: "white",
          }}
          mr={[0, 0, 5, 7]}
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
        <InputGroup
          size="sm"
          maxWidth="20%"
          display={["none", "none", "block", "block"]}
          mr={{ base: 2, md: 1 }}
        >
          <InputLeftElement pointerEvents="none">
            <Box as={IoSearch} size="1rem" color="brand.dark" />
          </InputLeftElement>
          <Input
            rounded="md"
            variant="filled"
            placeholder="Search"
            sx={{
              "&": {
                borderColor: "brand.dark",
              },
              "&::placeholder": {
                color: "#C2CACE",
              },
              _focus: {
                "&": {
                  bg: "white",
                  color: "brand.dark",
                  borderColor: "brand.dark",
                },
                "&::placeholder": {
                  color: "#C2CACE",
                },
              },
              _hover: {
                "&": {
                  bg: "white",
                  color: "brand.dark",
                  borderColor: "brand.dark",
                },
                "&::placeholder": {
                  color: "#C2CACE",
                },
              },
            }}
          />
        </InputGroup>
      </Flex>
      {reviews.map(({ value, text }) => (
        <Box key={value} my="4">
          <StarRatingComponent
            name="rate2"
            starCount={5}
            starColor="#ffc107"
            emptyStarColor="#c4c4c4"
            value={value}
          />
          <Box fontSize="md" mb="2">{text}</Box>
          <Box color="rgba(51, 51, 51, 0.5)" fontSize="sm">September 2021 | Name hidden</Box>
        </Box>
      ))}
    </>
  );
}
