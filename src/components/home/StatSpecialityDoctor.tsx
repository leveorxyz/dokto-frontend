import { Grid,Box } from "@chakra-ui/react";
import React from "react";

const StatSpecialityDoctor = () => {
	return (
		<div>
			<Grid templateColumns='repeat(2, 1fr)' templateRows='repeat(2, 1fr)' gap={6} w='100%'>
				<Box textAlign='center' border='1px' borderColor='black' p='100'><Box fontSize='xx-large' fontWeight='black'>75</Box><Box fontSize='sm' fontWeight='bold'>Professional Staff</Box></Box>
				<Box textAlign='center' border='1px' borderColor='black' p='100'><Box fontSize='xx-large' fontWeight='black'>45</Box><Box fontSize='sm' fontWeight='bold'>Rooms</Box></Box>
				<Box textAlign='center' border='1px' borderColor='black' p='100'><Box fontSize='xx-large' fontWeight='black'>35</Box><Box fontSize='sm' fontWeight='bold'>Years Experience</Box></Box>
				<Box textAlign='center' border='1px' borderColor='black' p='100'><Box fontSize='xx-large' fontWeight='black'>5</Box><Box fontSize='sm' fontWeight='bold'>Stars Comfort</Box></Box>
			</Grid>
		</div>
	);
};

export default StatSpecialityDoctor;
