import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import {
  FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn,
} from "react-icons/fa";

const socialIcons = [
  {
    Icon: FaFacebook,
    label: "Facebook",
    color: "#1877F2",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    color: "#E4405F",
  },
  {
    Icon: FaTwitter,
    label: "Twitter",
    color: "#1DA1F2",
  },
  {
    Icon: FaYoutube,
    label: "Youtube",
    color: "#FF0000",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    color: "#0A66C2",
  },
];

export default function SocialIcons() {
  return (
    <Flex direction="row" justifyContent="space-around" alignItems="center">
      {socialIcons.map(({ Icon, color, label }) => <IconButton key={label} aria-label={`Open ${label}`} color={color} variant="ghost" icon={<Icon size="1.5em" />} size="2rem" m={3} />)}
    </Flex>
  );
}
