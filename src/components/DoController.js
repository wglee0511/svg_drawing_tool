import React, { useContext, useState } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";
import theme from "../styles/theme";

const DoController = () => {
  const lineContext = useContext(LineDataContext);
  const {
    realArr,
    setImageArr,
    setIndex,
    arrIndex,
    imageArr,
    setPoints,
    setCountPoint,
    canvasRef,
  } = lineContext;

  const handleClear = () => {
    setImageArr([])
    setPoints([])
    setCountPoint(0)
    setIndex((-1))
  };
  const handleUndo = () => {
    setPoints([])
    setCountPoint(0)
    if(arrIndex == -1) {
      return
    }
    const lastImageArrIndex = imageArr.length - 1
    if (lastImageArrIndex == arrIndex) {
      setIndex(prev => prev -= 1)
      if(arrIndex == 0){
        setImageArr([])
      } else {
        const newArrForUndo = realArr.slice(0, lastImageArrIndex)
        setImageArr([...newArrForUndo])
      } 
    } else {
      setIndex(prev => prev -= 1)
      const newArrForUndo = realArr.slice(0, lastImageArrIndex)
      setImageArr([...newArrForUndo])
    
    }
    

  };
  const handleRedo = () => {
    setPoints([])
    setCountPoint(0)
    const lastImageArrIndex = realArr.length - 1
    if(lastImageArrIndex == arrIndex){
      return
    } 
      setIndex(prev => prev += 1)
      const newArrForUndo = realArr.slice(0, arrIndex+2)
      setImageArr([...newArrForUndo])
    
  };
  const handleSave = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL("image/svg+xml");
    const link = document.createElement("a");

    link.href = image;
    link.download = "Canvas";
    link.click();
  };
  return (
    <Wrapper>
      <Btn onClick={handleClear}>Clear</Btn>
      <Btn onClick={handleUndo}>Undo</Btn>
      <Btn onClick={handleRedo}>Redo</Btn>
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
