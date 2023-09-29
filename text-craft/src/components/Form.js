import React, { useState } from "react";

export default function Form(props) {
  const [text, changedText] = useState("");
  const handleOnChange = (event) => {
    let newText = event.target.value;
    changedText(newText);
    console.log("Changed");
  };
  const handleOnFocus = () => {
    changedText("");
  };
  const handleOnclick = () => {
    let newText = text.toUpperCase();
    changedText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    changedText(newText);
  };

  const handleCapClick = () => {
    let newText = text.toLowerCase();
    changedText(newText);
  };
  return (
    <>
      <div className="container">
        <div>
          <h1>Enter Your Text To Transform</h1>
          <textarea
            placeholder="Enter Text Here..."
            value={text}
            rows={10}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            className="no-resize"
          ></textarea>
          <div className="btn">
            <button className="btn-1" onClick={handleOnclick}>
              Change To UpperCase
            </button>
            <button className="btn-2" onClick={handleLoClick}>
              Change to LowerCase
            </button>
            <button className="btn-3" onClick={handleCapClick}>
              Capitalize The Text
            </button>
            {/* <button className="btn-4">Reset</button> */}
          </div>
          <h2 className="summary">Text Summary:</h2>
          <p>
            {text.split(" ").length} Words and {text.length} Characters
          </p>
        </div>
      </div>
    </>
  );
}
