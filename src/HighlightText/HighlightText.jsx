import React from "react";

function HighlightText(props) {
  return (
    <h1 style={{ backgroundColor: props.color, padding:'0em 0.2em' }}>
      {props.text}
    </h1>
  );
}

export default HighlightText;
