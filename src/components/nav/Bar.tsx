import React from "react";
import { Flex, Box, Image, Button, ButtonGroup } from "@chakra-ui/react";

import routes from "../../router/routes";
import NavItem from "./NavItem";
import logoSVG from "../../static/logo.svg";
import { SpacedContainer } from "../common/Containers";

function Logo() {
	return(
		<Box>
			<Image src={logoSVG} alt="logo" boxSize="3rem" />
		</Box>
	);
}

function AuthButtons() {
	return(
		<ButtonGroup colorScheme="cyan" isAttached isRounded>
			<Button mr="-px">Login</Button>
			<Button mr="-px">Register</Button>
		</ButtonGroup>
	);
}

export default function Bar() {
	return (
		<SpacedContainer py={4}>
			<Flex justifyContent="space-between" alignItems="center">
				<Logo />
				<Flex direction={["column", "column", "row", "row"]}>
					{routes.map((route) => <NavItem 
						key={route.path} 
						title={route.displayName}
						href={route.path}
					/>)}
				</Flex>
				<AuthButtons />
			</Flex>
		</SpacedContainer>
	);
}