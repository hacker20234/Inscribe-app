import { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Card, CardBody, Text } from "@chakra-ui/react";
import "./style.css";
import { ProgramMetadata } from "@gear-js/api";
import { useApi } from "@gear-js/react-hooks";

interface NFTInfo {
  inscribeType: string;
  inscribeIndex: number;
  deployer: string;
  tick: string;
  maxSupply: number;
  totalSupply: number;
  amtPerMint: number;
  slogan: string;
  media: string;
  mediaLink: string;
  verify: string;
  icon: string;
  frame: string;
  decimals: number;
  inscribeState: string;
}

function InfoNFT({
  inscribeType,
  inscribeIndex,
  deployer,
  tick,
  maxSupply,
  totalSupply,
  amtPerMint,
  slogan,
  media,
  mediaLink,
  verify,
  icon,
  frame,
  decimals,
  inscribeState,
}: NFTInfo) {
  return (
    <Tr>
      <Td textAlign="center">{inscribeType}</Td>
      <Td textAlign="center">{inscribeIndex}</Td>
      <Td textAlign="center">{deployer}</Td>
      <Td textAlign="center">{tick}</Td>
      <Td textAlign="center">{maxSupply}</Td>
      <Td textAlign="center">{totalSupply}</Td>
      <Td textAlign="center">{amtPerMint}</Td>
      <Td textAlign="center">{slogan}</Td>
      <Td textAlign="center">{media}</Td>
      <Td textAlign="center">{mediaLink}</Td>
      <Td textAlign="center">{verify}</Td>
      <Td textAlign="center">{icon}</Td>
      <Td textAlign="center">{frame}</Td>
      <Td textAlign="center">{decimals}</Td>
      <Td textAlign="center">{inscribeState}</Td>
    </Tr>
  );
}

