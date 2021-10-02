import React, { useState } from "react";
import { Flex, Box, Image, Button, IconButton, Center, ButtonGroup } from "@chakra-ui/react";
import { IoMenu, IoClose } from "react-icons/io5";

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

type MobileProps = {
	setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileMenu({setIsMenuOpen}: MobileProps) {
	return (
		<Flex direction="column" height="90vh" justifyContent="space-around" display={["flex", "flex", "none", "none",]}>
			{routes.map((route) => <NavItem 
				key={route.path} 
				title={route.displayName}
				href={route.path}
				setIsMenuOpen={setIsMenuOpen}
			/>)}

			<Center>
				<AuthButtons />
			</Center>
		</Flex>
	);
}

export default function Bar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<SpacedContainer py={4}>
			<Flex justifyContent="space-between" alignItems="center">
				<Logo />
				<Flex direction="row" display={["none", "none", "flex", "flex"]}>
					{routes.map((route) => <NavItem 
						key={route.path} 
						title={route.displayName}
						href={route.path}
					/>)}
				</Flex>
				<Box display={["none", "none", "block", "block"]}>
					<AuthButtons />
				</Box>
				<Box display={["flex", "flex", "none", "none"]}>
					<IconButton 
						aria-label="Open Menu"
						colorScheme="cyan"
						icon={isMenuOpen 
							? <IoClose size="1.5em" />
							: <IoMenu size="1.5em" />
						}
						onClick={() => setIsMenuOpen((prev) => !prev)}
					/>
				</Box>
			</Flex>
			{isMenuOpen && <MobileMenu setIsMenuOpen={setIsMenuOpen} />}
		</SpacedContainer>
	);
}