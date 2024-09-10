import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        settext(newText);
        props.showAlert("Converted to Uppper Case", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        settext(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleClearClick = () => {
        let newText = "";
        settext(newText);
        props.showAlert("Textbox is cleared", "success");
    }

    const handleCopyClick = () => {
        let copyText = document.getElementById("myBox");
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text is copied to clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.replace(/\s{2,}/g, '');
        settext(newText.trim());
        props.showAlert("Extra spaces from the text are removed", "success");
    }

    const forBackGroundColor = (m) => {
        switch (m) {
            case "dark":
                return "#595656";
            default:
                return "white";
        };
    };

    const handleOnChange = (event) => {
        settext(event.target.value);
    }

    const [text, settext] = useState("");

    return (
        <>
            <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1 className='mb-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="3"
                        style={{
                            backgroundColor: forBackGroundColor(props.mode),
                            color: props.mode === "light" ? "black" : "white"
                        }}>
                    </textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Result</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>Your text summery</h2>
                <p>{text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").filter((e) => { return e.length !== 0 }).length} minutes read.</p>
                <h2>Preview</h2>
                <p className="preview-text">{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    )
}