import React, { useMemo } from "react";
import { Link as RouteLink, useLocation } from "react-router-dom";
import { Link, Flex } from "@chakra-ui/react";

type PropTypes = {
  href: string;
  icon?: JSX.Element;
  title: string;
}

export default function BottomLinkStyle({
  href, icon, title,
}: PropTypes) {
  const location = useLocation();
  const isCurrentRoute = useMemo(
    () => location.pathname === href,
    [href, location.pathname],
  );

  return (
    <Flex flexDir="column">
      <Link
        as={RouteLink}
        to={href}
        pb="2"
        fontSize="sm"
        mr="4"
        fontWeight={isCurrentRoute ? [900, 900, 500, 600, 600] : [800, 800, 400, 500, 500]}
        color="white"
        style={{
          textDecoration: "none",
        }}
        _after={{
          content: "''",
          bottom: "-6px",
          width: "100%",
          height: isCurrentRoute ? "3px" : "0px",
        }}
        _hover={{
          color: "#A2A2A2",
        }}
      >
        {icon}
        {icon && <>&nbsp;</>}
        {title}
      </Link>
    </Flex>
  );
}

BottomLinkStyle.defaultProps = {
  icon: null,
};
