import React from "react";
import {
  Box, Container, Divider, Heading, List, ListItem, Image,
} from "@chakra-ui/react";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { FiPhone } from "react-icons/fi";

import FooterLinks from "../about_us/FooterLinks";
import BottomLinks from "../footer_bottom/BottomLinks";
import FooterLogo from "../../static/dokto_png_blue_white1.png";
import SocialIcons from "../common/SocialIcons";
import FooterLinkStyle from "../about_us/FooterLinkStyle";
import BottomLinkStyle from "../footer_bottom/BottomLinkStyle";

const FooterDoctor = () => {
  const dividerDisplay = {
    sm: "none", md: "block", lg: "block", xl: "block", base: "none",
  };

  return (
    <div>
      <Box color="white" background="#170041" borderColor="#433E4A" px={[6, 6, 32, 32, 32]} py="20" mt="5">
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
              <List mt="1" spacing={2}>
                <ListItem>
                  <Box pb="6"><Image src={FooterLogo} /></Box>
                </ListItem>
                <ListItem>
                  <Box fontSize="sm" color="#847C93">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a lacus mollis, accumsan odio et, porttitor nisl. Aenean in efficitur massa. Donec commodo ex et viverra tincidunt.</Box>
                </ListItem>
              </List>
            </Box>
            <Divider orientation="vertical" h="12rem" px="10" display={dividerDisplay} sx={{ borderLeftColor: "#433E4A" }} />
            <Box flex="1" mb="4">
              {FooterLinks
                .filter((route) => route.showInNavbar)
                .map((route) => (
                  <FooterLinkStyle
                    key={route.path}
                    title={route.displayName}
                    href={route.path}
                  />
                ))}
            </Box>
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
          <Box d="flex" mt="10" flexWrap="wrap">
            {BottomLinks
              .filter((route) => route.showInNavbar)
              .map((route) => (
                <BottomLinkStyle
                  key={route.path}
                  title={route.displayName}
                  href={route.path}
                />
              ))}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default FooterDoctor;