function Home() {
  const { api } = useApi();
  const [allnfts, setAllnfts] = useState<any | undefined>([]);
  const [fullState, setFullState] = useState<any | undefined>({});

  const alldatanfts: any[] = [];

  // Add your programID
  const programIDNFT = "0xc18584c6b11838f2f62233f030dc8fe649b4b212fd35aaabf79ed0e5be11c24d";

  // Add your metadata.txt
  const meta =
    "00020000000100000000010d00000000000000010e000000010f0000007d3ad400082c696e7363726962655f696f18416374696f6e00012c184465706c6f79040134696e7363726962655f64617461040120496e736372696265000000104d696e7404012c696e7363726962655f69640c011075313238000100104275726e10012c696e7363726962655f69640c01107531323800011066726f6d10011c4163746f724964000108746f10011c4163746f72496400010c616d740c011075313238000200205472616e7366657210012c696e7363726962655f69640c01107531323800011066726f6d10011c4163746f724964000108746f10011c4163746f72496400010c616d740c011075313238000300244c6973744f7264657210012c696e7363726962655f69640c01107531323800010c616d740c01107531323800011470726963650c0110753132380001246f72646572747970652c01244f72646572547970650004003c43616e63656c53656c6c4f7264657204011c6f7264657269640c0110753132380005003046696c6c4275794f726465720401206f726964657269640c0110753132380006003446696c6c53656c6c4f7264657204011c6f7264657269640c01107531323800070038557064617465496e73637269626508012c696e7363726962655f69640c011075313238000130696e73637269626564617461040120496e7363726962650008001856657269667908012c696e7363726962655f69640c0110753132380001307665726966797374617475732401305665726966795374617475730009002c42616c616e6365546573740c0108696430013c496e736372696265496e64657865730001146163746f7210011c4163746f72496400010c616d740c011075313238000a000004082c696e7363726962655f696f20496e73637269626500003c0134696e7363726962655f74797065080130496e73637269626554797065000138696e7363726962655f696e6465780c0110753132380001206465706c6f79657210011c4163746f7249640001107469636b1c0118537472696e670001286d61785f737570706c790c011075313238000130746f74616c5f737570706c790c011075313238000130616d745f7065725f6d696e740c011075313238000118736c6f67616e1c0118537472696e670001146d656469612001244d65646961547970650001286d656469615f6c696e6b1c0118537472696e6700011876657269667924013056657269667953746174757300011069636f6e1c0118537472696e670001146672616d651c0118537472696e67000120646563696d616c731801087538000138696e7363726962655f7374617465280134496e7363726962655374617465000008082c696e7363726962655f696f30496e7363726962655479706500010c304f7267616e697a6174696f6e00000028496e646976696475616c000100104e6f6e65000200000c00000507001010106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001401205b75383b2033325d0000140000032000000018001800000503001c000005020020082c696e7363726962655f696f244d65646961547970650001101c547769747465720000001c5765627369746500010014456d61696c000200144f746865720003000024082c696e7363726962655f696f3056657269667953746174757300010c104e6f6e65000000205665726966696564000100204576696c646f65720002000028082c696e7363726962655f696f34496e736372696265537461746500010c204465706c6f796564000000244d696e7453746172740001001c4d696e74456e64000200002c082c696e7363726962655f696f244f7264657254797065000108244c696d697453656c6c000000204c696d69744275790001000030082c696e7363726962655f696f3c496e736372696265496e6465786573000004000c011075313238000034082c696e7363726962655f696f144576656e740001282c4465706c6f794576656e74040134696e7363726962655f64617461040120496e736372696265000000345472616e736665724576656e740c01305f696e7363726962655f69640c01107531323800010c5f746f10011c4163746f72496400011c5f616d6f756e740c0110753132380001002442616c616e63654f66080010011c4163746f72496400000c011075313238000200184465706c6f79000300104d696e7408012c696e7363726962655f69640c011075313238000108746f10011c4163746f724964000400104275726e000500205472616e736665720c01305f696e7363726962655f69640c01107531323800010c5f746f10011c4163746f72496400011c5f616d6f756e740c011075313238000600344c69737453656c6c4f7264657210011c63726561746f7210011c4163746f72496400012c696e7363726962655f69640c01107531323800010c616d740c01107531323800011470726963650c01107531323800070038557064617465496e73637269626508012c696e7363726962655f69640c0110753132380001446e65775f696e7363726962655f64617461040120496e7363726962650008001856657269667908012c696e7363726962655f69640c0110753132380001307665726966797374617475732401305665726966795374617475730009000038082c696e7363726962655f696f1451756572790001240c416c6c000000345175657279496e73637269626504000c011075313238000100585175657279496e73637269626542794163746f72496408000c01107531323800001c0118537472696e670002003851756572794f726465724279496404000c0110753132380003002c426c6f636b4e756d62657200040038426c6f636b54696d657374616d700005002450726f6772616d4964000600244d65737361676549640007001857686f616d69000800003c082c696e7363726962655f696f145265706c790001300c416c6c0400400140496e736372696265496f537461746573000000345265706c79496e7363726962650400040120496e736372696265000100585265706c79496e73637269626542794163746f72496404000c011075313238000200385265706c794f72646572427949640400b001144f726465720003004c496e736372696265496e666f4279496e6465780400040120496e73637269626500040048496e736372696265734f664163746f724964040010011c4163746f7249640005002442616c616e63654f660c0010011c4163746f72496400000c01107531323800000c0110753132380006001857686f616d69040010011c4163746f7249640007002c426c6f636b4e756d6265720400cc010c75333200080038426c6f636b54696d657374616d7004007c010c7536340009002450726f6772616d4964040010011c4163746f724964000a00244d65737361676549640400d001244d6573736167654964000b000040082c696e7363726962655f696f40496e736372696265496f53746174657300002001346d61705f696e7363726962657344018c42547265654d61703c496e736372696265496e64657865732c20496e7363726962653e00012062616c616e6365735001c842547265654d61703c496e736372696265496e64657865732c2042547265654d61703c4163746f7249642c20753132383e3e00012c746f74616c737570706c7968017c42547265654d61703c496e736372696265496e64657865732c20753132383e000140696e736372696265735f6d696e7465647401a842547265654d61703c4163746f7249642c2042547265654d61703c7536342c20496e7363726962653e3e000124696e736372696265737401a842547265654d61703c4163746f7249642c2042547265654d61703c7536342c20496e7363726962653e3e0001286d696e745f74696d65739001c442547265654d61703c496e736372696265496e64657865732c2042547265654d61703c4163746f7249642c207536343e3e000128616c6c5f6f7264657273a8016042547265654d61703c4f7264657249642c204f726465723e0001446f72646572735f6f665f6163746f726964c001ac42547265654d61703c4163746f7249642c2042547265654d61703c4f7264657249642c204f726465723e3e000044042042547265654d617008044b01300456010400040048000000480000024c004c0000040830040050042042547265654d617008044b0130045601540004006000000054042042547265654d617008044b01100456010c00040058000000580000025c005c00000408100c00600000026400640000040830540068042042547265654d617008044b01300456010c0004006c0000006c00000270007000000408300c0074042042547265654d617008044b0110045601780004008800000078042042547265654d617008044b017c04560104000400800000007c000005060080000002840084000004087c0400880000028c008c0000040810780090042042547265654d617008044b013004560194000400a000000094042042547265654d617008044b01100456017c00040098000000980000029c009c00000408107c00a0000002a400a400000408309400a8042042547265654d617008044b01ac045601b0000400b8000000ac082c696e7363726962655f696f1c4f726465724964000004000c0110753132380000b0082c696e7363726962655f696f144f72646572000018011c63726561746f7210011c4163746f72496400012c696e7363726962655f696430013c496e736372696265496e646578657300010c616d740c01107531323800011470726963650c0110753132380001306f726465725f737461747573b4012c4f726465725374617475730001286f726465725f747970652c01244f72646572547970650000b4082c696e7363726962655f696f2c4f7264657253746174757300010c184c69737465640000002043616e63656c65640001002453756363657373656400020000b8000002bc00bc00000408acb000c0042042547265654d617008044b0110045601a8000400c4000000c4000002c800c80000040810a800cc0000050500d010106773746418636f6d6d6f6e287072696d697469766573244d6573736167654964000004001401205b75383b2033325d0000";

  const metadata = ProgramMetadata.from(meta);
  interface Inscribe {
    amtPerMint: number;
    decimals: number;
    deployer: string;
    frame: string;
    icon: string;
    inscribeIndex: number;
    inscribeState: string;
    inscribeType: string;
    maxSupply: number;
    media: string;
    mediaLink: string;
    slogan: string;
    tick: string;
    totalSupply: number;
    verify: string;
  }
  const getMyNFT = () => {
    // 调用 api.programState 的 read 方法
    api.programState
      .read({ programId: programIDNFT, payload: "all" }, metadata)
      .then((result) => {
        // 调用 setFullState 更新状态
        setFullState(result.toJSON());
        // 从 fullState 中获取 tokenMetadataById
        // console.log(result.toJSON());
        const tokenMetadataById: any = fullState.all.inscribes ?? "";
        // 将 tokenMetadataById 转换为 Inscribe 类型的数组
        const Inscrs: Inscribe[] = Object.values(tokenMetadataById) as Inscribe[];
        // 遍历 Inscrs 数组
        Inscrs.map((item: any) => alldatanfts.push(item[1]));
        // 调用 setAllnfts 更新状态
        setAllnfts(alldatanfts);
      })
      // eslint-disable-next-line
      .catch(({ message }: Error) => console.log(message));
  };

  getMyNFT();

  return (
    <div>
      <Card className="Card-head">
        <CardBody>
          <Text className="About-us">About us</Text>
          <p className="p-font">
            We have an idea to create a business card platform based on blockchain. Because many individuals and organizations have many outstanding
            ideas, but they lack appropriate opportunities to showcase themselves, and they are unable to meet outstanding talents and realize these
            outstanding ideas together.
          </p>
          <br />
          <p className="p-font">Therefore, We plan to build a platform where everyone can showcase themselves.</p>
          <br />
          <p className="p-font">
            The platform&apos;s functions include creating business cards, sending business cards, destroying business cards, and exchanging business
            cards. In addition, the platform will also provide services for verifying information. I sincerely hope that everyone can communicate
            freely on this platform and at the same time find suitable partners to stimulate creativity.
          </p>
          <br />
          <p className="p-font">
            Technology Architecture Build Smart Contract On Gear / Vara Network &amp;&amp; User Front End store on IPFS or Other decentralized
            platforms.
          </p>
        </CardBody>
      </Card>

      <Card>
        <CardBody>
          <div className="Table-head-font">Recent Inscriptions</div>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th textAlign="center">inscribeType</Th>
                  <Th textAlign="center">inscribeIndex</Th>
                  <Th textAlign="center">deployer</Th>
                  <Th textAlign="center">tick</Th>
                  <Th textAlign="center">maxSupply</Th>
                  <Th textAlign="center">totalSupply</Th>
                  <Th textAlign="center" isNumeric>amtPerMint</Th>
                  <Th textAlign="center">slogan</Th>
                  <Th textAlign="center">media</Th>
                  <Th textAlign="center">mediaLink</Th>
                  <Th textAlign="center">verify</Th>
                  <Th textAlign="center">icon</Th>
                  <Th textAlign="center">frame</Th>
                  <Th textAlign="center">decimals</Th>
                  <Th textAlign="center">inscribeState</Th>
                </Tr>
              </Thead>

              <Tbody>
                {allnfts.map((elemento: any) => (
                  <InfoNFT
                    key={elemento.inscribeIndex}
                    inscribeType={elemento.inscribeType}
                    inscribeIndex={elemento.inscribeIndex}
                    deployer={elemento.deployer}
                    tick={elemento.tick}
                    maxSupply={elemento.maxSupply}
                    totalSupply={elemento.totalSupply}
                    amtPerMint={elemento.amtPerMint}
                    slogan={elemento.slogan}
                    media={elemento.media}
                    mediaLink={elemento.mediaLink}
                    verify={elemento.verify}
                    icon={elemento.icon}
                    frame={elemento.frame}
                    decimals={elemento.decimals}
                    inscribeState={elemento.inscribeState}
                  />
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </CardBody>
      </Card>
    </div>
  );
}

export { Home };
