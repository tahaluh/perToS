import { Box, Button, Heading, Input, Text, VStack } from "@chakra-ui/react";
import useView from "./useView";

function Main() {
  const { file, handleFileChange, handleSendFile } = useView();

  return (
    <Box textAlign="center" p={5}>
      <Heading mb={4}>🚀 PerToS - Compartilhamento P2P</Heading>
      <VStack spacing={4}>
        <Input type="file" onChange={handleFileChange} />
        {file && <Text>📂 Arquivo: {file.name}</Text>}
        <Button colorScheme="blue" onClick={handleSendFile}>
          Enviar Arquivo
        </Button>
      </VStack>
    </Box>
  );
}

export default Main;
