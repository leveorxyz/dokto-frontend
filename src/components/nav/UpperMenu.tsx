import { Link } from "react-router-dom";
import {
  Box, Flex, Button, Input, InputGroup, InputRightElement, Link as ChakraLink, Image,
} from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

import SocialIcons from "../common/SocialIcons";
import StoreIMG from "../../static/Store.png";

export function UpperMenuActions() {
  return (
    <Flex alignItems="center" justifyContent="flex-end" shrink={1} grow={0}>
      <Button size="sm" mr={{ base: 2, md: 1 }} variant="ghost" borderWidth={2} borderColor="brand.dark">Dokto News</Button>
      <Link to="contact">
        <Button size="sm" mr={{ base: 2, md: 1 }} variant="ghost" borderWidth={2} borderColor="brand.dark">Contact Us</Button>
      </Link>
      <InputGroup
        size="sm"
        maxWidth="35%"
        display={["none", "none", "block", "block"]}
        mr={{ base: 2, md: 1 }}
      >
        <InputRightElement pointerEvents="none">
          <Box as={IoSearch} size="1rem" color="gray.100" />
        </InputRightElement>
        <Input
          rounded="md"
          variant="filled"
          placeholder="Search Doctors"
          sx={{
            "&": {
              bg: "brand.dark",
              color: "white",
              borderColor: "brand.dark",
            },
            "&::placeholder": {
              color: "gray.100",
            },
            _focus: {
              "&": {
                bg: "white",
                color: "brand.dark",
                borderColor: "brand.dark",
              },
              "&::placeholder": {
                color: "gray.500",
              },
            },
            _hover: {
              "&": {
                bg: "white",
                color: "brand.dark",
                borderColor: "brand.dark",
              },
              "&::placeholder": {
                color: "gray.500",
              },
            },
          }}
        />
      </InputGroup>
      <Box>
        <ChakraLink as={Link} to="/">
          <Image cursor="pointer" height="36px" src={StoreIMG} />
        </ChakraLink>
      </Box>
    </Flex>
  );
}

export default function UpperNavBar() {
  return (
    <Box px={[3, 3, 3, "5%", "5%"]} py={1}>
      <Flex
        w="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        display={["none", "none", "flex", "flex"]}
        wrap="wrap"
      >
        <Box w="30%">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Box>
        <Flex justifyContent="flex-end" alignItems="center">
          <SocialIcons />
          <UpperMenuActions />
        </Flex>
      </Flex>
    </Box>
  );
}
