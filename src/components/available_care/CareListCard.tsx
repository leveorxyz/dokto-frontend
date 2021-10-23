import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaArrowCircleRight } from "react-icons/fa";

type PropTypes = {
  listData: string[];
};

const CareListCard = ({ listData }: PropTypes) => (
  <List fontSize="md" color="gray" spacing={3} boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)" w="100%" p="15%" borderRadius="3xl" cursor="pointer">
    {
        listData.map((item) => (
          <ListItem key={item}>
            <ListIcon as={FaArrowCircleRight} color="purple" />
            {item}
          </ListItem>
        ))
      }
  </List>
);

export default CareListCard;
