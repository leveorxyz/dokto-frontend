import {
  Avatar,
  Box, Button, Center, Divider, Flex, Link, Text,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import {
  IoArrowForward,
  IoLanguage, IoLocationOutline,
} from "react-icons/io5";

import { SpacedContainer } from "../common/Containers";
import Profile from "../../static/doctors-listing/doctorLists.jpg";
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
              mb="14"
              boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
              _hover={{
                boxShadow: "0 10px 30px 0 rgb(205 204 219 / 25%)",
                filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))",
              }}
            >
              <Box w="65%">
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
              <Box pt="4" pr="4" w="35%">

                <Box backgroundColor="primary.dark" height="64" rounded="lg">
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
                  <Box fontSize="md" px="4" d="flex" flexDir="row" mr="8" mb="2" alignItems="center">
                    <Box
                      mt="3"
                      as="svg"
                      role="img"
                      width="30px"
                      height="30px"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      _hover={{
                        fill: "brand.accent",
                      }}
                    >
                      <path d="M13.4824 11.7803H11.1709V9.52148C11.6133 9.02051 11.8799 8.37012 11.8799 7.6582C11.8799 6.08789 10.5791 4.81348 8.97949 4.81348C7.37988 4.81348 6.0791 6.09082 6.0791 7.6582C6.0791 8.37012 6.3457 9.02051 6.78809 9.52148V11.7803H1.51758V1.51758H13.4795V11.7803H13.4824ZM8.97949 12.0762L7.99219 12.835V10.3359C8.2998 10.4443 8.63379 10.5059 8.97949 10.5059C9.3252 10.5059 9.65918 10.4473 9.9668 10.3359V12.835L8.97949 12.0762ZM8.97949 9.31055C8.03906 9.31055 7.27441 8.56934 7.27441 7.6582C7.27441 6.74707 8.03906 6.00586 8.97949 6.00586C9.91992 6.00586 10.6846 6.74707 10.6846 7.6582C10.6846 8.56934 9.91992 9.31055 8.97949 9.31055ZM14.0801 0.322266H0.919922C0.588867 0.322266 0.322266 0.588867 0.322266 0.919922V12.3779C0.322266 12.709 0.588867 12.9756 0.919922 12.9756H6.78809V14.0918C6.78809 14.5752 7.34473 14.8506 7.72852 14.5547L8.97949 13.5938L10.2305 14.5547C10.6143 14.8506 11.1709 14.5752 11.1709 14.0918V12.9756H14.0801C14.4111 12.9756 14.6777 12.709 14.6777 12.3779V0.919922C14.6777 0.588867 14.4111 0.322266 14.0801 0.322266Z" fill="#FF00FF" />
                      <path d="M4.42676 4.24512H10.5703C10.9014 4.24512 11.168 3.97852 11.168 3.64746C11.168 3.31641 10.9014 3.0498 10.5703 3.0498H4.42676C4.0957 3.0498 3.8291 3.31641 3.8291 3.64746C3.8291 3.97559 4.09863 4.24512 4.42676 4.24512Z" fill="#FF00FF" />
                    </Box>

                    <Center color="#fff" backgroundColor="#2ECC71" borderRadius="20" fontSize="10px" px="4" h="6" fontWeight="600">
                      VERIFIED
                    </Center>
                  </Box>
                  <Divider
                    sx={{
                      borderBottomWidth: 1,
                      borderBottomColor: "#2D0081",
                    }}
                  />
                  <Link to="/" color="#fff" width="100%">
                    <Flex justifyContent="space-between" alignItems="center" px="4" mt="4">
                      <Box fontWeight="600">View Profile</Box>
                      <Box as={IoArrowForward} size={30} color="primary.light" />

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
