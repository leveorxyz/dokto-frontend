import {
  Box, Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Image, Heading,
} from "@chakra-ui/react";

import { SpacedContainer } from "../../components/common/Containers";
import NotImplemented from "../../components/NotImplemented";
import DoctorRegistration from "../../components/forms/provider-registration/doctor";
import ClinicRegistration from "../../components/forms/provider-registration/clinic";
import PharmacyRegistration from "../../components/forms/provider-registration/pharmacy";
import ProviderRegIMG from "../../static/reg/ProviderReg.png";

export default function Provider() {
  return (
    <>
      <Box bgColor="#E5E5E5" pt={12}>
        <Flex
          direction={["column", "column", "row", "row"]}
          justify={["center", "center", "space-between", "space-between"]}
          align="center"
          height="60vh"
          pl={[3, 3, "10%", "10%"]}
        >
          <Box maxWidth={["100%", "100%", "50%", "45%"]}>
            <Heading
              fontSize={["5xl", "5xl", "5xl", "7xl", "7xl"]}
              fontWeight={800}
              color="brand.dark"
            >
              Provider Registration
            </Heading>
            <Box color="gray.500" mt={6}>
              Lorem Ipsulm Lorem Ipsulm Lorem Ipsulm Lorem Ipsulm
              Lorem Ipsulm Lorem Ipsulm Lorem Ipsulm Lorem Ipsulm
              Lorem Ipsulm Lorem Ipsulm
            </Box>
          </Box>
          <Image src={ProviderRegIMG} fill="contain" height="100%" />
        </Flex>
      </Box>

      <Box bg="rgba(61, 224, 251, 0.06)">
        <SpacedContainer py={12}>
          <Tabs>
            <Flex justifyContent="flex-start" alignItems="center" mb={[3, 3, 6, 12, 12]}>
              <Box as="h2" fontSize="lg" mr={[3, 3, 6, 12, 12]} color="primary.dark">
                Register as a:
              </Box>
              <TabList borderBottomWidth={0}>
                {["Doctor", "Hospital", "Clinic", "Pharmacy"].map(
                  (title) => (
                    <Tab
                      key={title}
                      borderBottomWidth={0}
                      color="gray.300"
                      position="relative"
                      pr={0}
                      mr={4}
                      _selected={{
                        color: "brand.darkPink",
                        _after: {
                          content: "''",
                          bg: "primary.dark",
                          position: "absolute",
                          bottom: 1,
                          right: 0,
                          width: "50%",
                          height: "2px",
                        },
                      }}
                    >
                      {title}
                    </Tab>
                  ),
                )}
              </TabList>
            </Flex>

            <TabPanels>
              <TabPanel p={0}>
                <DoctorRegistration />
              </TabPanel>

              <TabPanel p={0}>
                <NotImplemented />
              </TabPanel>

              <TabPanel p={0}>
                <ClinicRegistration />
              </TabPanel>

              <TabPanel p={0}>
                <PharmacyRegistration />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </SpacedContainer>
      </Box>
    </>
  );
}
