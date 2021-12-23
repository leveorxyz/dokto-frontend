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

import Profile from "../../../../static/doctors-listing/doctorLists.jpg";
import patientEncountersAtom from "../../../../atoms/ehr/patientEncounters";

const SavedDoctorsList = () => {
  const data = useRecoilValue(patientEncountersAtom);
  return (
    <Box>
      {data.map((v) => (
        <Box
          key={v.code}
          border="1px solid"
          borderColor="gray.300"
          p="6"
          d="flex"
          flexDir={["column", "column", "column", "row"]}
          borderRadius="xl"
          mb="6"
          boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
          _hover={{
            boxShadow: "0 10px 30px 0 rgb(205 204 219 / 25%)",
            filter: "drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))",
          }}
        >
          <Box minW={["100%", "100%", "55%", "55%"]} mb="2">
            <Flex alignItems="center" direction={["column", "column", "column", "row"]}>
              <Avatar name="dummy" src={Profile} size="4xl" />
              <Flex direction="column" ml="6">
                <Flex alignItems="flex-end" mb="4">
                  <Box alignItems="center" color="brand.dark">
                    <Text as="h1" fontSize="xl" fontWeight={700} whiteSpace="nowrap">
                      Dr. Rita Ora, MD
                    </Text>
                    <Text>
                      Primary Care Doctor
                    </Text>
                  </Box>
                  <Box fontSize="md" d="flex" flexDir="row" alignItems="center" ml="6">
                    <IconContext.Provider value={{ color: "#F1C40F" }}>
                      <FaStar />
                    </IconContext.Provider>
                    <Box ml="2" mr="4" fontWeight="semibold">4.85</Box>
                    <Box>1751 reviews</Box>
                  </Box>
                </Flex>
                <Divider mb="4" />
                <Flex>
                  <Button
                    variant="solid"
                    aria-label="Search doctors, clinics, hospitals, etc."
                    bgColor="brand.dark"
                    color="#fff"
                    fontWeight="600"
                    mr="2"
                    _hover={{ opacity: ".85" }}
                    _active={{ opacity: ".85" }}
                  >
                    Schedule Appointment
                  </Button>
                  <Button
                    variant="solid"
                    aria-label="Search doctors, clinics, hospitals, etc."
                    bgColor="red"
                    color="#fff"
                    fontWeight="600"
                    _hover={{ opacity: ".85" }}
                    _active={{ opacity: ".85" }}
                  >
                    Remove
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Box>
          <Box minW={["100%", "100%", "45%", "45%"]}>
            <Box backgroundColor="primary.dark" rounded="lg" p="6">
              <Flex alignItems="flex-start" wrap="wrap">
                <Box flex="1" d="flex" alignItems="flex-start">
                  <Box as={IoLocationOutline} size={30} color="brand.pink" />

                  <Box color="#fff" ml="2">
                    <Box>New York, NY</Box>
                    <Box>Long Island</Box>
                  </Box>
                </Box>
                <Box flex="1" d="flex" alignItems="flex-start">
                  <Box as={IoLanguage} size={30} color="brand.pink" />

                  <Box color="#fff" ml="2">
                    <Box>English, French,</Box>
                    <Box>Spanish</Box>
                  </Box>
                </Box>
                <Box flex="1" d="flex" alignItems="flex-start">
                  <Box
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

                  <Box color="#fff" backgroundColor="#2ECC71" borderRadius="20" fontSize="10px" fontWeight="600" py="1" px="2">
                    VERIFIED
                  </Box>
                </Box>
              </Flex>
              <Divider
                sx={{
                  my: "4",
                  borderBottomWidth: 1,
                  borderBottomColor: "#2D0081",
                }}
              />
              <Link to="/" color="#fff" width="100%">
                <Flex justifyContent="space-between" alignItems="center">
                  <Box w="50%" />
                  <Box d="flex" alignItems="center">
                    <Box fontWeight="600" mr="10">View Profile</Box>
                    <Box as={IoArrowForward} size={30} color="primary.light" />
                  </Box>
                </Flex>
              </Link>

            </Box>

          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SavedDoctorsList;
