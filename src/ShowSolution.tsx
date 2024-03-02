import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"


const ShowSolution: React.FC = () => {
     const [revealed, setReveal] = React.useState<boolean>(false);

    function flipReveal(): void {
        setReveal(!revealed);
    }

    return (
        <div>
            <Button onClick={flipReveal}>Show Solution</Button>
            {revealed && <div>ADD FOR LOOP HERE</div>}
        </div>
    );
}

export default ShowSolution;
