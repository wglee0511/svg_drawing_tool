import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { LineDataContext } from "../common/context/LineDataContext";

const LineController = (props) => {
const lineContext = useContext(LineDataContext);
const {line, setLine} = lineContext;
  let inputRef = useRef(null);
  const handleLineChange = (event) => {
    const size = event.target.value;
    setLine(() => Number(size));
  };

  return (
    <label style={{ marginBottom: "15px" }}>
      Line Width :
      <Input
        ref={inputRef}
        type="text"
        value={line}
        onChange={handleLineChange}
      />
    </label>
  );
};

const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default LineController;
