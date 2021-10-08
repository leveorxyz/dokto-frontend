/* eslint-disable max-len */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const AboutUsDescription = () => {
  const marginX = {
    sm: "6", md: "32", lg: "32", xl: "32", base: "6",
  };
  return (
    <div>
      <Box px={marginX} w="100%" py="10">
        <Box>
          <Heading as="h2" fontWeight="bold" fontSize="4xl" mb="4">Lorem ipsum dolor sit amet</Heading>
          <Box fontSize="lg" color="gray" pb="20">
            <Box mb="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci ut ante semper feugiat. Maecenas vitae feugiat libero, vitae consectetur felis. Morbi in ullamcorper ante, eget ornare elit. Duis eget dui suscipit, porttitor leo eget, varius leo. Morbi consectetur ex nec nulla scelerisque maximus. Cras dictum, urna eu facilisis rutrum, nisl lacus vehicula ante, a iaculis diam mi in purus. Donec blandit, nisl vitae feugiat gravida, mauris urna porttitor odio, ac porttitor augue lorem non arcu.</Box>
            <Box mb="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim vitae metus consectetur dictum vitae vel arcu. Nam rhoncus lacus vel fermentum posuere. Donec molestie sodales justo, sed fermentum diam finibus eu. Vestibulum vel ex id justo viverra interdum. Nunc id dictum orci. Morbi efficitur, mi nec pharetra maximus, est ligula finibus urna, vitae condimentum augue libero sed tellus. Nulla facilisi. Curabitur et commodo sapien. Aliquam cursus maximus elementum. Vivamus at interdum massa, non tempus arcu. Praesent elementum in ante a molestie.</Box>
            <Box mb="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci ut ante semper feugiat. Maecenas vitae feugiat libero, vitae consectetur felis. Morbi in ullamcorper ante, eget ornare elit. Duis eget dui suscipit, porttitor leo eget, varius leo. Morbi consectetur ex nec nulla scelerisque maximus. Cras dictum, urna eu facilisis rutrum, nisl lacus vehicula ante, a iaculis diam mi in purus. Donec blandit, nisl vitae feugiat gravida, mauris urna porttitor odio, ac porttitor augue lorem non arcu.</Box>
            <Box mb="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim vitae metus consectetur dictum vitae vel arcu. Nam rhoncus lacus vel fermentum posuere. Donec molestie sodales justo, sed fermentum diam finibus eu. Vestibulum vel ex id justo viverra interdum. Nunc id dictum orci. Morbi efficitur, mi nec pharetra maximus, est ligula finibus urna, vitae condimentum augue libero sed tellus. Nulla facilisi. Curabitur et commodo sapien. Aliquam cursus maximus elementum. Vivamus at interdum massa, non tempus arcu. Praesent elementum in ante a molestie.</Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default AboutUsDescription;
