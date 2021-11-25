import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";
import DeleteAccount from "./DeleteAccount";
import EmailNotification from "./EmailNotification";

import PasswordReset from "./PasswordReset";
import SecuritySettings from "./SecuritySettings";

export default function ProfileSettingsTabs() {
  const tabs = ["Security & Settings", "Password Reset", "Email Notification", "Delete Account"];
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
          <SecuritySettings />
        </TabPanel>

        <TabPanel>
          <PasswordReset />
        </TabPanel>

        <TabPanel>
          <EmailNotification />
        </TabPanel>

        <TabPanel>
          <DeleteAccount />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
