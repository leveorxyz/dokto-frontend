import "react-vertical-timeline-component/style.min.css";
import { Timeline, TimelineEvent } from "react-event-timeline";
import {
  Box, Heading,
} from "@chakra-ui/react";

import TimelineData from "./TimelineData";

const ProcessTimeline = () => (
  <Timeline>
    {TimelineData.map(({
      id, Icon, title, description,
    }) => (
      // eslint-disable-next-line object-curly-newline
      <TimelineEvent
        key={id}
        title=""
        icon={(
          <Box
            padding={6}
            bg="#3DE0FF"
            rounded="full"
            style={{
              borderWidth: "1rem",
              borderColor: "white",
              borderStyle: "solid",
            }}
          >
            <Icon size={48} />
          </Box>
        )}
        style={{
          padding: 0,
          margin: 0,
        }}
        contentStyle={{
          marginLeft: "3rem",
          marginTop: 0,
          paddingTop: 0,
          boxShadow: "none",
        }}
      >
        <Box pb={[6, 36, 36, 36, 36]}>
          <Heading as="h6" fontSize="3xl" fontWeight="normal">{title}</Heading>
          <Box fontSize="xl" color="gray.500">{description}</Box>
        </Box>
      </TimelineEvent>
    ))}
  </Timeline>
);

export default ProcessTimeline;
