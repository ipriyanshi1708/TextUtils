import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };
  const handleClrClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared","success");
  };
  const handleCopy = () => {
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied to clipboard","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor: props.mode==='light'?'white':'grey' , color: props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>
          Clear Text
        </button>
        <button disabled={text.length===0}className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters{" "}
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} reading time</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter the text in the above Text box to preview it here"}</p>
      </div>
    </>
  );
}
