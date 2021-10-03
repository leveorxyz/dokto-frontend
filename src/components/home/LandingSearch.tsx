import React from "react";
import { Box, Flex, Text, Image, Input, Select, Button, IconButton, Link } from "@chakra-ui/react";

import { IoSearch } from "react-icons/io5";

export default function LandingSearch() {
	return (
		<Flex h="25vh">
			<Image 
				display={["none", "none", "block", "block"]}
				src="https://source.unsplash.com/collection/42413461"
				fit="cover"
				width="25%"
				height="100%"
			/>
			<Box
				width={["100%", "100%", "75%", "75%"]}
				backgroundColor="gray.100"
				px={[4, 8, 12, 24]}
				py={[3, 6, 12, 12]}
			>
				<Text as="h1" fontSize="lg" fontWeight={600}>Enter your search parameters</Text>
				<Flex
					my={2}
					justifyContent={["space-between", "space-between", "flex-start", "flex-start"]}
					alignItems="center"
					wrap="wrap"
				>
					<Input
						placeholder="Search doctors, clinics, hospitals, etc."
						variant="filled"
						colorScheme="white"
						width={["100%", "48%", "40%", "35%"]}
						sx={{
							backgroundColor: "white",
						}}
						mr={[0, 0, 2, 3]}
						my={[2, 2, 0, 0]}
					/>
					<Select
						placeholder="Select a location"
						variant="filled"
						colorScheme="white"
						width={["100%", "48%", "40%", "35%"]}
						sx={{
							backgroundColor: "white",
						}}
						mr={[0, 0, 2, 3]}
						my={[2, 2, 0, 0]}
					>
						{[...Array(4).keys()]
							.map((item:string| number, index:number) => (
								<option key={index} value={item}>
									Option {item}
								</option>)
							)
						}
					</Select>

					<Link href="#" color="cyan.500" textDecor="underline" display={["inline-block", "inline-block", "none", "none"]}>
						Advanced search
					</Link>

					<Button
						variant="solid"
						colorScheme="cyan"
						aria-label="Search doctors, clinics, hospitals, etc."
						leftIcon={<IoSearch />}
						display={["flex", "none", "none", "none"]}
						my={[2, 2, 0, 0]}
					>
						Search
					</Button>

					<IconButton
						variant="solid"
						colorScheme="cyan"
						aria-label="Search doctors, clinics, hospitals, etc."
						icon={<IoSearch size="1.2rem" />}
						display={["none", "flex", "flex", "flex"]}
					/>
				</Flex>

				<Link href="#" color="cyan.500" textDecor="underline" display={["none", "none", "block", "block"]}>
					Advanced search
				</Link>
			</Box>
		</Flex>
	);
}