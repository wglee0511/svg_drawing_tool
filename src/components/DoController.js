import React, { useContext } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";
import theme from "../styles/theme";

const DoController = () => {
  const lineContext = useContext(LineDataContext);
  const {
    renderRef,
    draw,
    setImageArr,
    setIndex,
    arrIndex,
    imageArr,
    setPoints,
    setCountPoint,
  } = lineContext;

  const handleClear = () => {};
  const handleUndo = () => {};
  const handleRedo = () => {};
  const handleSave = () => {};
  return (
    <Wrapper>
      <Btn onClick={handleClear}>Clear</Btn>
      <Btn onClick={handleUndo}>Undo</Btn>
      <Btn onClick={handleRedo}>Redo</Btn>
      <Btn onClick={handleSave}>Save</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;
export default DoController;
