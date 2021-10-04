import {
  Box, Container, Grid, Heading,
} from "@chakra-ui/react";
import React from "react";
import { IconContext } from "react-icons";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import FeaturedDoctorCard from "./FeaturedDoctorCard";

const FeaturedDoctor = () => (
  <div>
    <Box bg="#0099cc" maxW="100%" px={[6, 6, 32, 32, 32]} py={18}>
      <Container maxW="container.2xl">
        <Box d="flex" justifyContent="space-between" alignItems="center" mb="7">
          <Box><Heading as="h1" size="lg" alignItems="center" fontWeight="bold" color="white">Our Featured Doctors</Heading></Box>
          <Box>
            <Box d="flex" flexDir="row">
              <Box mr="1">
                <IconContext.Provider value={{ color: "#00ffff" }}>
                  <FaArrowLeft size={20} />
                </IconContext.Provider>
              </Box>
              <Box>
                <IconContext.Provider value={{ color: "#00ffff" }}>
                  <FaArrowRight size={20} />
                </IconContext.Provider>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box py={{
          sm: "12", md: "6", lg: "6", xl: "6", base: "12",
        }}
        >
          <Grid
            templateColumns={{
              sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)", base: "repeat(1, 1fr)",
            }}
            gap={{
              sm: "15", md: "6", lg: "6", xl: "6", base: "16",
            }}
          >
            <FeaturedDoctorCard />
            <FeaturedDoctorCard />
            <FeaturedDoctorCard />
            <FeaturedDoctorCard />
          </Grid>
        </Box>
        <Box textAlign="center" color="white" fontSize="md" cursor="pointer" fontWeight="bold">
          View All Doctors
        </Box>
      </Container>
    </Box>
  </div>
);

export default FeaturedDoctor;
