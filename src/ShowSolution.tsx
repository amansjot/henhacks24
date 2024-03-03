import * as React from "react"
import {
  Button,
} from "@chakra-ui/react"


const ShowSolution: React.FC = () => {
     const [revealed, setReveal] = React.useState<boolean>(false);

    function flipReveal(): void {
        setReveal(!revealed);
    }

    return (
        <div>
            <Button mb="5" onClick={flipReveal}>Show Solution</Button>
            {revealed && <div>ADD FOR LOOP HERE</div>}
        </div>
    );
}

export default ShowSolution;
