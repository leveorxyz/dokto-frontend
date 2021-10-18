import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaArrowCircleRight } from "react-icons/fa";

type PropTypes = {
  listData: string[];
};

const CareListCard = ({ listData }: PropTypes) => (
  <List fontWeight="bold" fontSize="xl" spacing={3} boxShadow="lg" w="100%" p="20%" borderRadius="3xl">
    {
        listData.map((item) => (
          <ListItem key={item}>
            <ListIcon as={FaArrowCircleRight} color="cyan.500" />
            {item}
          </ListItem>
        ))
      }
  </List>
);

export default CareListCard;
