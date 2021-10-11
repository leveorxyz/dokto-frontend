import React from "react";
import { Link } from "react-router-dom";
import {
  Flex, Button, Input, InputGroup, InputLeftElement,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

import SocialIcons from "../common/SocialIcons";

export function UpperMenuActions() {
  return (
    <Flex direction="row" minWidth={["auto", "auto", "30%", "30%"]} justifyContent="space-between" alignItems="center">
      <Button size="sm" mx={{ base: 2, md: 0 }}>Dokto News</Button>
      <Link to="contact">
        <Button size="sm" mx={{ base: 2, md: 0 }}>Contact Us</Button>
      </Link>
      <InputGroup
        size="sm"
        maxWidth="50%"
        display={["none", "none", "block", "block"]}
      >
        <InputLeftElement pointerEvents="none">
          <IoSearch size="1rem" />
        </InputLeftElement>
        <Input
          rounded="md"
          variant="filled"
          placeholder="Search Doctors"
        />
      </InputGroup>
    </Flex>
  );
}

export default function UpperNavBar() {
  return (
    <Flex
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      display={["none", "none", "flex", "flex"]}
    >
      <SocialIcons />
      <UpperMenuActions />
    </Flex>
  );
}
