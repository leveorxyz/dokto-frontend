import React from "react";
import {
  Box, Heading, Link, Image, Center,
} from "@chakra-ui/react";

import AppStore from "../../static/home/app-store.png";
import PlayStore from "../../static/home/google-play.png";
import { SpacedContainer } from "../common/Containers";

const DownloadDokto = () => (
  <div>
    <SpacedContainer py="100">
      <Center d="flex" flexDir="row">
        <Box flex="1" d="flex" flexDir="column" alignItems="center" mr="10">
          <Heading as="h1" size="lg" fontWeight="bold" my="7" color="#26004d">
            Download the Dokto App
          </Heading>
          <Box d="flex">
            <Link href="https://play.google.com/store/apps/details?id=com.meetup&hl=en-US"><Image cursor="pointer" w="310px" p="3" src={PlayStore} borderRadius="25px" /></Link>
            <Link href="https://apps.apple.com/us/app/meetup/id375990038"><Image cursor="pointer" w="290px" p="3" src={AppStore} /></Link>
          </Box>
        </Box>
        <Image src="https://source.unsplash.com/collection/42413461/500x300" flex="1" fit="contain" overflow="hidden" />
      </Center>
    </SpacedContainer>
  </div>
);

export default DownloadDokto;
