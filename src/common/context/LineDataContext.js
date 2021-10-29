import React, { createContext, useRef, useState } from "react";
import { useSvgDrawing } from "react-hooks-svgdrawing";
import theme from "../../styles/theme";

const LineDataContext = createContext();

const LineDataProvider = (props) => {
  const [imageArr, setImageArr] = useState([]);
  const [arrIndex, setIndex] = useState(-1);
  const [lineType, setLineType] = useState(theme.type.normal);
  // radious는 strung 상태
  const [radius, setRadius] = useState(10);
  const [currentRadi, setCurrentRadi] = useState(10);
  const [pointsArr, setPoints] = useState([]);
  const [countPoint, setCountPoint] = useState(0);

  const [renderRef, draw] = useSvgDrawing({
    penWidth: 2.5, // pen width: ;
    penColor: theme.color.black, // pen color: ;
    close: false, // Use close command for path. Default is false.
    curve: true, // Use curve command for path. Default is true.
    delay: 60, // Set how many ms to draw points every.
    fill: "none", // Set fill attribute for path. default is `none`
  });

  const handlePointClick = (event) => {};

  const value = {
    renderRef,
    draw,
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
