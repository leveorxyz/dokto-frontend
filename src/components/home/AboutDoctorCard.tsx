import React from "react";
import { Image } from "@chakra-ui/react";
import { Box,Divider } from "@chakra-ui/react";

type PropTypes = {
    image: string;
    text: string;
}

const AboutDoctorCard = (props:PropTypes) => {
	return (
		<div>
			<Box w='100%' cursor='pointer' height='100%' d='flex' flexDir='column'>
				<Image src={props.image} pos='relative' width='100%' height='67%' objectFit='cover' border='1px' borderColor='#e6e6e6'></Image>
				<Box width='100%' height='31%' fontSize='x-large' py='4'>{props.text}</Box>
				<Divider />
			</Box>
		</div>
	);
};

export default AboutDoctorCard;
