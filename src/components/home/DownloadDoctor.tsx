import React from "react";
import { Container, Box, Heading, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import AppStore from "../../static/home/app-store.png";
import PlayStore from "../../static/home/google-play.png";

const DownloadDoctor = () => {

	{/*const margin_x = {sm: "6",md: "32",lg: "32",xl: "32",base: "6"};*/}

	return (
		<div>
			<Box my='20'>
				<Container maxWidth='container.xl'>
					<Box pos='relative' justifyContent='space-between' d='flex' alignItems='center'> 
						<Box pos='relative' align='center' mx='auto'>
							<Heading as='h1' size='lg' fontWeight='bold' my='7' color='#26004d'>
                                Download the Dokto App
							</Heading>
							<Box d='flex'>
								<Link href='https://play.google.com/store/apps/details?id=com.meetup&hl=en-US'><Image cursor='pointer' w='310px' p='5' src={PlayStore} borderRadius='25px'></Image></Link>
								<Link href='https://apps.apple.com/us/app/meetup/id375990038'><Image cursor='pointer' w='290px' p='5' src={AppStore}></Image></Link>
							</Box>
						</Box>
					</Box>
				</Container>
			</Box>
		</div>
	);
};

export default DownloadDoctor;
