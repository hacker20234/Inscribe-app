import { useRef, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Input } from "@chakra-ui/react";
import "./style.css";

function QueryInscrible() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <TableContainer>
      <Input placeholder="Basic usage" />
      <div className="Table-head-font">Recent Inscriptions</div>
      <Table variant="simple">
        {/* 表格底部描述 */}
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        {/* 表头字段 */}
        <Thead>
          <Tr>
            <Th>inscribeType</Th>
            <Th>inscribeIndex</Th>
            <Th>deployer</Th>
            <Th>tick</Th>
            <Th>maxSupply</Th>
            <Th>totalSupply</Th>
            <Th isNumeric>amtPerMint</Th>
            <Th>slogan</Th>
            <Th>media</Th>
            <Th>mediaLink</Th>
            <Th>verify</Th>
            <Th>icon</Th>
            <Th>frame</Th>
            <Th>decimals</Th>
            <Th>inscribeState</Th>
          </Tr>
        </Thead>

        {/* 表格主体数据 */}
        <Tbody>
          <Tr>
            <Td>Organization</Td>
            <Td>1</Td>
            <Td>0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td>VEIN</Td>
            <Td>1,000,000,000,000</Td>
            <Td>0</Td>
            <Td isNumeric>1,000</Td>
            <Td>WE DO THE BEST</Td>
            <Td>Twitter</Td>
            <Td>https://x.com/vein</Td>
            <Td>None</Td>
            <Td>https://ipfs.io/icon</Td>
            <Td>https://ipfs.io/frame</Td>
            <Td>0</Td>
            <Td>MintStart</Td>
          </Tr>
          <Tr>
            <Td>Organization</Td>
            <Td>1</Td>
            <Td>0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td>VEIN</Td>
            <Td>1,000,000,000,000</Td>
            <Td>0</Td>
            <Td isNumeric>1,000</Td>
            <Td>WE DO THE BEST</Td>
            <Td>Twitter</Td>
            <Td>https://x.com/vein</Td>
            <Td>None</Td>
            <Td>https://ipfs.io/icon</Td>
            <Td>https://ipfs.io/frame</Td>
            <Td>0</Td>
            <Td>MintStart</Td>
          </Tr>
          <Tr>
            <Td>Organization</Td>
            <Td>1</Td>
            <Td>0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td>VEIN</Td>
            <Td>1,000,000,000,000</Td>
            <Td>0</Td>
            <Td isNumeric>1,000</Td>
            <Td>WE DO THE BEST</Td>
            <Td>Twitter</Td>
            <Td>https://x.com/vein</Td>
            <Td>None</Td>
            <Td>https://ipfs.io/icon</Td>
            <Td>https://ipfs.io/frame</Td>
            <Td>0</Td>
            <Td>MintStart</Td>
          </Tr>
          <Tr>
            <Td>Organization</Td>
            <Td>1</Td>
            <Td>0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td>VEIN</Td>
            <Td>1,000,000,000,000</Td>
            <Td>0</Td>
            <Td isNumeric>1,000</Td>
            <Td>WE DO THE BEST</Td>
            <Td>Twitter</Td>
            <Td>https://x.com/vein</Td>
            <Td>None</Td>
            <Td>https://ipfs.io/icon</Td>
            <Td>https://ipfs.io/frame</Td>
            <Td>0</Td>
            <Td>MintStart</Td>
          </Tr>
          <Tr>
            <Td>Organization</Td>
            <Td>1</Td>
            <Td>0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td>VEIN</Td>
            <Td>1,000,000,000,000</Td>
            <Td>0</Td>
            <Td isNumeric>1,000</Td>
            <Td>WE DO THE BEST</Td>
            <Td>Twitter</Td>
            <Td>https://x.com/vein</Td>
            <Td>None</Td>
            <Td>https://ipfs.io/icon</Td>
            <Td>https://ipfs.io/frame</Td>
            <Td>0</Td>
            <Td>MintStart</Td>
          </Tr>
          <Tr>
            <Td>Organization</Td>
            <Td>1</Td>
            <Td>0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td>VEIN</Td>
            <Td>1,000,000,000,000</Td>
            <Td>0</Td>
            <Td isNumeric>1,000</Td>
            <Td>WE DO THE BEST</Td>
            <Td>Twitter</Td>
            <Td>https://x.com/vein</Td>
            <Td>None</Td>
            <Td>https://ipfs.io/icon</Td>
            <Td>https://ipfs.io/frame</Td>
            <Td>0</Td>
            <Td>MintStart</Td>
          </Tr>
          <Tr>
            <Td>Organization</Td>
            <Td>1</Td>
            <Td>0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td>VEIN</Td>
            <Td>1,000,000,000,000</Td>
            <Td>0</Td>
            <Td isNumeric>1,000</Td>
            <Td>WE DO THE BEST</Td>
            <Td>Twitter</Td>
            <Td>https://x.com/vein</Td>
            <Td>None</Td>
            <Td>https://ipfs.io/icon</Td>
            <Td>https://ipfs.io/frame</Td>
            <Td>0</Td>
            <Td>MintStart</Td>
          </Tr>
          <Tr>
            <Td>Organization</Td>
            <Td>1</Td>
            <Td>0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td>VEIN</Td>
            <Td>1,000,000,000,000</Td>
            <Td>0</Td>
            <Td isNumeric>1,000</Td>
            <Td>WE DO THE BEST</Td>
            <Td>Twitter</Td>
            <Td>https://x.com/vein</Td>
            <Td>None</Td>
            <Td>https://ipfs.io/icon</Td>
            <Td>https://ipfs.io/frame</Td>
            <Td>0</Td>
            <Td>MintStart</Td>
          </Tr>
          <Tr>
            <Td>Organization</Td>
            <Td>1</Td>
            <Td>0x84e7195c2a5b52620190f9303897e74676be2781e308fd8176c87037e9402065</Td>
            <Td>VEIN</Td>
            <Td>1,000,000,000,000</Td>
            <Td>0</Td>
            <Td isNumeric>1,000</Td>
            <Td>WE DO THE BEST</Td>
            <Td>Twitter</Td>
            <Td>https://x.com/vein</Td>
            <Td>None</Td>
            <Td>https://ipfs.io/icon</Td>
            <Td>https://ipfs.io/frame</Td>
            <Td>0</Td>
            <Td>MintStart</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export { QueryInscrible };
