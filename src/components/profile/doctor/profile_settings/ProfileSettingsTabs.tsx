import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from "@chakra-ui/react";

import doctorProfile from "../../../../atoms/doctorProfileSettings";
import useProfile from "../../../../hooks/profile/useProfile";
import MessagePage from "../../../common/fallback/MessagePage";
import LoadingPage from "../../../common/fallback/LoadingPage";
import ExperienceEducation from "./ExperienceEducation";
import ProfileDetails from "./ProfileDetails";
import ProfessionalProfile from "./ProfessionalProfile";
import Insurances from "./Insurances";

export default function ProfileSettingsTabs() {
  const tabs = ["Personal Details", "Experience & Education", "Professional Profile", "Insurances"];
  const {
    isLoading, isError, error, isSuccess,
  } = useProfile(doctorProfile);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <MessagePage status="error" title="Error" message={(error as any).message} />;
  }

  if (isSuccess) {
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

          <TabPanel>
            <ExperienceEducation />
          </TabPanel>

          <TabPanel>
            <ProfessionalProfile />
          </TabPanel>

          <TabPanel>
            <Insurances />
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  }

  return <></>;
}
