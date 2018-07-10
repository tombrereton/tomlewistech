import React from "react";

function HighlightText(props) {
  return (
    <h1 style={{ backgroundColor: props.backgroundColor, marginTop: '1em', marginLeft: '1em', padding:'0em 0.2em' }}>
      {props.text}
    </h1>
  );
}

export default HighlightText;
