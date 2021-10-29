import { useState } from "react";
import styled from "styled-components";
import Canvas from "../components/Canvas";
import Controller from "../components/Controller";
import "../styles/App.css";
import theme from "../styles/theme";

function App() {
  return (
    <Wrapper className="App">
      <Canvas/>
      <Controller />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default App;
