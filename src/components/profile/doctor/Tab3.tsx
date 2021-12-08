import {
  Box,
  Image,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import AddIcon from "../../../static/Plus.svg";
import MinusIcon from "../../../static/Minus.svg";

export default function Tab3() {
  const titles = [
    {
      title: "Emergency Services",
      services: "4",
    },
    {
      title: "Obstetrics and gynecology",
      services: "3",
    },
    {
      title: "Medical Genetics",
      services: "4",
    },
    {
      title: "Dermatology",
      services: "2",
    },
    {
      title: "Family Medicine",
      services: "3",
    },
    {
      title: "Pathology",
      services: "3",
    }];

  return (
    <Box px="4" py="2" fontFamily="poppins">
      <Accordion defaultIndex={[0]} allowMultiple>
        {titles
          .map(({ title, services }) => (
            <AccordionItem key={title} mb="1.5">
              {({ isExpanded }) => (
                <>
                  <AccordionButton rounded="2xl" border="1px" borderColor="#c2cace" bgColor="#fafafd">
                    <Box flex="1" textAlign="left" color="brand.dark" fontSize="xl" d="flex" flexDir="column" ml="2.5rem">
                      <Box>
                        {title}
                      </Box>
                      <Box color="rgba(51, 51, 51, 0.5)" fontSize="md">
                        {`${services} Services`}
                      </Box>
                    </Box>
                    {isExpanded ? (
                      <Image src={MinusIcon} w="1.25%" />
                    ) : (
                      <Image src={AddIcon} w="1.25%" />
                    )}
                  </AccordionButton>
                  <AccordionPanel d="flex" flexDir="column">
                    <Box
                      as={Button}
                      d="flex"
                      flexDir="row"
                      justifyContent="space-between"
                      backgroundColor="rgba(61, 224, 255, 0.14)"
                      px="4"
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
                      <Box ml="2.5rem">
                        Biochemical genetics
                      </Box>
                      <Box>
                        $234.35
                      </Box>
                    </Box>
                    <Box
                      as={Button}
                      d="flex"
                      flexDir="row"
                      justifyContent="space-between"
                      backgroundColor="rgba(61, 224, 255, 0.14)"
                      px="4"
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
                      <Box ml="2.5rem">
                        Cytogenetics
                      </Box>
                      <Box>
                        $234.35
                      </Box>
                    </Box>
                    <Box
                      as={Button}
                      d="flex"
                      flexDir="row"
                      justifyContent="space-between"
                      backgroundColor="rgba(61, 224, 255, 0.14)"
                      px="4"
                      py="2"
                      fontWeight="normal"
                      fontSize="lg"
                      color="#3b3a3e"
                      rounded="lg"
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
                      <Box ml="2.5rem">
                        Clinical genetics
                      </Box>
                      <Box>
                        $234.35
                      </Box>
                    </Box>
                    <Box
                      as={Button}
                      d="flex"
                      flexDir="row"
                      justifyContent="space-between"
                      backgroundColor="rgba(61, 224, 255, 0.14)"
                      px="4"
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
                      <Box ml="2.5rem">
                        Genetic pathology
                      </Box>
                      <Box>
                        $234.35
                      </Box>
                    </Box>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
      </Accordion>
    </Box>
  );
}
