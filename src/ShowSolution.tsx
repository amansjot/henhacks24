import * as React from "react"
import {
  Button,
} from "@chakra-ui/react"
import Elementary from "./Elementary";
import High from "./High";
import Middle from "./Middle";


const ShowSolution: React.FC = () => {
     const [revealed, setReveal] = React.useState<boolean>(false);
    
    function flipReveal(): void {
        setReveal(!revealed);
    }
    return (
        <div>
            <Button mb="5" onClick={flipReveal}>Show Solution</Button>
            
        </div>
    );
    }
export default ShowSolution;
