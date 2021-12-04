import {
  Avatar,
  Box, Button, Center, Divider, Flex, Link, Text,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import {
  IoArrowBack,
  IoLanguage, IoLocationOutline,
} from "react-icons/io5";
import {
  GrCertificate,
} from "react-icons/gr";
import { SpacedContainer } from "../common/Containers";
import Profile from "../../static/doctors/doctorLists.jpg";
import patientEncountersAtom from "../../atoms/ehr/patientEncounters";

const DoctorLists = () => {
  const data = useRecoilValue(patientEncountersAtom);
  return (
    <SpacedContainer py="8" px={[4, 8, 8, 8]}>
      <Flex>
        <Box width="50%">
          <Text as="h1" fontWeight={600} color="brand.dark" mb="6">60 Matches found</Text>
          {data.map((v) => (
            <Flex
              key={v.code}
              border="1px solid"
              borderColor="gray.300"
              borderRadius="20"
              height="60"
              mb="12"
              boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
              _hover={{
                boxShadow: "0 10px 30px 0 rgb(205 204 219 / 25%)",
                filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))",
              }}
            >
              <Box width="60%">
                <Flex p="4" alignItems="center">
                  <Flex basis="30%" direction="column" mr="4">
                    <Avatar name="dummy" src={Profile} boxSize="8rem" />
                  </Flex>
                  <Flex basis="70%" direction="column">
                    <Box alignItems="center" my={2} color="brand.dark">
                      <Text as="h1" fontSize="xl" fontWeight={700} whiteSpace="nowrap">
                        Dr. Rita Ora, MD
                      </Text>
                      <Text>
                        Primary Care Doctor
                      </Text>
                      <Box fontSize="md" d="flex" flexDir="row" alignItems="center" mt="4">
                        <IconContext.Provider value={{ color: "#F1C40F" }}>
                          <FaStar />
                        </IconContext.Provider>
                        <Box ml="2" mr="4" fontWeight="semibold">4.85</Box>
                        <Box>1751 reviews</Box>
                      </Box>
                    </Box>
                  </Flex>
                </Flex>
                <Divider sx={{
                  borderBottomWidth: 2,
                  borderBottomColor: "gray.200",
                }}
                />
                <Flex p="4">
                  <Button
                    variant="solid"
                    px="12"
                    aria-label="Search doctors, clinics, hospitals, etc."
                    bgColor="brand.dark"
                    color="#fff"
                    fontWeight="600"
                    mr="2"
                    my={[2, 2, 0, 0]}
                    _hover={{ opacity: ".85" }}
                    _active={{ opacity: ".85" }}
                  >
                    Schedule Appointment
                  </Button>
                  <Button
                    variant="solid"
                    px="12"
                    aria-label="Search doctors, clinics, hospitals, etc."
                    bgColor="primary.light"
                    color="#fff"
                    fontWeight="600"
                    my={[2, 2, 0, 0]}
                    _hover={{ opacity: ".85" }}
                    _active={{ opacity: ".85" }}
                  >
                    Save
                  </Button>
                </Flex>
              </Box>
              <Box pt="4" pr="4" w="40%">

                <Box backgroundColor="primary.dark" height="60" borderRadius="20">
                  <Box fontSize="md" px="4" pt="4" d="flex" flexDir="row" mr="8" mb="4">

                    <Box as={IoLocationOutline} size={30} color="brand.pink" />

                    <Box ml="2" color="#fff">
                      New York, NY
                      Long Island
                    </Box>
                  </Box>
                  <Box fontSize="md" px="4" d="flex" flexDir="row" mr="8" mb="4">

                    <Box as={IoLanguage} size={30} color="brand.pink" />

                    <Box ml="2" color="#fff">
                      English, French, Spanish
                    </Box>
                  </Box>
                  <Box fontSize="md" px="4" d="flex" flexDir="row" mr="8" mb="4">

                    <Box as={GrCertificate} size={30} color="brand.pink" />

                    <Center ml="2" color="#fff" backgroundColor="#2ECC71" borderRadius="20" fontSize="12px" px="4" py="1" fontWeight="600">
                      VERIFIED
                    </Center>
                  </Box>
                  <Divider
                    sx={{
                      borderBottomWidth: 1,
                      borderBottomColor: "primary.light",
                    }}
                  />
                  <Link to="/" backgroundColor="transparent" color="#fff" _hover={{ backgroundColor: "transparent" }} mt="2" width="100%">
                    <Flex justifyContent="space-between" alignItems="center">
                      <Box>View Profile</Box>
                      <Box>
                        <IconContext.Provider value={{ color: "#FF00FF" }}>
                          <IoArrowBack size={30} />
                        </IconContext.Provider>
                      </Box>
                    </Flex>
                  </Link>

                </Box>

              </Box>
            </Flex>
          ))}

        </Box>

        <Box
          mt="12"
          ml="8"
          as="iframe"
          width="50%"
          height="100ve"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=bangladesh+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/car-satnav-gps/">car gps</a>

        </Box>
      </Flex>
    </SpacedContainer>
  );
};
export default DoctorLists;
