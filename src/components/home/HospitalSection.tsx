import React from "react";
import { Box } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const HospitalSection = () => {
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
      categories: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
    },
  };
  return (
    <div>
      <Box>
        <Chart type="line" series={series} options={options} />
      </Box>
    </div>
  );
};

export default HospitalSection;
