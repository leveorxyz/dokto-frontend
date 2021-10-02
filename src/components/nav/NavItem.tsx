import React from "react";
import { Link as RouteLink, useLocation } from "react-router-dom";
import { Link, Box } from "@chakra-ui/react";

type PropTypes = {
  href: string;
  icon?: JSX.Element;
  title: string;
}

export default function NavItem({href, icon, title}: PropTypes) {
	const location = useLocation();

	return (
		<Box p={3}>
			<Link as={RouteLink} 
				to={href}
				fontSize="md"
				fontWeight={600}
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
					height: location.pathname === href
						? "3px"
						: "0px",
					backgroundColor: "pink.500",
				}}
				_hover={{
					color: "pink.500",
				}}
			>
				{icon}{icon && <>&nbsp;</>}{title}
			</Link>
		</Box>
	);
}