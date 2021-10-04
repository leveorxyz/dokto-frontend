import { Grid,Box } from "@chakra-ui/react";
import React from "react";

const StatSpecialityDoctor = () => {
	
	const margin_x = {sm: "1rem",md: "5rem",lg: "5rem",xl: "5rem",base: "1rem"};
	const margin_y = {sm: "1rem",md: "2.5rem",lg: "2.5rem",xl: "2.5rem",base: "1rem"};
	
	return (
		<div>
			<Grid templateColumns='repeat(2, 1fr)' templateRows='repeat(2, 1fr)' gap={6} w='100%' py='14'>
				<Box textAlign='center' border='1px' borderColor='#e6e6e6' px={margin_x} py={margin_y}><Box w='200'><Box fontSize='xx-large' fontWeight='black' color='#26004d'>75</Box><Box fontSize='sm' fontWeight='bold' color='#00ffff'>Professional Staff</Box></Box></Box>
				<Box textAlign='center' border='1px' borderColor='#e6e6e6' px={margin_x} py={margin_y}><Box w='200' px='6'><Box fontSize='xx-large' fontWeight='black' color='#26004d'>45</Box><Box fontSize='sm' fontWeight='bold' color='#00ffff'>Rooms</Box></Box></Box>
				<Box textAlign='center' border='1px' borderColor='#e6e6e6' px={margin_x} py={margin_y}><Box w='200'><Box fontSize='xx-large' fontWeight='black' color='#26004d'>35</Box><Box fontSize='sm' fontWeight='bold' color='#00ffff'>Years Experience</Box></Box></Box>
				<Box textAlign='center' border='1px' borderColor='#e6e6e6' px={margin_x} py={margin_y}><Box w='200'><Box fontSize='xx-large' fontWeight='black' color='#26004d'>5</Box><Box fontSize='sm' fontWeight='bold' color='#00ffff'>Stars Comfort</Box></Box></Box>
			</Grid>
		</div>
	);
};

export default StatSpecialityDoctor;
