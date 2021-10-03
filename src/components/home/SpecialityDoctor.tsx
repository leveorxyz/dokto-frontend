import React from "react";
import { Box,Container,Grid } from "@chakra-ui/layout";
import DescriptionSpecialityDoctor from "./DescriptionSpecialityDoctor";
import StatSpecialityDoctor from "./StatSpecialityDoctor";

const SpecialityDoctor = () => {

	const margin_x = {sm: "6",md: "24",lg: "24",xl: "24",base: "6"};

	return (
		<div>
			<Box maxW='100%' px={margin_x} py={5}>
				<Container maxW='container.2xl'>
					<Grid templateColumns='repeat(2, 1fr)' gap={6}>
						<DescriptionSpecialityDoctor />
						<StatSpecialityDoctor />
					</Grid>
				</Container>
			</Box>
		</div>
	);
};

export default SpecialityDoctor;
