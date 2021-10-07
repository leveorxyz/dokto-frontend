import React from "react";
import "react-vertical-timeline-component/style.min.css";
import { Timeline, TimelineEvent } from "react-event-timeline";
import {
  Box, Heading,
} from "@chakra-ui/react";

import TimelineElement from "./TimelineElement";

const TimelineWorkDoctor = () => (
  <div>
    <Timeline>
      {TimelineElement.map((element) => (
        // eslint-disable-next-line object-curly-newline
        <TimelineEvent key={element.id} title="" icon={element.icon} iconColor="#00ffff" iconStyle={{ backgroundColor: "#00ffff", borderRadius: "100px" }}>
          <Box p={[6, 100, 100, 100, 100]}>
            <Heading as="h6" fontSize="3xl" fontWeight="normal">{element.title}</Heading>
            <Box fontSize="xl">{element.description}</Box>
          </Box>
        </TimelineEvent>
      ))}
    </Timeline>
  </div>
);

export default TimelineWorkDoctor;
