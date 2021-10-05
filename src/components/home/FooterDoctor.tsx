import React from "react";
import { Box, Container, Divider, Heading, Link, List, ListItem } from "@chakra-ui/layout";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FiPhone } from "react-icons/fi";
import SocialIcons from "../common/SocialIcons";

const FooterDoctor = () => {
	
	const margin_x = {sm: "6",md: "32",lg: "32",xl: "32",base: "6"};
	const divider_display = {sm: "none",md: "block",lg: "block",xl: "block",base: "none"};
	
	const links = [
		{ content: "About Us", url: "#" },
		{ content: "FAQs", url: "#" },
		{ content: "T&Cs", url: "#" },
		{ content: "Privacy Policy", url: "#" },
		{ content: "HIPAA Policy", url: "#" }
	];

	const bottom_links = [
		{ content: "Terms & Conditions", url: "#" },
		{ content: "Privacy Policy", url: "#" }
	];
	
	return (
		<div>
			<Box color='white' background='#0a001a' px={margin_x} py='20' mt='5'>
				<Container maxW='container.2xl'>
					<Box d='flex' flexDir={{sm: "column",md: "row",lg: "row",xl: "row",base: "column"}}>
						<Box flex='1' mb={{sm: "10",md: "0",lg: "0",xl: "0",base: "4"}} pr='100'>
							<List mt='4' spacing={2}>
								<ListItem>
									<Box></Box>
								</ListItem>
								<ListItem>
									<Box fontSize='sm' color='#df9fbf'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lacus mollis, accumsan odio et, porttitor nisl. Aenean in efficitur massa. Donec commodo ex et viverra tincidunt.</Box>
								</ListItem>
							</List>
						</Box>
						<Divider orientation='vertical' h='10rem' px='10' display={divider_display}/>
						<Box flex='1' mb='4'>
							{links?.map(({ content, url }) => (
								<List key={url} pb='2'>
									<Link href={url} color='white' _hover={{ textDecoration: "none", color: "#A2A2A2"}}>
										{content}
									</Link>
								</List>
							))}
						</Box>
						<Divider orientation="vertical" h='10rem' px='10' display={divider_display}/>
						<Box flex='1' mb='4'>
							<Heading size='md' ml='1'>Connect with Dokto</Heading>
							<List mt='4' spacing={2} fontSize='sm' color='#df9fbf'>
								<ListItem  ml='2'>
									<Box d='flex' flexDir='row'>
										<IconContext.Provider value={{ color: "#00ffff" }}>
											<IoLocationOutline size={34}/>
										</IconContext.Provider>
										<Box ml='3'>2706 N Buffalo Grove Rd Arlington Heights, Illinois(IL), 60004</Box>
									</Box>
								</ListItem>
								<ListItem  ml='2'>
									<Box d='flex' flexDir='row'>
										<IconContext.Provider value={{ color: "#00ffff" }}>
											<FiPhone size={20}/>
										</IconContext.Provider>
										<Box ml='3'>(847)749-0143</Box>
									</Box>
								</ListItem>
								<ListItem  ml='2'>
									<Box d='flex' flexDir='row'>
										<IconContext.Provider value={{ color: "#00ffff" }}>
											<IoMailOutline size={22}/>
										</IconContext.Provider>
										<Box ml='3'>support@dokto.com</Box>
									</Box>
								</ListItem>
								<ListItem>
									<Box d='flex'><SocialIcons /></Box>
								</ListItem>
							</List>
						</Box>
					</Box>
					<Box d='flex' mt='10' flexWrap='wrap'>
						{bottom_links?.map(({ content, url }) => (
							<List key={url}>
								<Link href={url} fontSize='sm' mr='5' fontWeight='bold' color='white' _hover={{ textDecoration: "none", color: "#A2A2A2"}}>
									{content}
								</Link>
							</List>
						))}
					</Box>
				</Container>
			</Box>
		</div>
	);
};

export default FooterDoctor;
