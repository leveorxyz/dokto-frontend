import {
  Box, Flex, Input, Select, Button, IconButton,
} from "@chakra-ui/react";
import React from "react";
import { IoRefresh, IoSearch } from "react-icons/io5";
import { SpacedContainer } from "../common/Containers";

export default function SearchHeader() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      width={["100%"]}
      backgroundColor="#F4F4F4"
      px={[4, 8, 8, 8]}
      py={[3, 6, 6, 6]}
    >
      <SpacedContainer>

        <Flex
          my={2}
          justifyContent={["space-between", "space-between", "flex-start", "flex-start"]}
          alignItems="center"
          wrap="wrap"
        >
          <Input
            placeholder="Search doctors, clinics, hospitals etc."
            variant="filled"
            _placeholder={{
              color: "#4D4C4C",
            }}
            width="40%"
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
            width="40%"
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

          <Button
            variant="solid"
            aria-label="Search doctors, clinics, hospitals, etc."
            bgColor="brand.dark"
            color="#fff"
            fontWeight="600"
            my={[2, 2, 0, 0]}
            _hover={{ opacity: "1" }}
            _active={{ opacity: "1" }}

          >
            <Flex>
              <Box mr="38px">Search </Box>
              <IoSearch size="1.2rem" color="white" />
            </Flex>
          </Button>

        </Flex>
        <Flex
          my={2}
          justifyContent={["space-between", "space-between", "flex-start", "flex-start"]}
          alignItems="center"
          wrap="wrap"
        >

          <Select
            placeholder="Select a specialty"
            color="#4D4C4C"
            variant="filled"
            colorScheme="white"
            width="40%"
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

          <Select
            placeholder="Select a service"
            color="#4D4C4C"
            variant="filled"
            colorScheme="white"
            width="40%"
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

          <Button
            variant="solid"
            aria-label="Search doctors, clinics, hospitals, etc."
            bgColor="primary.light"
            color="#fff"
            fontWeight="600"
            my={[2, 2, 0, 0]}
            _hover={{ opacity: "1" }}
            _active={{ opacity: "1" }}
          >
            <Flex>
              <Box mr="50px">Reset</Box>
              <IoRefresh size="1.2rem" color="white" />
            </Flex>
          </Button>

        </Flex>
      </SpacedContainer>

    </Box>
  );
}
