/* eslint-disable max-len */
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const DescriptionWorkDoctor = () => {
  const marginX = {
    sm: "6", md: "32", lg: "32", xl: "32", base: "6",
  };

  return (
    <div>
      <Box px={marginX} w="100%" py="10">
        <Box>
          <Heading as="h2" fontWeight="bold" fontSize="3xl" mb="4">Lorem ipsum dolor sit amet</Heading>
          <Box fontSize="md" color="gray">
            <Box mb="4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci ut ante semper feugiat. Maecenas vitae feugiat libero, vitae consectetur felis. Morbi in ullamcorper ante, eget ornare elit. Duis eget dui suscipit, porttitor leo eget, varius leo. Morbi consectetur ex nec nulla scelerisque maximus. Cras dictum, urna eu facilisis rutrum, nisl lacus vehicula ante, a iaculis diam mi in purus. Donec blandit, nisl vitae feugiat gravida, mauris urna porttitor odio, ac porttitor augue lorem non arcu.</Box>
            <Box>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis orci ut ante semper feugiat. Maecenas vitae feugiat libero, vitae consectetur felis. Morbi in ullamcorper ante, eget ornare elit. Duis eget dui suscipit, porttitor leo eget, varius leo. Morbi consectetur ex nec nulla scelerisque maximus. Cras dictum, urna eu facilisis rutrum, nisl lacus vehicula ante, a iaculis diam mi in purus. Donec blandit, nisl vitae feugiat gravida, mauris urna porttitor odio, ac porttitor augue lorem non arcu.</Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default DescriptionWorkDoctor;
