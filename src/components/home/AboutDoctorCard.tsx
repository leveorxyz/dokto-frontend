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
			<Box>
				<Image src={props.image} pos='relative' width='100%' height='50%' objectFit='cover'></Image>
				<Box>{props.text}</Box>
				<Divider />
			</Box>
		</div>
	);
};

export default AboutDoctorCard;
