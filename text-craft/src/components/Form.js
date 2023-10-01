import React, { useState } from "react";

export default function Form() {
  const [text, changedText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode state
  const [isMoonVisible, setIsMoonVisible] = useState(true);

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

  const handleChangeMode = () => {
    setIsMoonVisible(!isMoonVisible);
    // Toggle dark mode
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }
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
        {isMoonVisible ? (
          <i className="uil uil-moon" style={{ display: "flex" }}></i>
        ) : (
          <i className="uil uil-moon" style={{ display: "none" }}></i>
        )}
        {isMoonVisible ? (
          <i className="uil uil-sun" style={{ display: "none" }}></i>
        ) : (
          <i className="uil uil-sun" style={{ display: "flex" }}></i>
        )}
      </div>
    </>
  );
}
