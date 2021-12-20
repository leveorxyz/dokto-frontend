import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";

import ProfileDetails from "./ProfileDetails";

export default function ProfileSettingsTabs() {
  const tabs = ["Personal Details"];
  return (
    <Tabs
      align="start"
      variant="unstyled"
      w="100%"
      orientation="vertical"
      display="grid"
      gridTemplateColumns="auto 1fr"
    >
      <TabList
        sx={{
          borderRadius: "0.5rem",
          border: "1px",
          borderColor: "brand.dark",
          height: "max-content",
          overflow: "hidden",
        }}
      >
        {tabs.map((title, idx) => (
          <Tab
            key={title}
            textAlign="left"
            justifyContent="start"
            bgColor="white"
            color="brand.dark"
            borderBottomWidth={idx === tabs.length - 1 ? "0" : "1px"}
            fontSize={["xs", "sm", "md", "lg", "lg"]}
            fontFamily="sora"
            borderColor="brand.dark"
            _hover={{ bgColor: "brand.darkPink", color: "white" }}
            _selected={{ color: "white", bg: "brand.darkPink" }}
          >
            {title}
          </Tab>
        ))}
      </TabList>

      <TabPanels
        bgColor="white"
        borderRadius="lg"
        boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
        filter="drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))"
      >
        <TabPanel>
          <ProfileDetails />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
