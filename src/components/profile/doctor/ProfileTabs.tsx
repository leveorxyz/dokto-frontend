import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

export default function ProfileTabs() {
  const tabs = ["Provider Details", "Available Hours", "Services", "Reviews"];
  return (
    <Tabs variant="unstyled" isFitted w="100%">
      <TabList sx={{
        borderRadius: "1rem",
        border: "2px",
        borderColor: "brand.dark",
        overflow: "hidden",
      }}
      >
        {tabs.map((title, idx) => (
          <Tab
            key={title}
            py={[2, 2, 2, 4, 4]}
            textTransform="capitalize"
            bgColor="white"
            color="brand.dark"
            fontSize={["xs", "sm", "md", "lg", "lg"]}
            fontWeight="bold"
            borderRightWidth={idx === tabs.length - 1 ? "0" : "2px"}
            borderColor="brand.dark"
            _hover={{ bgColor: "brand.darkPink", color: "white" }}
            _selected={{ color: "white", bg: "brand.darkPink" }}
          >
            {title}
          </Tab>
        ))}
      </TabList>

      <TabPanels bg="gray.100" mt={3} rounded="lg">
        <TabPanel>
          <Tab1 />
        </TabPanel>

        <TabPanel>
          <Tab2 />
        </TabPanel>

        <TabPanel>
          <Tab3 />
        </TabPanel>

        <TabPanel>
          <Tab4 />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
