import { Grid,Box,Container } from "@chakra-ui/react";
import React from "react";

import AboutDoctorCard from "./AboutDoctorCard";
import Virtual from "../../static/home/virtual.jpg";
import Pharmacy from "../../static/home/pharmacy.jpg";
import Optimum from "../../static/home/optimum.jpg";

const AboutDoctor = () => {

	const margin_x = {sm: "6",md: "24",lg: "24",xl: "24",base: "6"};

	return (
		<div>
			<Box maxW='100%' px={margin_x} py={5}>
				<Container maxW='container.2xl'>
					<Grid templateColumns={{sm: "repeat(1, 1fr)",md: "repeat(3, 1fr)",lg: "repeat(3, 1fr)",base: "repeat(1, 1fr)"}} gap={6}>
						<AboutDoctorCard image={Virtual} text='Your best virtual healthcare'/>
						<AboutDoctorCard image={Pharmacy} text='World class doctors, hospitals and pharmacies'/>
						<AboutDoctorCard image={Optimum} text='Get optimum treatment'/>
					</Grid>
				</Container>
			</Box>
		</div>
	);
};

export default AboutDoctor;
