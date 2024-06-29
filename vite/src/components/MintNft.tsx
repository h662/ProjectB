import {
  Button,
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import { JsonRpcSigner } from "ethers";
import { FC } from "react";

interface MintNftProps {
  signer: JsonRpcSigner | null;
}

const MintNft: FC<MintNftProps> = ({ signer }) => {
  return (
    <Flex
      flexGrow={1}
      width="full"
      justifyContent="center"
      alignItems="center"
      gap={8}
    >
      {signer && (
        <>
          <Flex gap={2} alignItems="center">
            <Text fontWeight="semibold">NFT ID</Text>
            <NumberInput defaultValue={0} min={0} max={16}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
          <Flex gap={2} alignItems="center">
            <Text fontWeight="semibold">발행량</Text>
            <NumberInput defaultValue={0} min={0} max={5}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Flex>
          <Button colorScheme="blue">민팅</Button>
        </>
      )}
    </Flex>
  );
};

export default MintNft;
