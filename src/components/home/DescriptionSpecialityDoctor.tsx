import { Button } from "@chakra-ui/button";
import { Box, Heading } from "@chakra-ui/layout";
import React from "react";

const DescriptionSpecialityDoctor = () => {
	return (
		<div>
			<Box>
				<Heading as='h6' size='md' color='#00ffff'>Numbers Dont Lie</Heading>
				<Heading as='h4' size='lg' mb='5' color='#26004d'>What makes us special?</Heading>
				<Box fontSize='md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lacus mollis, accumsan odio et, porttitor nisl. Aenean in efficitur massa. Donec commodo ex et viverra tincidunt. Nulla aliquet magna lacinia nunc facilisis ullamcorper. Curabitur eget pulvinar purus. Ut sed ultrices nunc. Aliquam sed placerat leo, non ultricies lectus. Praesent quis erat bibendum, finibus mi ut, luctus lorem.</Box>
				<Box mt='5' fontSize='md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lacus mollis, accumsan odio et, porttitor nisl. Aenean in efficitur massa. Donec commodo ex et viverra tincidunt. Nulla aliquet magna lacinia nunc facilisis ullamcorper. Curabitur eget pulvinar purus. Ut sed ultrices nunc. Aliquam sed placerat leo, non ultricies lectus. Praesent quis erat bibendum, finibus mi ut, luctus lorem.</Box>
				<Button mt='7' textTransform='uppercase' bg='#26004d' color='white' fontSize='md'>Learn more</Button>
			</Box>
		</div>
	);
};

export default DescriptionSpecialityDoctor;
