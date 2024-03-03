import * as React from "react"
import "./App.css"
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
// import { Homescreen } from "./Homescreen/Homescreen"
import ProblemScreen from './ProblemScreen'

export const App = () => (
  <div className="App">
  <ChakraProvider theme={theme} >
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        {/* <Homescreen></Homescreen> */}
        <ProblemScreen></ProblemScreen>
      </Grid>
    </Box>
  </ChakraProvider>
  </div>
)
