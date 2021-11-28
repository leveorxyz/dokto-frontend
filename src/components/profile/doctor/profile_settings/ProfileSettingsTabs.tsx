import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";

import ExperienceEducation from "./ExperienceEducation";
import ProfileDetails from "./ProfileDetails";

export default function ProfileSettingsTabs() {
  const tabs = ["Personal Details", "Experience & Education", "Professional Profile", "Insurances"];
  return (
    <Tabs align="start" variant="unstyled" w="100%" orientation="vertical" display="grid" gridTemplateColumns="auto 1fr">
      <TabList>
        {tabs.map((title) => (
          <Tab
            key={title}
            bgColor="white"
            color="brand.dark"
            rounded="lg"
            border="2px"
            fontSize={["xs", "sm", "md", "lg", "lg"]}
            fontWeight="bold"
            borderColor="brand.dark"
            _hover={{ bgColor: "brand.darkPink", color: "white" }}
            _selected={{ color: "white", bg: "brand.darkPink" }}
          >
            {title}
          </Tab>
        ))}
      </TabList>

      <TabPanels
        borderRadius="lg"
        boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
        filter="drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))"
      >
        <TabPanel>
          <ProfileDetails />
        </TabPanel>

        <TabPanel>
          <ExperienceEducation />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
