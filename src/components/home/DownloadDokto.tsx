import React from "react";
import {
  Box, Heading, Link, Image,
} from "@chakra-ui/react";

import AppStoreIMG from "../../static/AppStore.png";
import PlayStoreIMG from "../../static/PlayStore.png";
import BluePhonesIMG from "../../static/DownloadBackground.png";
// import { SpacedContainer } from "../common/Containers";
import BigPhonesIMG from "../../static/BiggerPhone.png";
import SmallPhonesIMG from "../../static/SmallerPhone.png";

const DownloadDokto = () => (
  <Box
    d="flex"
    flexDir="row"
    justifyContent={["flex-end", "flex-end", "center", "center"]}
    bgImage={BluePhonesIMG}
    position="relative"
    backgroundSize="max-content"
    minHeight={["40vh", "40vh", "60vh", "60vh", "60vh"]}
    bgRepeat="no-repeat"
    bgSize="contain"
  >

    <Box d="flex" flexDir="column">
      <Heading as="h1" size="lg" fontWeight="bold" px={6} py={7} color="brand.dark">
        Download the Dokto App
      </Heading>
      <Box d="flex" pb="12">
        <Link href="/">
          <Image cursor="pointer" w="310px" px={6} py={3} src={PlayStoreIMG} />
        </Link>
        <Link href="/">
          <Image cursor="pointer" w="310px" px={6} py={3} src={AppStoreIMG} />
        </Link>
      </Box>
    </Box>
    <Box display={["none", "none", "block", "block"]}>
      <Image src={BigPhonesIMG} />
    </Box>
    <Box display={["none", "none", "block", "block"]}>
      <Image src={SmallPhonesIMG} />
    </Box>

  </Box>
);

export default DownloadDokto;
