import React, { useEffect, useState, useRef, useMemo } from "react";
import Button from "./Button";
import Title from "./Title";

function App() {
  
  const value1Ref = useRef("hi");
  const value2Ref = useRef("byewww");
  console.log("App is rendering...");
  useEffect(() => {
    
    console.log("== App rendered ==");
  });
  const [value1, setValue1] = useState("hiwwww");
  const [value2, setValue2] = useState("byewww");

  const changeValue1 = () => {
    setValue1(value1Ref.current.value);
  }

  const changeValue2 = () => {
    setValue2(value2Ref.current.value);
  }



  return (
    <div className="App">
      <div className="value-1">
        first value: {useMemo(()=><Title>{value1}</Title>,[value1])}
        <br />
        change first value:
        <input ref={value1Ref} />
        {useMemo(()=><Button onClick={changeValue1}> change </Button>,[value1])}
      </div>
      <div className="value-2">
        second value: {useMemo(()=><Title>{value2}</Title>,[value2])}
        <br />
        change second value:
        <input ref={value2Ref} />
        {useMemo(()=><Button onClick={changeValue2}> change </Button>,[value2])}
      </div>
    </div>
  );
}
export default App;
