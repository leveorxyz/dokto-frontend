import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { Text } from "@visx/text";

const MemberPie = () => {
  const trust = [
    {
      symbol: "ADA", amount: 75, color: "#ff4dff",
    },
    {
      symbol: "SOL", amount: 25, color: "#bfbfbf",
    },
  ];
  const [active, setActive] = useState(null);
  const width = 150;
  const half = width / 2;

  return (
    <div>
      <Box>
        <svg width={width} height={width}>
          <Group top={half} left={half}>
            <Pie
              data={trust}
              pieValue={(data) => data.amount}
              outerRadius={half}
              innerRadius={({ data }) => {
                const size = active && active.symbol === data.symbol ? 25 : 18;
                return half - size;
              }}
              padAngle={0.01}
            >
              {(pie) => pie.arcs.map((arc) => (
                <g
                  key={arc.data.symbol}
                  onMouseEnter={() => setActive(arc.data)}
                  onMouseLeave={() => setActive(null)}
                >
                  <path d={pie.path(arc)} fill={arc.data.color} />
                </g>
              ))}
            </Pie>

            {active ? (
              <>
                <Text
                  textAnchor="middle"
                  fill="black"
                  fontSize={20}
                  dy={8}
                >
                  {`${active.amount - 7} %`}
                </Text>
              </>
            ) : (
              <>
                <Text textAnchor="middle" fill="black" fontSize={20} dy={8}>
                  68 %
                </Text>
              </>
            )}
          </Group>
        </svg>
        <Heading as="h2" fontWeight="bold" fontSize="2xl" mt="6" mb="8">Trust Dokto</Heading>
        <Box mb="4" fontSize="lg" color="gray" pr="24">To advise them on how and where to get care.</Box>
      </Box>
    </div>
  );
};

export default MemberPie;
