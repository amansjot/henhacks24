import React from "react";
import {
  VStack,
  Text,
  HStack,
  Image,
  Box,
  Stack,
  Button,
} from "@chakra-ui/react";
import PythonRunner from "./PythonRunner";

const Elementary: React.FC = () => {
    const [revealed, setReveal] = React.useState<boolean>(false);
    
    function flipReveal(): void {
        setReveal(!revealed);
    }
  return (
    <div>
      <VStack mt="90px" spacing={8}>
        <HStack
          bg="#f4cccc"
          w="100%"
          justify="center"
          spacing="20"
          paddingTop={""}
        >
          <Box w="40%" height="750px">
            <Text>Problem</Text>
            <Image
              m="0 auto"
              height="500px"
              p="20px"
              src="images/addition.png"
              alt="Problem"
            />
          </Box>
          <Box w="40%">
            <Text mb="5">Python Editor</Text>
            <PythonRunner />{" "}
          </Box>
        </HStack>
        <Stack p="5" pb="10">
        <div>
            <Button onClick={flipReveal}>Show Solution</Button>
            {revealed && <div>
                <Image
              m="0 auto"
              width="500px"
              p="20px"
              src="images/elementary_answer.png"
              alt="Problem"
            />
                </div>}
        </div>
        </Stack>
      </VStack>
    </div>
  );
};

export default Elementary;
