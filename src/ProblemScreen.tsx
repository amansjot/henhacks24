import React from "react";
import { VStack, Text, HStack, Image, Box, Stack } from "@chakra-ui/react";
import PythonRunner from "./PythonRunner";
import "./Homescreen.css";
import ShowSolution from "./ShowSolution";

const ProblemScreen: React.FC = () => {
  const level = localStorage.getItem("level");
  let source = "";

  if (level === "Elementary") {
    source = "images/addition.png";
  } else if (level === "Middle") {
    source = "images/graphing.png";
  } else if (level === "High") {
    source = "images/high.png";
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
            <Text>{level} Problem</Text>
            <Image
              m="0 auto"
              height="500px"
              p="20px"
              src={source}
              alt="Problem"
            />
          </Box>
          <Box w="40%">
            <Text mb="5">Python Editor</Text>
            <PythonRunner />{" "}
          </Box>
        </HStack>
        <Stack p="5" pb="10">
          <ShowSolution />
        </Stack>
      </VStack>
    </div>
  );
};

export default ProblemScreen;
