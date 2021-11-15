import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";

import NotImplemented from "../../NotImplemented";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

export default function ProfileTabs() {
  const tabs = ["Provider Details", "Services & available hours", "Reviews"];
  return (
    <Tabs variant="unstyled" isFitted>
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
            textTransform="uppercase"
            bgColor="white"
            color="brand.darkPink"
            fontSize={["xs", "sm", "md", "lg", "lg"]}
            fontWeight="bold"
            borderRightWidth={idx === tabs.length - 1 ? "0" : "2px"}
            borderColor="brand.dark"
            _hover={{ bgColor: "brand.dark", color: "white" }}
            _selected={{ color: "white", bg: "brand.dark" }}
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
          <NotImplemented />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
