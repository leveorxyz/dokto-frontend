import {
  Box,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import AddIcon from "../../../static/Plus.svg";
import MinusIcon from "../../../static/Minus.svg";

export default function Tab3() {
  const titles = ["Emergency Services", "Obstetrics and gynecology", "Medical Genetics", "Dermatology", "Family Medicine", "Pathology"];

  return (
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple>
        {titles
          .map((title) => (
            <AccordionItem key={title}>
              {({ isExpanded }) => (
                <>
                  <AccordionButton rounded="xl">
                    <Box flex="1" textAlign="left">
                      {title}
                    </Box>
                    {isExpanded ? (
                      <Image src={MinusIcon} w="1.25%" />
                    ) : (
                      <Image src={AddIcon} w="1.25%" />
                    )}
                  </AccordionButton>
                  <AccordionPanel d="flex" flexDir="column">
                    <Box
                      as="button"
                      d="flex"
                      flexDir="row"
                      justifyContent="space-between"
                      backgroundColor="rgba(61, 224, 255, 0.14)"
                      px="4"
                      py="2"
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
                        Biochemical genetics
                      </Box>
                      <Box>
                        $234.35
                      </Box>
                    </Box>
                    <Box
                      as="button"
                      d="flex"
                      flexDir="row"
                      justifyContent="space-between"
                      backgroundColor="rgba(61, 224, 255, 0.14)"
                      px="4"
                      py="2"
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
                        Cytogenetics
                      </Box>
                      <Box>
                        $234.35
                      </Box>
                    </Box>
                    <Box
                      as="button"
                      d="flex"
                      flexDir="row"
                      justifyContent="space-between"
                      backgroundColor="rgba(61, 224, 255, 0.14)"
                      px="4"
                      py="2"
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
                        Clinical genetics
                      </Box>
                      <Box>
                        $234.35
                      </Box>
                    </Box>
                    <Box
                      as="button"
                      d="flex"
                      flexDir="row"
                      justifyContent="space-between"
                      backgroundColor="rgba(61, 224, 255, 0.14)"
                      px="4"
                      py="2"
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
