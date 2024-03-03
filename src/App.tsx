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
import ProblemScreen from "./ProblemScreen";
import Elementary from "./Elementary";

export const App = () => {
  const [level, setLevel] = React.useState<string>(
    localStorage.getItem("level") || "Home"
  );

  function handleLevelChange(level: string) {
    setLevel(level);
    localStorage.setItem("level", level);
  }

  function showProblem(): JSX.Element {
    if (level === "Home") {
      return (
        <div>
          <br></br>
          <Image m="0 auto" width="300px" alt="" src="images/logo.png" />
          <br></br> MathBridge is an online educational platform designed to
          cater to students of all backgrounds and ages, offering resources to
          enhance understanding and proficiency in mathematics. Our platform is
          dedicated to introducing fundamental mathematical concepts in an
          engaging and accessible manner, leveraging the power of Python
          programming to showcase its advantages over conventional calculators.
        </div>
      );
    } else if (level === "Learn") {
      return (<Elementary />);
    } else if (level === "Chat"){
      return (
        <div> 
          <Image m="0 auto" height="900px"alt="" src="images/chat.png" />
        </div>
      )
    }
    else {
      return (<ProblemScreen />);
    }
  }
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={8}>
            <div className="desktopMenu">
              <Link
                onClick={() => handleLevelChange("Home")}
                className="destopMenuListItem"
              >
                Home
              </Link>
              <Link
                ml="60px"
                onClick={() => handleLevelChange("Learn")}
                className="destopMenuListItem"
              >
                Learn
              </Link>
              <Link
                ml="60px"
                onClick={() => handleLevelChange("Elementary")}
                className="destopMenuListItem"
              >
                Elementary
              </Link>
              <Link
                ml="60px"
                onClick={() => handleLevelChange("Middle")}
                className="destopMenuListItem"
              >
                Middle School
              </Link>
              <Link
                ml="60px"
                onClick={() => handleLevelChange("High")}
                className="destopMenuListItem"
              >
                High School
              </Link>
              <Link
                ml="60px"
                onClick={() => handleLevelChange("Chat")}
                className="destopMenuListItem"
              >
                Discussion
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
