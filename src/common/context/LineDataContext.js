import React, { createContext, useRef, useState } from "react";
import { useSvgDrawing } from "react-hooks-svgdrawing";
import theme from "../../styles/theme";

const LineDataContext = createContext();

const LineDataProvider = (props) => {
  const canvasRef = useRef(null)

  const [line, setLine] = useState(2.5);
  const [color, setColor] = useState(theme.color.black);
  const [canvasSize, setCanvasSize] = useState([700, 700]);

  const [imageArr, setImageArr] = useState([]);
  const [arrIndex, setIndex] = useState(-1);
  const [lineType, setLineType] = useState(theme.type.line);
  // radious는 strung 상태
  const [radius, setRadius] = useState(10);
  const [currentRadi, setCurrentRadi] = useState(10);
  const [pointsArr, setPoints] = useState([]);
  const [countPoint, setCountPoint] = useState(0);

  

  const handlePointClick = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    setCountPoint(prev => prev += 1)
    setPoints((prev)=> [...prev, [x , y]])
    const nowPoint = countPoint + 1
    
    if(lineType === theme.type.line) {
      if(nowPoint == 2) {
        setImageArr(prev => [...prev, {type : lineType, x1 : pointsArr[0][0], y1 : pointsArr[0][1] , x2 : x, y2: y, color, width: line }])
        setCountPoint(0);
        setPoints([])
      }
    } else if (lineType === theme.type.circle) {
      setImageArr(prev => [...prev, {type: lineType, x, y, radi:currentRadi, color, width: line}])
      setCountPoint(0)
      setPoints([])
    } else if (lineType === theme.type.rect) {
      if(nowPoint == 2) {
        let x1 = 0;
        let y1 = 0;
        let rw = 0;
        let rh = 0;

        const arrX = pointsArr[0][0]
        const arrY = pointsArr[0][1]

        if (x >= arrX) {
          x1 = arrX;
          rw = x - arrX;
        } else {
          x1 = x;
          rw = arrX - x;
        }

        if (y >= arrY) {
          y1 = arrY;
          rh = y - arrY;
        } else {
          y1 = y;
          rh = arrY - y;
        }

        setImageArr(prev => [
          ...prev,
          {
            type: lineType,
            x1, 
            y1, 
            rw,
            rh,
            color,
            width: line
          }
        ])
        setCountPoint(0)
        setPoints([])
      }
    }
    console.log(imageArr)
  };

  const value = {
    line,
    setLine,
    color,setColor,canvasSize,setCanvasSize,
    canvasRef,
    imageArr,
    setImageArr,
    arrIndex,
    setIndex,
    lineType,
    setLineType,
    pointsArr,
    countPoint,
    setPoints,
    setCountPoint,
    handlePointClick,
    radius,
    setRadius,
    currentRadi,
    setCurrentRadi,
  };
  return (
    <LineDataContext.Provider value={value}>
      {props.children}
    </LineDataContext.Provider>
  );
};

export { LineDataContext, LineDataProvider };
