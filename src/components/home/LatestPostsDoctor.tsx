import React from "react";
import PostCard from "./PostsDoctorCard";
import Image1 from "../../static/home/image1.jpg";
import Image2 from "../../static/home/image2.jpg";
import Image3 from "../../static/home/image3.jpg";
import { Box, Container,Heading, Link } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";

const LatestPostsDoctor = () => {

	const margin_x = {sm: "6",md: "32",lg: "32",xl: "32",base: "6"};

	return (
		<div>
			<Box maxW='100%' px={margin_x} py={18}>
				<Container maxW='container.2xl'>
					<Box d='flex' justifyContent='space-between' alignItems='center' mb='5'>
						<Box>
							<Heading fontSize='larger' alignItems='center' fontWeight='bold' color='black'>
                                Latest Posts
							</Heading>
						</Box>
						<Box>
							<Link fontSize='md' fontWeight='black' color='#00ffff' _hover={{ textDecoration: "none" }}>
                                Visit the Docto Blog
							</Link>
						</Box>
					</Box>
					<Box>
						<Grid templateColumns={{sm: "repeat(1, 1fr)",md: "repeat(3, 1fr)",lg: "repeat(3, 1fr)",base: "repeat(1, 1fr)"}} gap={6}>
							<PostCard image={Image1}/>
							<PostCard image={Image2}/>
							<PostCard image={Image3}/>
						</Grid>
					</Box>
				</Container>
			</Box>
		</div>
	);
};

export default LatestPostsDoctor;
