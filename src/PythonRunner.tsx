import React, { useState, useEffect } from "react";
import { Button, VStack, Box, Text, Input, HStack } from "@chakra-ui/react";
import AceEditor from "react-ace";

// Import the necessary scripts for Python mode and a theme
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai";

declare global {
  interface Window {
    loadPyodide: Function;
  }
}

const PythonRunner: React.FC = () => {
  const [pyodide, setPyodide] = useState<any>(null);
  const [code, setCode] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const [pow1, setPow1] = useState<number>(1);
  const [pow2, setPow2] = useState<number>(0);

  const [loop1, setLoop1] = useState<number>(1);
  const [loop2, setLoop2] = useState<number>(0);

  useEffect(() => {
    (async () => {
      if (!pyodide) {
        setLoading(true);
        const pyodideRuntime = await window.loadPyodide({
          indexURL: "https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",
        });
        setPyodide(pyodideRuntime);
        setLoading(false);
      }
    })();
  }, [pyodide]);

  const runPythonCode = async () => {
    try {
      if (!pyodide) return;
      await pyodide.loadPackage("numpy");
      await pyodide.loadPackage("math");
      await pyodide.loadPackage("matplotlib");
      const output = await pyodide.runPythonAsync(code);
      // Check if 'output' is not 'undefined' before calling 'toString()'
      if (output !== undefined) {
        setOutput(output.toString());
      } else {
        // Handle the case where 'output' is 'undefined'
        setOutput("Execution completed with no return value.");
      }
    } catch (error) {
      // Handle errors as previously discussed
      if (error instanceof Error) {
        console.error(error.message);
        // setOutput(`Error executing Python code: ${error.message}`);
        setOutput(`Error executing Python code. Try again.`);
      } else {
        console.error(error);
        setOutput("Error executing Python code.");
      }
    }
  };

  if (loading) {
    return <Box>Loading Pyodide...</Box>;
  }

  const handlePow1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPow1(Number(event.target.value));
  };

  const handlePow2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPow2(Number(event.target.value));
  };

  function addPower() {
    if (!code.includes("import math")) {
      setCode(
        `import math
` +
          code +
          `
math.pow(${pow1}, ${pow2})
`
      );
    } else {
      setCode(
        code +
          `
math.pow(${pow1}, ${pow2})
`
      );
    }
  }

  const handleLoop1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoop1(Number(event.target.value));
  };

  const handleLoop2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoop2(Number(event.target.value) + 1);
  };

  function addLoop() {
    setCode(
      code +
        `
        
for num in range(${loop1}, ${loop2}):
  `
    );
  }

  return (
    <VStack spacing={4} w="100%" h="700px">
      <Box width="500px" position="relative">
        <AceEditor
          mode="python"
          theme="monokai"
          name="aceEditor"
          onChange={(e) => setCode(e)}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={code}
          width="500px"
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
          }}
          style={{ width: "100%", height: "400px", marginBottom: 0 }}
        />
        <Box w="100%" mt="-10px" border="1px solid darkgrey">
          <Box p={4} textAlign="left" height="120px" bg="gray.300">
            {output}
          </Box>
        </Box>
        <Button
          p="10px 25px"
          m="10px"
          colorScheme="blue"
          onClick={runPythonCode}
          isDisabled={loading}
          position="absolute"
          top="5px"
          right="5px"
        >
          Run Code
        </Button>
      </Box>
      <HStack>
        <Text>Power:</Text>
        <Input type="number" onChange={handlePow1Change} w="50px" />
        <Text>^</Text>
        <Input type="number" onChange={handlePow2Change} w="50px" />
        <Button border="1px solid grey" onClick={addPower}>
          Go
        </Button>
      </HStack>
      <HStack>
        <Text>Loop:</Text>
        <Input type="number" onChange={handleLoop1Change} w="50px" />
        <Text> through </Text>
        <Input type="number" onChange={handleLoop2Change} w="50px" />
        <Button border="1px solid grey" onClick={addLoop}>
          Go
        </Button>
      </HStack>
    </VStack>
  );
};

export default PythonRunner;
