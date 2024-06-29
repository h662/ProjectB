import { Button, Flex } from "@chakra-ui/react";
import { JsonRpcSigner, ethers } from "ethers";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

interface HeaderProps {
  signer: JsonRpcSigner | null;
  setSigner: Dispatch<SetStateAction<JsonRpcSigner | null>>;
}

const Header: FC<HeaderProps> = ({ signer, setSigner }) => {
  const onClickMetamask = async () => {
    try {
      if (!window.ethereum) return;

      const provider = new ethers.BrowserProvider(window.ethereum);

      setSigner(await provider.getSigner());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => console.log(signer), [signer]);

  return (
    <Flex
      bgColor="blue.300"
      width="full"
      justifyContent="center"
      py={4}
      position="relative"
    >
      <Flex fontSize="4xl" fontWeight="semibold">
        🐳 Save the SEA! 🐠
      </Flex>
      <Flex position="absolute" h="100%" top={0} right={4} alignItems="center">
        {signer ? (
          `${signer.address.substring(0, 7)}...${signer.address.substring(
            signer.address.length - 5
          )}`
        ) : (
          <Button onClick={onClickMetamask}>🦊 로그인</Button>
        )}
      </Flex>
    </Flex>
  );
};

export default Header;
