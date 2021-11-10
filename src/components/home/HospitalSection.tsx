import React, { useState } from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Chart from "react-apexcharts";

type VideoPropertyType = {
    link: string;
    thumbnail: string;
  }

const videos: VideoPropertyType[] = [
  {
    link: "https://www.youtube-nocookie.com/embed/YkgkThdzX-8",
    thumbnail: "https://img.youtube.com/vi/YkgkThdzX-8/0.jpg",
  },
  {
    link: "https://www.youtube-nocookie.com/embed/YkgkThdzX-8",
    thumbnail: "https://img.youtube.com/vi/YkgkThdzX-8/0.jpg",
  },
  {
    link: "https://www.youtube-nocookie.com/embed/YkgkThdzX-8",
    thumbnail: "https://img.youtube.com/vi/YkgkThdzX-8/0.jpg",
  },
  {
    link: "https://www.youtube-nocookie.com/embed/YkgkThdzX-8",
    thumbnail: "https://img.youtube.com/vi/YkgkThdzX-8/0.jpg",
  },
];

const HospitalSection = () => {
  const [currentVideo, setCurrentVideo] = useState<VideoPropertyType>(videos[0]);
  const series = [
    {
      name: "Subs",
      data: [150, 70, 330, 150, 330, 330, 330, 730, 150, 150, 1010],
    },
    {
      name: "Guests",
      data: [330, 330, 720, 40, 510, 510, 150, 150, 330, 150, 350],
    },
  ];
  const options = {
    xaxis: {
      categories: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
  };
  return (
    <div>
      <Box>
        <Chart type="line" series={series} options={options} />
      </Box>
      <Flex width="100%" direction={["column-reverse", "column-reverse", "row", "row", "row"]}>
        <Box
          key={currentVideo?.link}
          as="iframe"
          width={["100%", "100%", "80%", "85%", "85%"]}
          height={[200, 200, 400, 500, 600]}
          src={currentVideo?.link}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Flex
          direction={["row", "row", "column", "column", "column"]}
          width={["100%", "100%", "20%", "15%", "15%"]}
        >
          {videos.map((video) => (
            <Image
              key={video.link}
              src={video.thumbnail}
              px={3}
              pb={3}
              width={["25%", "25%", "100%", "100%", "100%"]}
              onClick={() => setCurrentVideo(video)}
            />
          ))}
        </Flex>
      </Flex>
    </div>
  );
};

export default HospitalSection;
