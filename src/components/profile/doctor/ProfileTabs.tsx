import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Box,
} from "@chakra-ui/react";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

export default function ProfileTabs() {
  const tabs = ["Provider Details", "Available Hours", "Services", "Reviews"];
  return (
    <Tabs variant="unstyled" isFitted w="100%" boxShadow="md" borderRadius="3xl">
      <TabList sx={{
        borderRadius: "0.5rem",
        border: "1px",
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
            borderRightWidth={idx === tabs.length - 1 ? "0" : "1px"}
            borderColor="brand.dark"
            _hover={{ bgColor: "brand.darkPink", color: "white" }}
            _selected={{ color: "white", bg: "brand.darkPink" }}
          >
            <Heading as="h3" fontWeight="semibold" fontSize="lg">{title}</Heading>
          </Tab>
        ))}
      </TabList>

      <Box as={TabPanels} bgColor="white" rounded="2xl" overflow="hidden">
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
      </Box>
    </Tabs>
  );
}
