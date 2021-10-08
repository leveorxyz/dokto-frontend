import React, { useMemo } from "react";
import { Link as RouteLink, useLocation } from "react-router-dom";
import { Link, Center } from "@chakra-ui/react";

type PropTypes = {
  href: string;
  icon?: JSX.Element;
  title: string;
  setIsMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavItem({
  href, icon, title, setIsMenuOpen,
}: PropTypes) {
  const location = useLocation();
  const isCurrentRoute = useMemo(
    () => location.pathname === href,
    [href, location.pathname],
  );

  return (
    <Center p={3}>
      <Link
        as={RouteLink}
        to={href}
        fontSize={["xl", "xl", "md", "md"]}
        fontWeight={isCurrentRoute ? [900, 900, 500, 600, 600] : [800, 800, 400, 500, 500]}
        position="relative"
        color="gray.700"
        style={{
          textDecoration: "none",
        }}
        _after={{
          content: "''",
          position: "absolute",
          bottom: "-6px",
          left: 0,
          width: "100%",
          height: isCurrentRoute ? "3px" : "0px",
          backgroundColor: "pink.500",
        }}
        _hover={{
          color: "pink.500",
        }}
        onClick={() => setIsMenuOpen && setIsMenuOpen(false)}
      >
        {icon}
        {icon && <>&nbsp;</>}
        {title}
      </Link>
    </Center>
  );
}

NavItem.defaultProps = {
  icon: null,
  setIsMenuOpen: null,
};
