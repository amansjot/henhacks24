import React, { useState } from "react";
import { Button, Input, VStack, HStack, Box, Text } from "@chakra-ui/react";

const Calculator: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const calcResult = eval(input);
      setResult(calcResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <VStack spacing={4} bg="#eee">
      <Text fontSize="2xl">Simple Calculator</Text>
      <Input
        value={input}
        onChange={handleChange}
        placeholder="Enter calculation"
      />
      <HStack spacing={1}>
        <Button border="1px solid grey" onClick={() => setInput(input + "+")}>
          +
        </Button>
        <Button border="1px solid grey" onClick={() => setInput(input + "-")}>
          -
        </Button>
        <Button border="1px solid grey" onClick={() => setInput(input + "*")}>
          *
        </Button>
        <Button border="1px solid grey" onClick={() => setInput(input + "/")}>
          /
        </Button>
      </HStack>
      <HStack spacing={4}>
        <Button border="1px solid grey" onClick={() => setInput(input + "/")}>
          /
        </Button>
        <Button colorScheme="blue" onClick={calculateResult}>
          =
        </Button>
        <Button colorScheme="red" onClick={clearInput}>
          C
        </Button>
      </HStack>
      <Box>Result: {result}</Box>
    </VStack>
  );
};

export default Calculator;
