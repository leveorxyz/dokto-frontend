import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Group } from "@visx/group";
import Pie, { PieArcDatum } from "@visx/shape/lib/shapes/Pie";
import { Text } from "@visx/text";

type PropTypes = {
    title: string,
    lParcentage: number,
    sParcentage: number,
    description: string,
};

const MemberPie = ({
  title, lParcentage, sParcentage, description,
}: PropTypes) => {
  const trust = [
    {
      symbol: "S", amount: lParcentage, color: "#ff4dff", ratio: 1,
    },
    {
      symbol: "Z", amount: sParcentage, color: "#bfbfbf", ratio: 1,
    },
  ];

  // TODO: fix this later
  type arcDataType = {
     symbol: string;
     amount: number;
     color: string;
     ratio: number;
  }

  const [active, setActive] = useState<PieArcDatum<arcDataType>>();
  const width = 130;
  const half = width / 2;

  return (
    <div>
      <Box pr="16">
        <svg width={width} height={width}>
          <Group top={half} left={half}>
            <Pie
              data={trust}
              pieValue={(data) => data.amount * data.ratio}
              outerRadius={half}
              innerRadius={({ data }) => {
                // @ts-ignore
                const size = active && active.symbol === data.symbol ? 25 : 19;
                return half - size;
              }}
              padAngle={0.01}
            >
              {(pie) => pie.arcs.map((arc) => (
                <g
                  key={arc.data.symbol}
                  // @ts-ignore
                  onMouseEnter={() => setActive(arc.data)}
                  // @ts-ignore
                  onMouseLeave={() => setActive(null)}
                >
                  <path d={(pie.path(arc) as string)} fill={arc.data.color} />
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
                  {
                  // @ts-ignore
                  `${active.amount} %`
                  }
                </Text>
              </>
            ) : (
              <>
                <Text textAnchor="middle" fill="black" fontSize={32} fontWeight="bold" dy={12}>
                  {lParcentage}
                </Text>
              </>
            )}
          </Group>
        </svg>
        <Heading as="h2" fontWeight="bold" fontSize="2xl" mt="6" mb="8">{title}</Heading>
        <Box mb="4" fontSize="lg" color="gray">{description}</Box>
      </Box>
    </div>
  );
};

export default MemberPie;
