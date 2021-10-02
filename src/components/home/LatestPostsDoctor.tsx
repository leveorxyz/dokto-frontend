import React from "react";
import PostCard from "./PostsDoctorCard";
import Image1 from "../../static/home/image1.jpg";
import Image2 from "../../static/home/image2.jpg";
import Image3 from "../../static/home/image3.jpg";
import { Box, Container,Heading, Link } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/layout";

const LatestPostsDoctor = () => {
	return (
		<div>
			<Box maxW='100%' px={24} py={5}>
				<Container maxW='container.2xl'>
					<Box d='flex' justifyContent='space-between' alignItems='center' mb='5'>
						<Box>
							<Heading as='h4' size='md' alignItems='center' fontWeight='black' color='black'>
                                Latest Posts
							</Heading>
						</Box>
						<Box>
							<Link fontSize='xx-small' fontWeight='black' color='#00ffff' _hover={{ textDecoration: "none" }}>
                                Visit the Docto Blog
							</Link>
						</Box>
					</Box>
					<Box>
						<Grid templateColumns='repeat(3, 1fr)' gap={6}>
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