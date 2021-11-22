import {
  Box, Heading, Link, Image, Flex,
} from "@chakra-ui/react";

import AppStoreIMG from "../../static/AppStore.png";
import PlayStoreIMG from "../../static/PlayStore.png";
import BigPhonesIMG from "../../static/BiggerPhone.png";
import SmallPhonesIMG from "../../static/SmallerPhone.png";

const DownloadDokto = () => (
  <Box position="relative" pt={32} pb={48} my={12}>
    <Box id="top-fill" position="absolute" top={0} left={0} height="11rem" transform="translateY(-3rem)" width="100%" bg="#F4F4F4" />
    <Flex
      direction="column"
      bgColor="rgba(0, 149, 193, 0.1)"
      py={32}
      pl={[0, 0, 0, 24, 32]}
    >
      <Heading as="h1" size="lg" fontFamily="sora" fontWeight="bold" px={6} py={7} color="brand.dark">
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
    </Flex>

    <Box
      position="absolute"
      top={0}
      right="25%"
      height="100%"
      display={["none", "none", "none", "block", "block"]}
    >
      <Image height="100%" width="auto" src={BigPhonesIMG} />
    </Box>
    <Box
      position="absolute"
      top="50%"
      right="5%"
      height="80%"
      transform="translateY(-50%)"
      display={["none", "none", "none", "block", "block"]}
    >
      <Image height="100%" width="auto" src={SmallPhonesIMG} />
    </Box>
  </Box>
);

export default DownloadDokto;
