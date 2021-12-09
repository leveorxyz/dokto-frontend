import {
  Tabs, TabList, TabPanels, Tab, TabPanel, Heading,
} from "@chakra-ui/react";
import SecuritySettings from "./SecuritySettings";

export default function ProfileSettingsTabs() {
  const tabs = ["Security Settings", "Password Reset", "Email Notification", "Delete Account"];
  return (
    <Tabs
      align="start"
      variant="unstyled"
      w="100%"
      orientation="vertical"
      display="grid"
      gridTemplateColumns="auto 1fr"
    >
      <TabList sx={{
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
            bgColor="white"
            color="brand.dark"
            borderBottomWidth={idx === tabs.length - 1 ? "0" : "1px"}
            fontSize={["xs", "sm", "md", "lg", "lg"]}
            fontFamily="sora"
            borderColor="brand.dark"
            _hover={{ bgColor: "brand.darkPink", color: "white" }}
            _selected={{ color: "white", bg: "brand.darkPink" }}
          >
            <Heading as="h3" fontWeight="semibold" fontSize="lg">{title}</Heading>
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
          <SecuritySettings />
        </TabPanel>

        <TabPanel />

        <TabPanel />

        <TabPanel />
      </TabPanels>
    </Tabs>
  );
}
