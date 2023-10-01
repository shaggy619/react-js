import React, { useState } from "react";

export default function Form() {
  const [text, changedText] = useState("");
  // const [mode, changeMode] = useState("");
  const handleOnChange = (event) => {
    let newText = event.target.value;
    changedText(newText);
    console.log("Changed");
  };

  const handleClear = () => {
    changedText("");
  };

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    changedText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    changedText(newText);
  };

  const handleCapClick = () => {
    const words = text.split(" ");
    const capitalizedWord = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedText = capitalizedWord.join(" ");
    changedText(capitalizedText);
  };

  const handleExtraSpace = () => {
    let words = text.split(" ");
    let joinedWords = "";
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    });
    changedText(joinedWords);
  };

  const nonWhitespaceText = text.replace(/\s/g, ""); // Remove all whitespace characters
  const charCount = nonWhitespaceText.length;

  const handleChangeMode = () => {};

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
            className="no-resize"
          ></textarea>
          <div className="btn">
            <button className="btn-1" onClick={handleUpclick}>
              UpperCase
            </button>
            <button className="btn-2" onClick={handleLoClick}>
              LowerCase
            </button>
            <button className="btn-3" onClick={handleCapClick}>
              Capitalize
            </button>
            <button className="btn-4" onClick={handleExtraSpace}>
              Remove Extra Spaces
            </button>
            <button className="btn-5" onClick={handleClear}>
              Reset
            </button>
          </div>
          <h2 className="summary">Text Summary:</h2>
          <p>
            {text.trim().split(/\s+/).filter(Boolean).length} Words and
            {" " + charCount} Letters
          </p>
        </div>
      </div>
      <div className="mode-icons" onClick={handleChangeMode}>
        <i className="uil uil-moon"></i>
        <i className="uil uil-sun"></i>
      </div>
    </>
  );
}
