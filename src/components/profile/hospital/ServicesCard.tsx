import {
  Box,
  Flex,
  Avatar,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import { AiFillPlusCircle } from "react-icons/ai";

const ServicesCard = () => {
  const titles = [
    "Allergic Asthma",
    "Allergic cough",
    "Allergic Eye Problem",
    "Allergic Larynigitis",
    "Biochemical genetics",
    "Biochemical genetics",
    "Biochemical genetics",
    "Biochemical genetics",
    "Biochemical genetics",
    "Biochemical genetics",
    "Biochemical genetics",
    "Biochemical genetics",
    "Biochemical genetics",
    "Biochemical genetics",
    "Biochemical genetics",
  ];
  return (
    <Box px="4" py="2" fontFamily="poppins">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem mb="1">
          <AccordionButton rounded="2xl" border="1px" borderColor="#c2cace" bgColor="#fafafd" d="flex" justifyContent="space-between" p="4">
            <Flex alignItems="center">
              <Avatar size="lg" src="" />
              <Box alignItems="baseline" color="brand.dark" fontSize="xl" d="flex" flexDir="column" ml="1rem">
                <Box fontWeight="bold">
                  Jane Smith
                </Box>
                <Box color="brand.darkPink" fontSize="md">
                  Allergies
                </Box>
              </Box>
            </Flex>
            <Button
              bgColor="brand.darkPink"
              color="white"
              _hover={{
                outline: "none",
                opacity: ".80",
              }}
              _active={{
                outline: "none",
                opacity: ".80",
              }}
              _focus={{
                outline: "none",
                opacity: ".80",
              }}
            >
              <Box mr="2">View Services</Box>
              <Box as={AiFillPlusCircle} size={24} color="white" />
            </Button>
          </AccordionButton>
          <AccordionPanel d="flex" flexDir="column">
            {titles
              .map((title) => (
                <Box
                  key={title}
                  as={Button}
                  d="flex"
                  flexDir="row"
                  justifyContent="space-between"
                  backgroundColor="rgba(61, 224, 255, 0.14)"
                  px="4.5rem"
                  py="2"
                  fontWeight="normal"
                  fontSize="lg"
                  color="#3b3a3e"
                  rounded="xl"
                  border="1px"
                  borderColor="gray.300"
                  _hover={{
                    border: "2px",
                    borderColor: "#3DE0FF",
                  }}
                  _focus={{
                    border: "2px",
                    borderColor: "#3DE0FF",
                  }}
                >
                  <Box>
                    {title}
                  </Box>
                  <Box>
                    $234.35
                  </Box>
                </Box>
              ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
export default ServicesCard;
