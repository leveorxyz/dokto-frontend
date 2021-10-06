import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Box, Heading,
} from "@chakra-ui/react";

import TimelineElement from "./TimelineElement";

const TimelineWorkDoctor = () => (
  <div>
    <VerticalTimeline>
      {TimelineElement.map((element) => (
        <VerticalTimelineElement key={element.id}>
          <Heading>{element.title}</Heading>
          <Box>{element.description}</Box>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
);

export default TimelineWorkDoctor;
