import { Box, Text, Button, Input } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import "./";

function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  
  const inputStyle = {
    border: "3px solid black",
    width: "600px",
    height: "100px",
    focusBorderColor: "blue.500",
    // font-size:"30px",
  };
  const program={
    border:"3px solid black",
    width:"600px", 
    focusBorderColor:"blue.500",
    placeholder:"0xc18584c6b11838f2f62233f030dc8fe649b4b212fd35aaabf79ed0e5be11c24d",
  };
 

  

  return (
    <Box>
      <Text  fontSize="30px" fontWeight="700">Program ID:</Text>
      <Input id="Program"  />
      <Text fontSize="30px" fontWeight="700">Payload:</Text>
      <select id="Payload"style={{ border: "3px solid black", width: "600px", height: "50px", fontSize: "30px", fontWeight:"700",backgroundColor: "white" }}>
        <option value="value1">All</option>
        <option value="value2">Querylnscribe</option>
        <option value="value3">Querylnscribebyactorld</option>
        <option value="value4">4</option>
        <option value="value5">5</option>
        <option value="value6">6</option>
        <option value="value7">7</option>
        <option value="value8">8</option>
        <option value="value9">9</option>
      </select>
      <Text fontSize="30px" fontWeight="700">U128:</Text>
      <Input id="Program" placeholder=""/>
      <Text fontSize="30px" fontWeight="700">Str:</Text>
      <Input id="Program" placeholder=""/>
      <Text fontSize="30px" fontWeight="700">Statedata:</Text>
      <Input id="Program" placeholder=""/>
      <Button id="readButton" colorScheme="blue" variant="outline" size="md">Read</Button>
      <Button id="cancelButton" colorScheme="blue" variant="outline" size="md">Cancel</Button>
      </Box>
  );
}

export { Home };
