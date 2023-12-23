import { useRef, useEffect } from "react";
import { InputGroup, InputRightElement, Button, Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Input } from "@chakra-ui/react";
import "./style.css";

function QueryInscrible() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleClick = () => {
    // const inputValue = inputRef.current!.value;
    // console.log(inputValue); // eslint-disable-next-line no-console
    // 点击按钮 获取input数据以后 搜索 然后将返回的数据显示在下方表格
  };

  return (
    
    <TableContainer style={{ overflowY: "scroll" }}>
      <InputGroup className="InputGroup" size="md">
        <Input pr="4.5rem" placeholder="Enter search content" ref={inputRef} />
        <InputRightElement width="4.5rem">
          <Button colorScheme="purple" h="1.75rem" size="sm" onClick={handleClick}>
            search
          </Button>
        </InputRightElement>
      </InputGroup>
      <div className="Table-head-font" >Recent Inscriptions</div>
     
      <Table variant="simple">
        {/* 表格底部描述 */}
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        {/* 表头字段 */}
        <Thead>
          <Tr>
            <Th textAlign="center">inscribeType</Th>
            <Th textAlign="center"> inscribeIndex</Th>
            <Th textAlign="center">deployer</Th>
            <Th textAlign="center">tick</Th>
            <Th textAlign="center">maxSupply</Th>
            <Th textAlign="center">totalSupply</Th>
            <Th isNumeric textAlign="center">amtPerMint</Th>
            <Th textAlign="center"> slogan</Th>
            <Th textAlign="center">media</Th>
            <Th textAlign="center">mediaLink</Th>
            <Th textAlign="center">verify</Th>
            <Th textAlign="center">icon</Th>
            <Th textAlign="center">frame</Th>
            <Th textAlign="center">decimals</Th>
            <Th textAlign="center">inscribeState</Th>
          </Tr>
        </Thead>

        {/* 表格主体数据 */}
        <Tbody>
          <Tr>
            <Td textAlign="center" >Organization</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td textAlign="center">VEIN</Td>
            <Td textAlign="center">1,000,000,000,000</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center" >1,000</Td>
            <Td textAlign="center">WE DO THE BEST</Td>
            <Td textAlign="center">Twitter</Td>
            <Td textAlign="center">https://x.com/vein</Td>
            <Td textAlign="center">None</Td>
            <Td textAlign="center">https://ipfs.io/icon</Td>
            <Td textAlign="center">https://ipfs.io/frame</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center">MintStart</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">Organization</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td textAlign="center">VEIN</Td>
            <Td textAlign="center">1,000,000,000,000</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center" >1,000</Td>
            <Td textAlign="center">WE DO THE BEST</Td>
            <Td textAlign="center">Twitter</Td>
            <Td textAlign="center">https://x.com/vein</Td>
            <Td textAlign="center">None</Td>
            <Td textAlign="center">https://ipfs.io/icon</Td>
            <Td textAlign="center">https://ipfs.io/frame</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center">MintStart</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">Organization</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td textAlign="center">VEIN</Td>
            <Td textAlign="center">1,000,000,000,000</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center" >1,000</Td>
            <Td textAlign="center">WE DO THE BEST</Td>
            <Td textAlign="center">Twitter</Td>
            <Td textAlign="center">https://x.com/vein</Td>
            <Td textAlign="center">None</Td>
            <Td textAlign="center">https://ipfs.io/icon</Td>
            <Td textAlign="center">https://ipfs.io/frame</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center">MintStart</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">Organization</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td textAlign="center">VEIN</Td>
            <Td textAlign="center">1,000,000,000,000</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center" >1,000</Td>
            <Td textAlign="center">WE DO THE BEST</Td>
            <Td textAlign="center">Twitter</Td>
            <Td textAlign="center">https://x.com/vein</Td>
            <Td textAlign="center">None</Td>
            <Td textAlign="center">https://ipfs.io/icon</Td>
            <Td textAlign="center">https://ipfs.io/frame</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center">MintStart</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">Organization</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td textAlign="center">VEIN</Td>
            <Td textAlign="center">1,000,000,000,000</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center" isNumeric>1,000</Td>
            <Td textAlign="center">WE DO THE BEST</Td>
            <Td textAlign="center">Twitter</Td>
            <Td textAlign="center">https://x.com/vein</Td>
            <Td textAlign="center">None</Td>
            <Td textAlign="center">https://ipfs.io/icon</Td>
            <Td textAlign="center">https://ipfs.io/frame</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center">MintStart</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">Organization</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td textAlign="center">VEIN</Td>
            <Td textAlign="center">1,000,000,000,000</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center" isNumeric>1,000</Td>
            <Td textAlign="center">WE DO THE BEST</Td>
            <Td textAlign="center">Twitter</Td>
            <Td textAlign="center">https://x.com/vein</Td>
            <Td textAlign="center">None</Td>
            <Td textAlign="center">https://ipfs.io/icon</Td>
            <Td textAlign="center">https://ipfs.io/frame</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center">MintStart</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">Organization</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td textAlign="center">VEIN</Td>
            <Td textAlign="center">1,000,000,000,000</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center" isNumeric>1,000</Td>
            <Td textAlign="center">WE DO THE BEST</Td>
            <Td textAlign="center">Twitter</Td>
            <Td textAlign="center">https://x.com/vein</Td>
            <Td textAlign="center">None</Td>
            <Td textAlign="center">https://ipfs.io/icon</Td>
            <Td textAlign="center">https://ipfs.io/frame</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center">MintStart</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">Organization</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td textAlign="center">VEIN</Td>
            <Td textAlign="center">1,000,000,000,000</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center" isNumeric>1,000</Td>
            <Td textAlign="center">WE DO THE BEST</Td>
            <Td textAlign="center">Twitter</Td>
            <Td textAlign="center">https://x.com/vein</Td>
            <Td textAlign="center">None</Td>
            <Td textAlign="center">https://ipfs.io/icon</Td>
            <Td textAlign="center">https://ipfs.io/frame</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center">MintStart</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">Organization</Td>
            <Td textAlign="center">1</Td>
            <Td textAlign="center">0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td textAlign="center">VEIN</Td>
            <Td textAlign="center">1,000,000,000,000</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center" isNumeric>1,000</Td>
            <Td textAlign="center">WE DO THE BEST</Td>
            <Td textAlign="center">Twitter</Td>
            <Td textAlign="center">https://x.com/vein</Td>
            <Td textAlign="center">None</Td>
            <Td textAlign="center">https://ipfs.io/icon</Td>
            <Td textAlign="center">https://ipfs.io/frame</Td>
            <Td textAlign="center">0</Td>
            <Td textAlign="center">MintStart</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export { QueryInscrible };
