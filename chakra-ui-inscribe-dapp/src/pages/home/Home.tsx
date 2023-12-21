import { useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer } from "@chakra-ui/react";
import "./style.css";
import { ProgramMetadata } from "@gear-js/api";
import { useApi } from "@gear-js/react-hooks";

/**
 * 
function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <TableContainer>
      <div className="Table-head-font">Recent Inscriptions</div>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
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
         
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export { Home };
*/

function InfoNFT({ inscribeType, inscribeIndex, deployer, tick, maxSupply, totalSupply,amtPerMint, slogan, media, mediaLink, verify, icon, frame, decimals, inscribeState }: any) {
  return (
    <Tr>
      <Td>{inscribeType}</Td>
      <Td>{inscribeIndex}</Td>
      <Td>{deployer}</Td>
      <Td>{tick}</Td>
      <Td>{maxSupply}</Td>
      <Td>{totalSupply}</Td>
      <Td>{amtPerMint}</Td>
      <Td>{slogan}</Td>
      <Td>{media}</Td>
      <Td>{mediaLink}</Td>
      <Td>{verify}</Td>
      <Td>{icon}</Td>
      <Td>{frame}</Td>
      <Td>{decimals}</Td>
      <Td>{inscribeState}</Td>
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
  // "0xf50ff22b7b8a76fb0c3bd3160ebe622d47c57f662d86b5124a578560767ce869";

  // Add your metadata.txt
  const meta = "00020000000100000000010d00000000000000010e000000010f0000007d3ad400082c696e7363726962655f696f18416374696f6e00012c184465706c6f79040134696e7363726962655f64617461040120496e736372696265000000104d696e7404012c696e7363726962655f69640c011075313238000100104275726e10012c696e7363726962655f69640c01107531323800011066726f6d10011c4163746f724964000108746f10011c4163746f72496400010c616d740c011075313238000200205472616e7366657210012c696e7363726962655f69640c01107531323800011066726f6d10011c4163746f724964000108746f10011c4163746f72496400010c616d740c011075313238000300244c6973744f7264657210012c696e7363726962655f69640c01107531323800010c616d740c01107531323800011470726963650c0110753132380001246f72646572747970652c01244f72646572547970650004003c43616e63656c53656c6c4f7264657204011c6f7264657269640c0110753132380005003046696c6c4275794f726465720401206f726964657269640c0110753132380006003446696c6c53656c6c4f7264657204011c6f7264657269640c01107531323800070038557064617465496e73637269626508012c696e7363726962655f69640c011075313238000130696e73637269626564617461040120496e7363726962650008001856657269667908012c696e7363726962655f69640c0110753132380001307665726966797374617475732401305665726966795374617475730009002c42616c616e6365546573740c0108696430013c496e736372696265496e64657865730001146163746f7210011c4163746f72496400010c616d740c011075313238000a000004082c696e7363726962655f696f20496e73637269626500003c0134696e7363726962655f74797065080130496e73637269626554797065000138696e7363726962655f696e6465780c0110753132380001206465706c6f79657210011c4163746f7249640001107469636b1c0118537472696e670001286d61785f737570706c790c011075313238000130746f74616c5f737570706c790c011075313238000130616d745f7065725f6d696e740c011075313238000118736c6f67616e1c0118537472696e670001146d656469612001244d65646961547970650001286d656469615f6c696e6b1c0118537472696e6700011876657269667924013056657269667953746174757300011069636f6e1c0118537472696e670001146672616d651c0118537472696e67000120646563696d616c731801087538000138696e7363726962655f7374617465280134496e7363726962655374617465000008082c696e7363726962655f696f30496e7363726962655479706500010c304f7267616e697a6174696f6e00000028496e646976696475616c000100104e6f6e65000200000c00000507001010106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001401205b75383b2033325d0000140000032000000018001800000503001c000005020020082c696e7363726962655f696f244d65646961547970650001101c547769747465720000001c5765627369746500010014456d61696c000200144f746865720003000024082c696e7363726962655f696f3056657269667953746174757300010c104e6f6e65000000205665726966696564000100204576696c646f65720002000028082c696e7363726962655f696f34496e736372696265537461746500010c204465706c6f796564000000244d696e7453746172740001001c4d696e74456e64000200002c082c696e7363726962655f696f244f7264657254797065000108244c696d697453656c6c000000204c696d69744275790001000030082c696e7363726962655f696f3c496e736372696265496e6465786573000004000c011075313238000034082c696e7363726962655f696f144576656e740001282c4465706c6f794576656e74040134696e7363726962655f64617461040120496e736372696265000000345472616e736665724576656e740c01305f696e7363726962655f69640c01107531323800010c5f746f10011c4163746f72496400011c5f616d6f756e740c0110753132380001002442616c616e63654f66080010011c4163746f72496400000c011075313238000200184465706c6f79000300104d696e7408012c696e7363726962655f69640c011075313238000108746f10011c4163746f724964000400104275726e000500205472616e736665720c01305f696e7363726962655f69640c01107531323800010c5f746f10011c4163746f72496400011c5f616d6f756e740c011075313238000600344c69737453656c6c4f7264657210011c63726561746f7210011c4163746f72496400012c696e7363726962655f69640c01107531323800010c616d740c01107531323800011470726963650c01107531323800070038557064617465496e73637269626508012c696e7363726962655f69640c0110753132380001446e65775f696e7363726962655f64617461040120496e7363726962650008001856657269667908012c696e7363726962655f69640c0110753132380001307665726966797374617475732401305665726966795374617475730009000038082c696e7363726962655f696f1451756572790001240c416c6c000000345175657279496e73637269626504000c011075313238000100585175657279496e73637269626542794163746f72496408000c01107531323800001c0118537472696e670002003851756572794f726465724279496404000c0110753132380003002c426c6f636b4e756d62657200040038426c6f636b54696d657374616d700005002450726f6772616d4964000600244d65737361676549640007001857686f616d69000800003c082c696e7363726962655f696f145265706c790001300c416c6c0400400140496e736372696265496f537461746573000000345265706c79496e7363726962650400040120496e736372696265000100585265706c79496e73637269626542794163746f72496404000c011075313238000200385265706c794f72646572427949640400b001144f726465720003004c496e736372696265496e666f4279496e6465780400040120496e73637269626500040048496e736372696265734f664163746f724964040010011c4163746f7249640005002442616c616e63654f660c0010011c4163746f72496400000c01107531323800000c0110753132380006001857686f616d69040010011c4163746f7249640007002c426c6f636b4e756d6265720400cc010c75333200080038426c6f636b54696d657374616d7004007c010c7536340009002450726f6772616d4964040010011c4163746f724964000a00244d65737361676549640400d001244d6573736167654964000b000040082c696e7363726962655f696f40496e736372696265496f53746174657300002001346d61705f696e7363726962657344018c42547265654d61703c496e736372696265496e64657865732c20496e7363726962653e00012062616c616e6365735001c842547265654d61703c496e736372696265496e64657865732c2042547265654d61703c4163746f7249642c20753132383e3e00012c746f74616c737570706c7968017c42547265654d61703c496e736372696265496e64657865732c20753132383e000140696e736372696265735f6d696e7465647401a842547265654d61703c4163746f7249642c2042547265654d61703c7536342c20496e7363726962653e3e000124696e736372696265737401a842547265654d61703c4163746f7249642c2042547265654d61703c7536342c20496e7363726962653e3e0001286d696e745f74696d65739001c442547265654d61703c496e736372696265496e64657865732c2042547265654d61703c4163746f7249642c207536343e3e000128616c6c5f6f7264657273a8016042547265654d61703c4f7264657249642c204f726465723e0001446f72646572735f6f665f6163746f726964c001ac42547265654d61703c4163746f7249642c2042547265654d61703c4f7264657249642c204f726465723e3e000044042042547265654d617008044b01300456010400040048000000480000024c004c0000040830040050042042547265654d617008044b0130045601540004006000000054042042547265654d617008044b01100456010c00040058000000580000025c005c00000408100c00600000026400640000040830540068042042547265654d617008044b01300456010c0004006c0000006c00000270007000000408300c0074042042547265654d617008044b0110045601780004008800000078042042547265654d617008044b017c04560104000400800000007c000005060080000002840084000004087c0400880000028c008c0000040810780090042042547265654d617008044b013004560194000400a000000094042042547265654d617008044b01100456017c00040098000000980000029c009c00000408107c00a0000002a400a400000408309400a8042042547265654d617008044b01ac045601b0000400b8000000ac082c696e7363726962655f696f1c4f726465724964000004000c0110753132380000b0082c696e7363726962655f696f144f72646572000018011c63726561746f7210011c4163746f72496400012c696e7363726962655f696430013c496e736372696265496e646578657300010c616d740c01107531323800011470726963650c0110753132380001306f726465725f737461747573b4012c4f726465725374617475730001286f726465725f747970652c01244f72646572547970650000b4082c696e7363726962655f696f2c4f7264657253746174757300010c184c69737465640000002043616e63656c65640001002453756363657373656400020000b8000002bc00bc00000408acb000c0042042547265654d617008044b0110045601a8000400c4000000c4000002c800c80000040810a800cc0000050500d010106773746418636f6d6d6f6e287072696d697469766573244d6573736167654964000004001401205b75383b2033325d0000";
  //  "0001000100000000000111000000011900000000000000011e000000212db00008186e66745f696f1c496e69744e465400000c0128636f6c6c656374696f6e040128436f6c6c656374696f6e000124726f79616c746965730c01444f7074696f6e3c526f79616c746965733e00012c636f6e73747261696e747334012c436f6e73747261696e747300000408186e66745f696f28436f6c6c656374696f6e00000801106e616d65080118537472696e6700012c6465736372697074696f6e080118537472696e6700000800000502000c04184f7074696f6e04045401100108104e6f6e6500000010536f6d650400100000010000101020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e24726f79616c7469657324526f79616c7469657300000801206163636f756e74731401185061796f757400011c70657263656e7430010c753136000014042042547265654d617008044b011804560124000400280000001810106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001c01205b75383b2033325d00001c000003200000002000200000050300240000050700280000022c002c000004081824003000000504003408186e66745f696f2c436f6e73747261696e747300000801386d61785f6d696e745f636f756e7438012c4f7074696f6e3c7533323e000148617574686f72697a65645f6d696e746572734001305665633c4163746f7249643e00003804184f7074696f6e040454013c0108104e6f6e6500000010536f6d6504003c00000100003c00000505004000000218004408186e66745f696f244e4654416374696f6e00012c104d696e740801387472616e73616374696f6e5f696448010c753634000138746f6b656e5f6d657461646174614c0134546f6b656e4d65746164617461000000104275726e0801387472616e73616374696f6e5f696448010c753634000120746f6b656e5f696450011c546f6b656e4964000100205472616e736665720c01387472616e73616374696f6e5f696448010c753634000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000200385472616e736665725061796f75741001387472616e73616374696f6e5f696448010c753634000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000118616d6f756e7424011075313238000300244e46545061796f75740801146f776e657218011c4163746f724964000118616d6f756e74240110753132380004001c417070726f76650c01387472616e73616374696f6e5f696448010c753634000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e49640005004044656c656761746564417070726f76650c01387472616e73616374696f6e5f696448010c75363400011c6d65737361676558015c44656c656761746564417070726f76654d6573736167650001247369676e61747572655c01205b75383b2036345d000600144f776e6572040120746f6b656e5f696450011c546f6b656e4964000700284973417070726f766564080108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400080014436c6561720401407472616e73616374696f6e5f6861736860011048323536000900244164644d696e7465720801387472616e73616374696f6e5f696448010c7536340001246d696e7465725f696418011c4163746f724964000a00004800000506004c1020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e14746f6b656e34546f6b656e4d6574616461746100001001106e616d65080118537472696e6700012c6465736372697074696f6e080118537472696e670001146d65646961080118537472696e670001247265666572656e6365080118537472696e67000050083c7072696d69746976655f74797065731055323536000004005401205b7536343b20345d000054000003040000004800581020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e2464656c6567617465645c44656c656761746564417070726f76654d6573736167650000140138746f6b656e5f6f776e65725f696418011c4163746f724964000144617070726f7665645f6163746f725f696418011c4163746f7249640001386e66745f70726f6772616d5f696418011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400015065787069726174696f6e5f74696d657374616d7048010c75363400005c00000340000000200060083c7072696d69746976655f74797065731048323536000004001c01205b75383b2033325d00006408186e66745f696f204e46544576656e7400011c205472616e73666572040068012c4e46545472616e73666572000000385472616e736665725061796f757404006c01444e46545472616e736665725061796f7574000100244e46545061796f757404001401185061796f757400020020417070726f76616c040070012c4e4654417070726f76616c000300144f776e65720801146f776e657218011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000400284973417070726f7665640c0108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000120617070726f766564740110626f6f6c0005002c4d696e74657241646465640401246d696e7465725f696418011c4163746f72496400060000681020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e08696f2c4e46545472616e7366657200000c011066726f6d18011c4163746f724964000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400006c1020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e08696f444e46545472616e736665725061796f7574000010011066726f6d18011c4163746f724964000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400011c7061796f7574731401185061796f75740000701020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e08696f2c4e4654417070726f76616c00000c01146f776e657218011c4163746f724964000140617070726f7665645f6163636f756e7418011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400007400000500007808186e66745f696f14496f4e46540000100114746f6b656e7c0128496f4e46545374617465000120746f6b656e5f696450011c546f6b656e49640001146f776e657218011c4163746f7249640001307472616e73616374696f6e73a801545665633c28483235362c204e46544576656e74293e00007c08186e66745f696f28496f4e4654537461746500002001106e616d65080118537472696e6700011873796d626f6c080118537472696e67000120626173655f757269080118537472696e6700012c6f776e65725f62795f696480015c5665633c28546f6b656e49642c204163746f724964293e00013c746f6b656e5f617070726f76616c738801705665633c28546f6b656e49642c205665633c4163746f7249643e293e000150746f6b656e5f6d657461646174615f62795f69649001945665633c28546f6b656e49642c204f7074696f6e3c546f6b656e4d657461646174613e293e000140746f6b656e735f666f725f6f776e65729c01705665633c284163746f7249642c205665633c546f6b656e49643e293e000124726f79616c746965730c01444f7074696f6e3c526f79616c746965733e00008000000284008400000408501800880000028c008c0000040850400090000002940094000004085098009804184f7074696f6e040454014c0108104e6f6e6500000010536f6d6504004c00000100009c000002a000a00000040818a400a40000025000a8000002ac00ac00000408606400";

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
    api.programState
      .read({ programId: programIDNFT, payload: "all" }, metadata)
      .then((result) => {
        setFullState(result.toJSON());
        // console.log(result.toJSON());
        const tokenMetadataById: any = fullState.all.inscribes ?? "";
        const Inscrs: Inscribe[] = Object.values(tokenMetadataById) as Inscribe[];
        Inscrs.map((item: any) => alldatanfts.push(item[1]));
        setAllnfts(alldatanfts);
      })
      // eslint-disable-next-line
      .catch(({ message }: Error) => console.log(message));
  };

  getMyNFT();

  return (
    <TableContainer>
    <div className="Table-head-font">Recent Inscriptions</div>
    <Table variant="simple">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
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

      <Tbody>
          {allnfts.map((elemento: any) => (
            <InfoNFT
              key={elemento.inscribeIndex}
              inscribeType={elemento.inscribeType}
              inscribeIndex={elemento.inscribeIndex}
              deployer={elemento.deployer}
              tick={elemento.tick}
              maxSupply={elemento. maxSupply}
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
  );
}

export { Home };

    
    