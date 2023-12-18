import { Box, Text, Button, Input } from "@chakra-ui/react";
import { useRef, useEffect } from "react";

function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Box>
      <Text color="red">Hola Mundo</Text>
      <Input ref={inputRef} border="1px solid black" width="200px" focusBorderColor="blue.500" />
    </Box>
  );
}

export { Home };
