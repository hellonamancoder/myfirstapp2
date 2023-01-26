import React, { useState } from "react";

export default function Textform(props) {

    const handleupclicked = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Your text has been coverted to uppercase " , "success")

    }
    const handlelowclicked = ()=>{
        let newText2 = text.toLowerCase();
        setText(newText2)
        if(newText2 === newText2){
        props.showalert("Your text has been coverted to lowercase " , "success")
        }
        else{
          <p>Please enter some text</p>
        }

    }
    const handlecopytext=()=>{
      let text = document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showalert("Copied to Clipboard!! " , "success")

    }
    const handleremovespaces=()=>{
      let newtext1 = text.split(/[ ]+/);
      setText(newtext1.join(" "))
      props.showalert("Your extra spaces in text has been removed " , "success")

    }
    const handleclear = ()=>{
       let clear = "" ;
       setText(clear)
       props.showalert("Your text has been cleared " , "success")

    }

    // const previweyourtext=()=>{
    //   console.log("Enter on preview")
    //  let newtext3 = document.getElementById("previewtxt")
    //  setText(newtext3);
    // }

    // const undotext = ()=>{
    //   if (text >= 0) {
    //     saveI--;
    //     $("#inputRegion").val(setText[saveI]);
    //   }
    //   debug();
    // }

    const onchangehandler = (event)=>{
        setText(event.target.value)
    }

  const [text, setText] = useState("");

  return (
    <>
    <div className="container my-4" style={{color:props.mode ==='dark'?'white':'black'}}>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label">
          <h3>{props.title}</h3>
        </label>
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'?'dodgerblue':'white' ,
         color:props.mode ==='dark'?'white':'black'}} onChange={onchangehandler} id="mybox" rows="10"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupclicked}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handlelowclicked}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleclear}>Clear text </button>
      <button className="btn btn-primary mx-2" onClick={handlecopytext}>Copy text </button>
      <button className="btn btn-primary mx-2" onClick={handleremovespaces}>Remove spaces </button>

    </div>

    <div className="container my-3" style={{color:props.mode ==='dark'?'white':'black'}}>
        <h3>Your text summary given below:</h3>
        <p><b>{text.split(" ").length} words and {text.length} characters</b></p>
        <p>Note : {0.008 * text.split(" ").length } minutes to read your given text.</p>
        <h4>Your text Preview:</h4>
        <p id="previewtxt" style={{ backgroundColor: props.mode === 'dark'?'black':'grey'}}>{text.length>0?text:"Enter something above to preview"}</p>

    </div>
    </>
  );
}
