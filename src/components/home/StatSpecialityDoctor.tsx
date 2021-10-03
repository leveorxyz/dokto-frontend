import { Grid,Box } from "@chakra-ui/react";
import React from "react";

const StatSpecialityDoctor = () => {
	return (
		<div>
			<Grid templateColumns='auto auto' p='10' gap={6} w='100%'>
				<Box textAlign='center' border='1px' borderColor='black' w='50%'>75</Box>
				<Box textAlign='center' border='1px' borderColor='black' w='50%'>45</Box>
				<Box textAlign='center' border='1px' borderColor='black' w='50%'>35</Box>
				<Box textAlign='center' border='1px' borderColor='black' w='50%'>5</Box>
			</Grid>
		</div>
	);
};

export default StatSpecialityDoctor;
