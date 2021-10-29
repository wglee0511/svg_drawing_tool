import React, { useContext } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";
import theme from "../styles/theme";

const Canvas = (props) => {
  const { line, color, canvasSize } = props;
  const lineContext = useContext(LineDataContext);
  const {
    handlePointClick,
    setImageArr,
    setIndex,
    arrIndex,
    imageArr,
    lineType,
    renderRef,
    draw,
  } = lineContext;

  return <CanvasDiv ref={renderRef} />;
};

const CanvasDiv = styled.div`
  background-color: ${theme.color.white};
  margin: 50px auto 50px auto;
  width: 700px;
  height: 700px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export default Canvas;
