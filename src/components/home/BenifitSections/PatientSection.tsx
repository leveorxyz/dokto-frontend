/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const PatientSection = () => {
  const listData = [
    "The perfect solution for non-urgent care treatment, regular check-ups, and constant contact with your physician, our Telemedicine platform can help with a wide range of medical conditions from the comfort of your home.",
    "You can now considerably cut waiting times as you browse our extensive database of experts – from Primary Care Providers, to Dermatologists, Counselors, Therapists, Home Health Caregivers, Nurse Practitioners and more. You are sure to find a specialist that meets your time, location and budgetary needs.",
    "Dokto makes it easier for our patients to get increased access to a wider range of specialist care. If you have mobility challenges, are an older patient, live in remote areas, or simply cannot afford the time to get toa physical hospital, we bring smart, virtual care to you; with the full experience of a hospital. From physician appointments to tests, results, prescriptions and more, be rest assured that your health is in good hands.",
    "Even better, most insurance companies happily cover telehealth services as they are ideal for preventive care that improves long-term health, and reduce the spread of infection from sitting in close quarters with people who may be sick.",
    "Your physician can engage you virtually, helping you make and stick to healthy lifestyle choices. Reaching out to you is simplified; making it easier to reach out with questions, report early warning signs, make follow-up appointments to ensure you’re on track.",
    "What could be simpler?",
  ];

  return (
    <div>
      <Box mb="50">
        <Heading fontSize="2xl" px={[0, 0, 6, 6, 6]} fontWeight="semibold" color="#170041" mt="4" textTransform="capitalize">An Appointment at The Click of a Button</Heading>
        {listData
          .map((data) => (
            <Box key={data} fontSize="lg" px={[0, 0, 6, 6, 6]} color="black" mt="4">{data}</Box>
          ))}
      </Box>
    </div>
  );
};

export default PatientSection;
