import { Flex, Grid, Image } from "@chakra-ui/react";
import { JsonRpcSigner } from "ethers";
import { FC } from "react";

interface MyNftsProps {
  signer: JsonRpcSigner | null;
}

const MyNfts: FC<MyNftsProps> = ({ signer }) => {
  return signer ? (
    <Grid
      flexGrow={6}
      maxW={768}
      width="full"
      justifyContent="center"
      alignItems="center"
    >
      MyNfts
    </Grid>
  ) : (
    <Flex pos="relative" w={[320, 320, 640]} mt={[4, 4, 24]}>
      <Flex
        pos="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgColor="rgba(0,0,0,0.5)"
      />
      <Image src="/images/save_the_sea.webp" alt="Save the SEA" />
    </Flex>
  );
};

export default MyNfts;
