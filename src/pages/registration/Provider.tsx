import {
  Box, Flex, Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";

import { SpacedContainer } from "../../components/common/Containers";
import NotImplemented from "../../components/NotImplemented";
import DoctorRegistration from "../../components/forms/provider-registration/doctor";

export default function Provider() {
  return (
    <>
      {/* TODO: Implement header component */}

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
              <NotImplemented />
            </TabPanel>

            <TabPanel p={0}>
              <NotImplemented />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </SpacedContainer>
    </>
  );
}
