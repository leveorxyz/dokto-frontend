import {
  Heading,
  Box,
} from "@chakra-ui/react";

import { SpacedContainer } from "../../components/common/Containers";
import doctorProfileAtom from "../../atoms/doctorProfile";
import useProfile from "../../hooks/profile/useProfile";
import LoadingPage from "../../components/common/fallback/LoadingPage";
import PlanOfCareForm from "../../components/forms/plan-of-care";

export default function PlanOfCare() {
  const { isLoading } = useProfile("doctor", doctorProfileAtom);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <SpacedContainer py={20}>
      <Box
        d="flex"
        flexDir="column"
        borderRadius="3xl"
        borderColor="brand.darkPink"
        boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
      >
        <Heading as="h2" fontSize="xl" fontWeight={500} color="primary.dark" mb="5" background="primary.light" p="2">Plan of Care</Heading>
        {/* <Divider mb="5" /> */}
        <PlanOfCareForm />

      </Box>
    </SpacedContainer>
  );
}
