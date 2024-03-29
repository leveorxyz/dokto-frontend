import {
  Box, Container, Divider, Heading, List, ListItem, Image,
} from "@chakra-ui/react";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FiPhone } from "react-icons/fi";

import FooterLinks from "./FooterLinks";
import FooterLogo from "../../../static/dokto_png_blue_white1.png";
import SocialIcons from "../SocialIcons";
import FooterLink from "./FooterLink";
import Partners from "./Partners";

const Footer = () => {
  const dividerDisplay = {
    sm: "none", md: "block", lg: "block", xl: "block", base: "none",
  };

  return (
    <div>
      <Box color="white" background="#170041" borderColor="#433E4A" px={20} py="20" mt="5">
        <Container maxW="container.2xl">
          <Box
            d="flex"
            flexDir={{
              sm: "column", md: "row", lg: "row", xl: "row", base: "column",
            }}
          >
            <Box
              flex="1"
              mb={{
                sm: "10", md: "0", lg: "0", xl: "0", base: "4",
              }}
              pr="100"
            >
              <Box pb="6"><Image width="50%" height="auto" src={FooterLogo} /></Box>
              <Box fontSize="md" color="gray.500">
                Dokto, a
                {" "}
                <Box as="span" fontWeight="800" color="#3DE0FF">Dokita247, Inc. company, </Box>
                is a global Telehealth service that simplifies healthcare and
                increases round-the-clock patient
                access to medical experts. We are Dokto: virtual care without boundaries.
              </Box>
            </Box>
            <Divider orientation="vertical" h="12rem" px="10" display={dividerDisplay} sx={{ borderLeftColor: "#433E4A" }} />
            <Box flex="1">
              <Heading size="md" mb="4">
                Useful Info
              </Heading>

              <Box ml="2" flex="1" mb="4">
                {FooterLinks
                  .map((route) => (
                    <FooterLink
                      key={route.path}
                      title={route.displayName}
                      href={route.path}
                    />
                  ))}
              </Box>
            </Box>
            {/* //Dokita247, Inc. Partners */}
            <Divider orientation="vertical" h="12rem" px="10" display={dividerDisplay} sx={{ borderLeftColor: "#433E4A" }} />
            <Box flex="1" mr="4">
              <Heading size="md" mb="4">
                Dokita247, Inc. Partners
              </Heading>
              <Partners />
            </Box>
            {/* //Connect with Dokto */}
            <Divider orientation="vertical" h="12rem" px="10" display={dividerDisplay} sx={{ borderLeftColor: "#433E4A" }} />
            <Box flex="1" mb="4">
              <Heading size="md" ml="1">Connect with Dokto</Heading>
              <List mt="4" spacing={2} fontSize="sm" color="#847C93">
                <ListItem ml="2">
                  <Box d="flex" flexDir="row">
                    <IconContext.Provider value={{ color: "#3DE0FF" }}>
                      <IoLocationOutline size={34} />
                    </IconContext.Provider>
                    <Box ml="3">2706 N Buffalo Grove Rd Arlington Heights, Illinois(IL), 60004</Box>
                  </Box>
                </ListItem>
                <ListItem ml="2">
                  <Box d="flex" flexDir="row">
                    <IconContext.Provider value={{ color: "#3DE0FF" }}>
                      <FiPhone size={20} />
                    </IconContext.Provider>
                    <Box ml="3">(847)749-0143</Box>
                  </Box>
                </ListItem>
                <ListItem ml="2">
                  <Box d="flex" flexDir="row">
                    <IconContext.Provider value={{ color: "#3DE0FF" }}>
                      <IoMailOutline size={22} />
                    </IconContext.Provider>
                    <Box ml="3">support@dokto.com</Box>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box d="flex"><SocialIcons /></Box>
                </ListItem>
              </List>
            </Box>
          </Box>

        </Container>
      </Box>
    </div>
  );
};

export default Footer;
