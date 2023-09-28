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
  return (
    <>
      <div className="container">
        <div>
          <h1>Enter Your Text To Transform</h1>
          <textarea
            placeholder="Enter Your Message..."
            value={text}
            rows={10}
            cols={95}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
          ></textarea>
          <div className="btn">
            <button onClick={handleOnclick}>Change To UpperCase</button>
          </div>
        </div>
      </div>
    </>
  );
}
