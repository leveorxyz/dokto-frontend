import React from "react";

import {Box} from "@chakra-ui/react";

type PropTypes = {
  children: React.ReactNode
	m?: number | string;
	ml?: number | string;
	mr?: number | string;
	mt?: number | string;
	mb?: number | string;
	mx?: number | string;
	my?: number | string;
	p?: number | string;
	pr?: number | string;
	pl?: number | string;
	pt?: number | string;
	pb?: number | string;
	px?: number | string;
	py?: number | string;
}

export function FullWidthContainer({children}: PropTypes) {
	return (
		<Box >
			{children}
		</Box>
	);
}

export function SpacedContainer({children, ...props}: PropTypes) {
	return (
		<Box px="10%" {...props}>
			{children}
		</Box>
	);
}