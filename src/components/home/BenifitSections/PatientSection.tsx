import {
  Flex, Box, Heading, Image,
} from "@chakra-ui/react";
import PatientBenifitIMG from "../../../static/home/PatientBenifit.png";
import PinkBulletList from "../../common/PinkBulletList";
import DoktoIcon from "../../../static/DoktoIcon.png";

const PatientSection = () => {
  const listData = [
    "You can now considerably cut waiting times as you browse our extensive database of experts – from Primary Care Providers, to Dermatologists, Counselors, Therapists, Home Health Caregivers, Nurse Practitioners and more. You are sure to find a specialist that meets your time, location and budgetary needs.",
    "Dokto makes it easier for our patients to get increased access to a wider range of specialist care. If you have mobility challenges, are an older patient, live in remote areas, or simply cannot afford the time to get toa physical hospital, we bring smart, virtual care to you; with the full experience of a hospital. From physician appointments to tests, results, prescriptions and more, be rest assured that your health is in good hands.",
    "Even better, most insurance companies happily cover telehealth services as they are ideal for preventive care that improves long-term health, and reduce the spread of infection from sitting in close quarters with people who may be sick.",
    "Your physician can engage you virtually, helping you make and stick to healthy lifestyle choices. Reaching out to you is simplified; making it easier to reach out with questions, report early warning signs, make follow-up appointments to ensure you’re on track.",
  ];

  return (
    <div>
      <Box mb="50">
        <Box
          fontSize="lg"
          px={[0, 0, 6, 6, 6]}
          pb={12}
          fontWeight={300}
          lineHeight="2rem"
          color="primary.dark"
          mt="4"
        >
          The perfect solution for non-urgent care treatment, regular check-ups,
          and constant contact with your physician, our Telemedicine platform can
          help with a wide range of medical conditions from the comfort of your home.
        </Box>
        <Heading
          fontSize="4xl"
          px={[0, 0, 6, 6, 6]}
          pb={4}
          fontWeight="semibold"
          color="brand.darkPink"
          textTransform="capitalize"
        >
          An Appointment at The Click of a Button
        </Heading>
        <PinkBulletList listData={listData} alignBullet="flex-start" />
        <Heading
          fontSize="4xl"
          px={[0, 0, 6, 6, 6]}
          fontWeight="semibold"
          color="brand.darkPink"
          mt={8}
          textTransform="capitalize"
        >
          What could be simpler?
        </Heading>
      </Box>
      <Flex justifyContent="flex-end">
        <Box
          as="button"
          bgColor="brand.darkPink"
          color="white"
          rounded="3xl"
          p={6}
          mr={[0, 0, 0, 6, 6]}
          textTransform="uppercase"
          _hover={{ opacity: ".9" }}
          _active={{ opacity: ".9" }}
          d="flex"
          flexDir="row"
          alignItems="center"
          flexWrap="nowrap"
        >
          <Box fontSize={["3xl", "3xl", "3xl", "5xl", "5xl"]} fontWeight={800}>See a Doctor Now</Box>
          <Image src={DoktoIcon} ml={12} height={["3rem", "3rem", "3rem", "6rem", "6rem"]} width="auto" fit="contain" />
        </Box>
      </Flex>
      <Image src={PatientBenifitIMG} w="100%" height="auto" pt={24} px={[0, 0, 0, 6, 6]} fit="contain" />
    </div>
  );
};

export default PatientSection;
