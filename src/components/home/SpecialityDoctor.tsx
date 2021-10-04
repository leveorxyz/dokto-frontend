import React from "react";
import { Box,Container,Grid } from "@chakra-ui/layout";
import DescriptionSpecialityDoctor from "./DescriptionSpecialityDoctor";
import StatSpecialityDoctor from "./StatSpecialityDoctor";

const SpecialityDoctor = () => {

	const margin_x = {sm: "2",md: "32",lg: "32",xl: "32",base: "2"};

	return (
		<div>
			<Box maxW='100%' px={margin_x} py={20}>
				<Container maxW='container.2xl'>
					<Grid templateColumns={{sm: "repeat(1,1fr)",md: "repeat(2, 1fr)",lg: "repeat(2, 1fr)",base: "repeat(1, 1fr)"}} gap={7}>
						<Box><DescriptionSpecialityDoctor /></Box>
						<Box><StatSpecialityDoctor /></Box>
					</Grid>
				</Container>
			</Box>
		</div>
	);
};

export default SpecialityDoctor;
