import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

type PropTypes = {
  href: string;
  icon?: JSX.Element;
  title: string;
}

export default function NavItem({href, icon, title}: PropTypes) {
	return (
		<Link as={RouteLink} to={href}>
			{icon}{icon && <>&nbsp;</>}{title}
		</Link>
	);
}