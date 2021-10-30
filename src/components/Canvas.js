import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";
import theme from "../styles/theme";

const Canvas = (props) => {
  const lineContext = useContext(LineDataContext);
  const {
    canvasSize,
    handlePointClick,
    imageArr,
    canvasRef,
  } = lineContext;

  useEffect(()=>{},[imageArr])

  return <CanvasDiv onClick={handlePointClick}>
    <svg ref={canvasRef} width={canvasSize[0]}
      height={canvasSize[1]}
      xmlns="http://w3.org/2000/svg" version="1.1" viewbox= "0 0 300 300"
    >
      {imageArr?.map((each, index) => {
        if(each.type === theme.type.line){
          return <line key={index} x1={each.x1} y1={each.y1} x2={each.x2} y2={each.y2} stroke={each.color} strokeWidth={each.width} />
        } else if (each.type === theme.type.circle){
          return <circle key={index} cx={each.x} cy={each.y} r={each.radi} stroke={each.color} stroke-width={each.width} fill="transparent" />
        } else if (each.type === theme.type.rect){
          return <rect key={index} rx="1" ry="1" x={each.x1} y={each.y1}  width={each.rw} height={each.rh} fill="transparent" stroke={each.color} stroke-width={each.width} />
        } else if (each.type === theme.type.poly){
          return <polygon points={each.points} fill="transparent" stroke={each.color} strokeWidth={each.width} />
        } else if (each.type === theme.type.arc){
          return <path key={index} d={each.points} fill="transparent" stroke={each.color} strokeWidth={each.width} />
        }
      })}
      
    </svg>
    </CanvasDiv>;
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
