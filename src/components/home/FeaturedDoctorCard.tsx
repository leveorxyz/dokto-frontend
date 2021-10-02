import { Box,Heading,Divider } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import React from "react";
import Center from "../../static/home/center.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const FeaturedDoctorCard = () => {
	return (
		<div>
			<Box maxW='100%'>
				<Box border='1px' borderColor='blue.400' bg='white' borderRadius='20px' maxW='100%'>
					<Box position='relative'>
						<Image src={Center} objectFit='cover' borderRadius='50%' w='90px' h='90px' display='block' ml='auto' mr='auto' position='absolute' left='50%' transform='translate(-50%, -40%)'></Image>
					</Box>
					<Box pt='9' pb='3' textAlign='center' px='2'>
						<Heading fontSize='xx-small' as='h3' fontWeight='semibold'>
                            Dr. Rita Ora, MD
						</Heading>
						<Box fontSize='xx-small' fontWeight='hairline'>
                            Primary Care Doctor
						</Box>
					</Box>
					<Divider />
					<Box p='3'>
						<Box fontSize='xx-small' d='flex' flexDir='row' alignItems='center'>
							<IconContext.Provider value={{ color: "#00ffff" }}>
								<IoLocationOutline size={20}/>
							</IconContext.Provider>
							<Box>New York,NY</Box>
						</Box>
						<Box fontSize='xx-small' d='flex' flexDir='row' alignItems='center'>
							<IconContext.Provider value={{ color: "#ffbf00" }}>
								<FaStar />
							</IconContext.Provider>
							<Box mr='2' fontWeight='semibold'>4.85</Box>
							<Box >1751 reviews</Box>
						</Box>
					</Box>
					<Divider />
					<Box p='3' d='flex' justifyContent='space-between' flexDir='row' flexWrap='wrap' alignItems='center'>
						<Box fontSize='xx-small' fontWeight='black'>View Profile</Box>
						<IconContext.Provider value={{ color: "#00ffff" }}>
							<FaArrowRight size={20}/>
						</IconContext.Provider>
					</Box>
				</Box>
			</Box>
		</div>
	);
};

export default FeaturedDoctorCard;