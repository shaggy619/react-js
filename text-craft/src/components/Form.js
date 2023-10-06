import React, { useState, useRef } from "react";

export default function Form() {
  const [text, changedText] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMoonVisible, setIsMoonVisible] = useState(true);
  const [altTxt, setAltTxt] = useState("Copied to Clipboard!");
  const alertMessageRef = useRef(null);
  const textContentRef = useRef(null);
  //Hide alert message
  let alertTimeout;
  const hideAlertMsg = () => {
    clearTimeout(alertTimeout);
    alertTimeout = setTimeout(() => {
      alertMessageRef.current.style.display = "none";
    }, 1000);
  };

  //Display Alert message
  const alertMsg = (text1, text2) => {
    alertMessageRef.current.style.display = "block";
    if (textContentRef.current.value.length !== 0) {
      setAltTxt(text1);
    } else {
      setAltTxt(text2);
    }
    hideAlertMsg();
  };

  //Function to change the text on the textArea as we keep typing
  const handleOnChange = (event) => {
    let newText = event.target.value;
    changedText(newText);
  };

  //Function to clear text from the textArea
  const handleClear = () => {
    changedText("");
    alertMsg("Cleared All Text!", "Nothing To Clear!");
  };

  //Function to change text to Uppercase
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    changedText(newText);
    alertMsg("Changed To Uppercase!", "Enter Text First!");
  };

  //Function to change text to Lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    changedText(newText);
    alertMsg("Changed To Lowercase!", "Enter Text First!");
  };

  //Function to Capitalize the text
  const handleCapClick = () => {
    const words = text.split(" ");
    const capitalizedWord = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    const capitalizedText = capitalizedWord.join(" ");
    changedText(capitalizedText);
    alertMsg("Text Capitalized!", "Enter Text First!");
  };

  //Function to remove extra spaces
  const handleExtraSpace = () => {
    let words = text.split(" ");
    let joinedWords = "";
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
      }
    });
    changedText(joinedWords);

    alertMsg("Removed Extra Spaces!", "Enter Text First!");
  };

  const nonWhitespaceText = text.replace(/\s/g, ""); // Remove all whitespace characters
  const charCount = nonWhitespaceText.length;

  //Function to switch between dark mode and light mode
  const handleChangeMode = () => {
    let textBox = document.getElementById("textArea");
    let clipboard = document.querySelector(".uil-clipboard-alt");
    setIsMoonVisible(!isMoonVisible);
    // Toggle dark mode
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
      textBox.classList.remove("dark-mode");
      clipboard.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
      textBox.classList.add("dark-mode");
      clipboard.classList.add("dark-mode");
    }
  };

  //Function to copy text from textArea to clipboard
  const handleCopyText = () => {
    let textContent = document.getElementById("textArea");
    textContent.select();
    document.execCommand("copy");
    alertMsg("Copied To Clipboard!", "Nothing to Copy!");
  };

  return (
    <>
      <div className="container">
        <div>
          <h1>Enter Your Text To Transform</h1>
          <span className="alert-message" ref={alertMessageRef}>
            <p>{altTxt}</p>
          </span>
          <span className="clipboard">
            <i onClick={handleCopyText} className="uil uil-clipboard-alt"></i>
          </span>
          <textarea
            placeholder="Enter Text Here..."
            value={text}
            rows={10}
            onChange={handleOnChange}
            className="no-resize"
            id="textArea"
            ref={textContentRef}
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
