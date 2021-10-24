import React from "react";
import { Link } from "react-router-dom";
import {
  Box, Flex, Button, Input, InputGroup, InputRightElement, Link as ChakraLink, Image,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

import SocialIcons from "../common/SocialIcons";
import { SpacedContainer } from "../common/Containers";
import StoreIMG from "../../static/Store.png";

export function UpperMenuActions() {
  return (
    <Flex direction="row" justifyContent="space-between" alignItems="center">
      <Button size="sm" mx={{ base: 2, md: 0 }} variant="ghost" borderWidth={2} borderColor="brand.dark">Dokto News</Button>
      <Link to="contact">
        <Button size="sm" mx={{ base: 2, md: 0 }} variant="ghost" borderWidth={2} borderColor="brand.dark">Contact Us</Button>
      </Link>
      <InputGroup
        size="sm"
        maxWidth="40%"
        display={["none", "none", "block", "block"]}
        sx={{
          ".chakra-input": {
            bg: "brand.dark",
            color: "white",
            borderColor: "brand.dark",
          },
          ".chakra-input::placeholder": {
            color: "gray.100",
          },
        }}
      >
        <InputRightElement pointerEvents="none">
          <Box as={IoSearch} size="1rem" color="gray.100" />
        </InputRightElement>
        <Input
          rounded="md"
          variant="filled"
          placeholder="Search Doctors"
        />
      </InputGroup>
      <Box>
        <ChakraLink as={Link} to="/">
          <Image cursor="pointer" w="160px" px={6} py={3} src={StoreIMG} />
        </ChakraLink>
      </Box>
    </Flex>
  );
}

export default function UpperNavBar() {
  return (
    <SpacedContainer>
      <Flex
        w="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        display={["none", "none", "flex", "flex"]}
        wrap="wrap"
      >
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Box>
        <Flex>
          <SocialIcons />
          <UpperMenuActions />
        </Flex>
      </Flex>
    </SpacedContainer>
  );
}
