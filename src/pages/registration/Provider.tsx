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
          <Flex justifyContent="space-between">
            <Box>
              Register as a:
            </Box>
            <TabList>
              <Tab>Doctor</Tab>
              <Tab>Hospital</Tab>
              <Tab>Clinic</Tab>
              <Tab>Pharmacy</Tab>
            </TabList>
          </Flex>

          <TabPanels>
            <TabPanel>
              <DoctorRegistration />
            </TabPanel>

            <TabPanel>
              <NotImplemented />
            </TabPanel>

            <TabPanel>
              <NotImplemented />
            </TabPanel>

            <TabPanel>
              <NotImplemented />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </SpacedContainer>
    </>
  );
}
