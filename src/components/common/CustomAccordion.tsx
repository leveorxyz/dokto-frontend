import {
  Box,
  Accordion, AccordionItem, AccordionButton, AccordionPanel,
} from "@chakra-ui/react";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

interface props{
  title:string
  children:JSX.Element
}

const CustomAccordion = ({ title, children }:props) => (
  <Accordion allowMultiple>

    <AccordionItem>
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton color="brand.darkPink">
              <GoPrimitiveDot fontSize="20px" color="#3DE0FF" />
              <Box textAlign="left" mx={2} fontSize="xl">
                {title}
              </Box>
              {isExpanded ? (
                <RiArrowUpSFill fontSize="28px" />
              ) : (
                <RiArrowDownSFill fontSize="28px" />
              )}

            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {children}
          </AccordionPanel>
        </>
      )}

    </AccordionItem>

  </Accordion>
);

export default CustomAccordion;
