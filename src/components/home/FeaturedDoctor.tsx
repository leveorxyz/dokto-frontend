import { Container, Grid, Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/react";
import React from "react";
import { IconContext } from "react-icons";
import FeaturedDoctorCard from "./FeaturedDoctorCard";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";


const FeaturedDoctor = () => {
	return (
		<div>
			<Box bg='#0099cc' maxW='100%' px={24} py={5}>
				<Container maxW='container.2xl'>
					<Box d='flex' justifyContent='space-between' alignItems='center' mb='7'>
						<Box><Heading as='h4' size='md' alignItems='center' fontWeight='black' color='white'>Our Featured Doctors</Heading></Box>
						<Box>
							<Box d='flex' flexDir='row'>
								<Box mr='1'>
									<IconContext.Provider value={{ color: "#00ffff" }}>
										<FaArrowLeft size={20}/>
									</IconContext.Provider>
								</Box>
								<Box>
									<IconContext.Provider value={{ color: "#00ffff" }}>
										<FaArrowRight size={20}/>
									</IconContext.Provider>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box py='5'>
						<Grid templateColumns='repeat(4, 1fr)' gap={6}>
							<FeaturedDoctorCard />
							<FeaturedDoctorCard />
							<FeaturedDoctorCard />
							<FeaturedDoctorCard />
						</Grid>
					</Box>
					<Box textAlign='center' color='white' fontSize='xs' cursor='pointer'>
                        View All Doctors
					</Box>
				</Container>
			</Box>
		</div>
	);
};

export default FeaturedDoctor;