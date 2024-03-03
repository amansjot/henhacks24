import React from "react";
import {
  VStack,
  Text,
  HStack,
  Image,
  Box,
  Stack,
} from "@chakra-ui/react";
import PythonRunner from "./PythonRunner";
import "./Homescreen.css";

const ProblemScreen: React.FC = () => {
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
        </Stack>
      </VStack>
    </div>
  );
};

export default ProblemScreen;
