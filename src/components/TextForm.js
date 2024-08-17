import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleUpper = () => {
        // console.log("Upper Case was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!","info")
    }
    const handleLower = () => {
        // console.log("Lower Case was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!","info")
    }
    
    const handleExtraSpaces = () => {
        // console.log("Lower Case was Clicked" + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removved!","info")
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied!","info")
    }

    const handleclear = () => {
        // console.log("Clear was Clicked" + text);
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="myBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control fs-5" id="myBox" rows="8" value={text} onChange={handleOnChange} 
                    style={
                        {backgroundColor : props.mode==='dark'?'rgb(34 66 104)':'white' , 
                        color : props.mode==='dark'?'white':'black'}
                        }>
                    </textarea>
                    <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleUpper}>UpperCase</button>
                    <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleLower}>LowerCase</button>
                    <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleCopy}>CopyText</button>
                    <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
                    <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleclear}>Clear</button>
                </div>
            </div>
            <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p className='fs-5'>
                    {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words <br />
                    {text.length} characters <br />
                    {0.008 * text.split(" ").length} Minutes To read
                </p>
                <h2>Preview</h2>
                <p className='fst-italic'>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
