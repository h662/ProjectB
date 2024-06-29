import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";

import MintNft from "./components/MintNft";
import MyNfts from "./components/MyNfts";
import Header from "./components/Header";
import { JsonRpcSigner } from "ethers";

const App: FC = () => {
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);

  return (
    <Flex
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Header signer={signer} setSigner={setSigner} />
      <MintNft signer={signer} />
      <MyNfts signer={signer} />
    </Flex>
  );
};

export default App;
