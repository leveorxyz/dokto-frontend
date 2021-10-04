import React from "react";
import {
  Box, Container, Heading, Link, Grid,
} from "@chakra-ui/react";
import PostCard from "./PostsDoctorCard";
import Image1 from "../../static/home/image1.jpg";
import Image2 from "../../static/home/image2.jpg";
import Image3 from "../../static/home/image3.jpg";

const LatestPostsDoctor = () => (
  <div>
    <Box maxW="100%" px={[6, 6, 32, 32, 32]} py={28}>
      <Container maxW="container.2xl">
        <Box d="flex" justifyContent="space-between" alignItems="center" mb="5">
          <Box>
            <Heading as="h1" size="lg" alignItems="center" fontWeight="bold" color="black">
              Latest Posts
            </Heading>
          </Box>
          <Box>
            <Link href="/" fontSize="md" fontWeight="black" color="#00ffff" _hover={{ textDecoration: "none" }}>
              Visit the Docto Blog
            </Link>
          </Box>
        </Box>
        <Box>
          <Grid
            templateColumns={{
              sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)",
            }}
            gap={6}
          >
            <PostCard image={Image1} />
            <PostCard image={Image2} />
            <PostCard image={Image3} />
          </Grid>
        </Box>
      </Container>
    </Box>
  </div>
);

export default LatestPostsDoctor;
