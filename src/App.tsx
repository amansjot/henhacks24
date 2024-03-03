import * as React from "react";
import "./App.css";
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  Image,
  Link,
} from "@chakra-ui/react";
import Elementary from "./Elementary";
import High from "./High";
import Middle from "./Middle";

export const App = () => {
  const [level, setLevel] = React.useState<string>(
    localStorage.getItem("level") || "Home"
  );

  function handleLevelChange(level: string) {
    setLevel(level);
    localStorage.setItem("level", level);
  }

  function showProblem(): JSX.Element{
    if (level === "Elementary") {
      return (<Elementary></Elementary>);
  } else if (level === "Middle"){
      return (<Middle></Middle>);
  } else if (level === "High"){
    return(<High></High>);
  }else {
    return (<div>
      <br></br>
      <Image m="0 auto" width="300px" alt="" src ="images/logo.png"/>
      <br></br> MathBridge is a online educational platform designed to
      cater to students of all backgrounds and ages, offering resources
      to enhance understanding and proficiency in mathematics. Our
      platform is dedicated to introducing fundamental mathematical
      concepts in an engaging and accessible manner, leveraging the
      power of Python programming to showcase its advantages over
      conventional calculators.
    </div>)
  }
  }
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <div className="desktopMenu">
              <Link
                onClick={() => handleLevelChange("Home")}
                className="destopMenuListItem"
              >
                Home
              </Link>
              <Link ml="4"
                onClick={() => handleLevelChange("Elementary")}
                className="destopMenuListItem"
              >
                Elementary
              </Link>
              <Link ml="4"
                onClick={() => handleLevelChange("Middle")}
                className="destopMenuListItem"
              >
                Middle School
              </Link>
              <Link ml="4"
                onClick={() => handleLevelChange("High")}
                className="destopMenuListItem"
              >
                High School
              </Link>
            </div>
            
            {showProblem()}
          </Grid>
        </Box>
      </ChakraProvider>
    </div>
  );
};

export default App;
