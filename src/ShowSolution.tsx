import * as React from "react";
import { Button, Image } from "@chakra-ui/react";

const ShowSolution: React.FC = () => {
  const [revealed, setReveal] = React.useState<boolean>(false);

  function flipReveal(): void {
    setReveal(!revealed);
  }

  function showImage() {
    
    let source = "";
    const level = localStorage.getItem("level");

    if (level === "Elementary") {
        source = "images/elementary_answer.png";
    } else if (level === "Middle") {
        source = "images/middle_answer.png";
    } else if (level === "High") {
        source = "images/high_answer.png";
    }

    return (
        <div>
          <Image
            m="0 auto"
            width="500px"
            p="20px"
            src={source}
            alt="Problem"
          />
        </div>
      );
  }

  return (
    <div>
      <Button mb="5" onClick={flipReveal}>
        Show Solution
      </Button>
      {revealed && showImage()}
    </div>
  );
};
export default ShowSolution;
