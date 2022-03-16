import "./App.css";
import Login from "./Components/Login";
import Signin from "./Components/Signin";
import "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [noneLog, setNoneLog] = useState(true);
  const [noneSin, setNoneSin] = useState(true);

  const HandleClickLog = () => {
    setNoneLog(noneLog === false);
    setNoneSin(noneSin === true);
    if (noneSin === false) {
      setNoneSin(true);
    }
  };
  const HandleClickSin = () => {
    setNoneSin(noneSin === false);
    setNoneLog(noneLog === true);
    if (noneLog === false) {
      setNoneLog(true);
    }
  };
  return (
    <Container className="container">
      <Row className="row">
        <button onClick={HandleClickLog} className={noneLog ? null : "grayBut"}>
          ورود
        </button>
        <button onClick={HandleClickSin} className={noneSin ? null : "grayBut"}>
          ثبت نام
        </button>
      </Row>
      <Row>
        <Login noneLog={noneLog} />
      </Row>
      <Row>
        <Signin noneSin={noneSin} />
      </Row>
    </Container>
  );
}

export default App;
