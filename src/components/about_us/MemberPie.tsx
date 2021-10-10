import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Group } from "@visx/group";
import { Pie } from "@visx/shape";
import { Text } from "@visx/text";

const MemberPie = () => {
  const trust = [
    {
      symbol: "ADA", amount: 68, color: "#ff4dff", ratio: 1.103,
    },
    {
      symbol: "SOL", amount: 32, color: "#bfbfbf", ratio: 0.78125,
    },
  ];
  const [active, setActive] = useState(null);
  const width = 130;
  const half = width / 2;

  return (
    <div>
      <Box>
        <svg width={width} height={width}>
          <Group top={half} left={half}>
            <Pie
              data={trust}
              pieValue={(data) => data.amount * data.ratio}
              outerRadius={half}
              innerRadius={({ data }) => {
                const size = active && active.symbol === data.symbol ? 25 : 19;
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
                  fontSize={32}
                  fontWeight="bold"
                  dy={12}
                >
                  {`${active.amount} %`}
                </Text>
              </>
            ) : (
              <>
                <Text textAnchor="middle" fill="black" fontSize={32} fontWeight="bold" dy={12}>
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
