import { useToast } from "@chakra-ui/react";
import { useState } from "react";

export default function useView() {
  const [file, setFile] = useState<File | null>(null);
  const toast = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      toast({
        title: "Arquivo selecionado!",
        description: `Você escolheu: ${event.target.files[0].name}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleSendFile = () => {
    if (!file) {
      toast({
        title: "Nenhum arquivo selecionado!",
        description: "Por favor, selecione um arquivo antes de enviar.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: "Enviando arquivo...",
      description: `O arquivo ${file.name} está sendo enviado.`,
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };
  return { file, handleFileChange, handleSendFile };
}
