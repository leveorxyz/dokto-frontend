import React from "react";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaArrowCircleRight } from "react-icons/fa";

type PropTypes = {
  listData: string[];
};

const CareListCard = ({ listData }: PropTypes) => (
  <List
    fontSize="md"
    bg="white"
    color="rgba(51, 51, 51, 0.6)"
    spacing={3}
    boxShadow="0 10px 30px 0 rgb(205 204 219 / 25%)"
    filter="drop-shadow(15px 70px 90px rgba(164, 43, 173, 0.08))"
    w="100%"
    p="15%"
    borderRadius="3xl"
    cursor="pointer"
  >
    {
        listData.map((item) => (
          <ListItem key={item}>
            <ListIcon as={FaArrowCircleRight} color="#A42BAD" />
            {item}
          </ListItem>
        ))
      }
  </List>
);

export default CareListCard;
