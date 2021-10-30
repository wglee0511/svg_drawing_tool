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
  // radius는 string 상태
  const [realArr , setReal] = useState([])

  const [radius, setRadius] = useState(10);
  const [currentRadi, setCurrentRadi] = useState(10);
  const [pointsArr, setPoints] = useState([]);
  const [countPoint, setCountPoint] = useState(0);

  

  const handlePointClick = (event) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    setCountPoint(prev => prev += 1)
    setPoints((prev)=> [...prev, [x , y]])
    const lastIndexImageArr = realArr.length - 1 ?? -1
    const nowPoint = countPoint + 1
    if ( arrIndex == lastIndexImageArr ) {
    if(lineType === theme.type.line) {
      if(nowPoint == 2) {
        setImageArr(prev => [...prev, {type : lineType, x1 : pointsArr[0][0], y1 : pointsArr[0][1] , x2 : x, y2: y, color, width: line }])
        setReal(prev => [...prev, {type : lineType, x1 : pointsArr[0][0], y1 : pointsArr[0][1] , x2 : x, y2: y, color, width: line }])
        
        setCountPoint(0);
        setPoints([])
        setIndex(prev => prev += 1)
    
      }
    } else if (lineType === theme.type.arc ) {
      if(nowPoint == 4) {
        const points = `M${pointsArr[0][0]},${pointsArr[0][1]} C${pointsArr[1][0]},${pointsArr[1][1]} ${pointsArr[2][0]},${pointsArr[2][1]} ${x},${y}`
        setImageArr(prev => [
          ...prev,
          {
            type: lineType,
            points,
            color,
            width : line
          }
        ])
        setReal(prev => [
          ...prev,
          {
            type: lineType,
            points,
            color,
            width : line
          }
        ])
        setCountPoint(0);
        setPoints([])
        setIndex(prev => prev += 1)
    
      }
    } else if (lineType === theme.type.circle) {
      setImageArr(prev => [...prev, {type: lineType, x, y, radi:currentRadi, color, width: line}])
      setReal(prev => [...prev, {type: lineType, x, y, radi:currentRadi, color, width: line}])
      setCountPoint(0)
      setPoints([])
      setIndex(prev => prev += 1)
    
    } else if (lineType === theme.type.poly) {
      if(nowPoint == currentRadi){
        let points = ""
        pointsArr.map(each => points += `${each} `)
        points = `${points} ${x} ${y}`

        setImageArr((prev) => [
          ...prev,
          {
          type:lineType,
          points,
          color,
          width : line
          }
        ])
        setReal((prev) => [
          ...prev,
          {
          type:lineType,
          points,
          color,
          width : line
          }
        ])
        setCountPoint(0)
        setPoints([])
        setIndex(prev => prev += 1)
    
      }
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
        setReal(prev => [
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
        setIndex(prev => prev += 1)
    
      }
    }
  } else {
      if(lineType === theme.type.line) {
        if(nowPoint == 2) {
          setImageArr(prev => [...prev, {type : lineType, x1 : pointsArr[0][0], y1 : pointsArr[0][1] , x2 : x, y2: y, color, width: line }])
          setReal(() => [...imageArr, {type : lineType, x1 : pointsArr[0][0], y1 : pointsArr[0][1] , x2 : x, y2: y, color, width: line }])
          
          setCountPoint(0);
          setPoints([])
          setIndex(prev => prev += 1)
      
        }
      } else if (lineType === theme.type.arc ) {
        if(nowPoint == 4) {
          const points = `M${pointsArr[0][0]},${pointsArr[0][1]} C${pointsArr[1][0]},${pointsArr[1][1]} ${pointsArr[2][0]},${pointsArr[2][1]} ${x},${y}`
          setImageArr(prev => [
            ...prev,
            {
              type: lineType,
              points,
              color,
              width : line
            }
          ])
          setReal(() => [
            ...imageArr,
            {
              type: lineType,
              points,
              color,
              width : line
            }
          ])
          setCountPoint(0);
          setPoints([])
          setIndex(prev => prev += 1)
      
        }
      } else if (lineType === theme.type.circle) {
        setImageArr(prev => [...prev, {type: lineType, x, y, radi:currentRadi, color, width: line}])
        setReal(() => [...imageArr, {type: lineType, x, y, radi:currentRadi, color, width: line}])
        
        setCountPoint(0)
        setPoints([])
        setIndex(prev => prev += 1)
      
      } else if (lineType === theme.type.poly) {
        if(nowPoint == currentRadi){
          let points = ""
          pointsArr.map(each => points += `${each} `)
          points = `${points} ${x} ${y}`
  
          setImageArr((prev) => [
            ...prev,
            {
            type:lineType,
            points,
            color,
            width : line
            }
          ])
          setReal(() => [
            ...imageArr,
            {
            type:lineType,
            points,
            color,
            width : line
            }
          ])
          setCountPoint(0)
          setPoints([])
          setIndex(prev => prev += 1)
      
        }
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
          setReal(() => [
            ...imageArr,
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
          setIndex(prev => prev += 1)
      
        }
      }
    }
    
  };
  const value = {
    realArr, setReal,
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
