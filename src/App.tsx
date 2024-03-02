import * as React from "react"
import "./App.css"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import ShowSolution from "./ShowSolution"

import { Homescreen } from "./Homescreen/Homescreen"

export const App = () => (
  <div className="App">
  <ChakraProvider theme={theme} >
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <Homescreen></Homescreen>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          {/* <Logo h="40vmin" pointerEvents="none" /> */}
          <Text>
            {/* Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload. */}
          </Text>
          <ShowSolution></ShowSolution>
          {/* <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link> */}
        </VStack>
      </Grid>

      
    </Box>
  </ChakraProvider>
  </div>
)
