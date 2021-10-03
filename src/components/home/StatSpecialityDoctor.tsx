import { Grid,Box } from "@chakra-ui/react";
import React from "react";

const StatSpecialityDoctor = () => {
	return (
		<div>
			<Grid templateColumns='repeat(2, 1fr)' templateRows='repeat(2, 1fr)' gap={6} w='100%'>
				<Box textAlign='center' border='1px' borderColor='black' p='100'>75</Box>
				<Box textAlign='center' border='1px' borderColor='black' p='100'>45</Box>
				<Box textAlign='center' border='1px' borderColor='black' p='100'>35</Box>
				<Box textAlign='center' border='1px' borderColor='black' p='100'>5</Box>
			</Grid>
		</div>
	);
};

export default StatSpecialityDoctor;
