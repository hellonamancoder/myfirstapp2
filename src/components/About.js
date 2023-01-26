import React, { useState } from "react";

export default function About(props) {
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  return (
    <>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>About us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                style={{
                  backgroundColor: props.mode === "dark" ? "black" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How Textutils work ?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <strong>
                  At its most basic, text analyzers derive meaning from text.
                  And at its most sophisticated, it uses advanced artificial
                  intelligence to aggregate, organize and cluster conversations
                  based on semantic connections to create interactive data
                  visualizations for a faster path to insight
                </strong>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                style={{backgroundColor: props.mode === 'dark'?'black':'white' ,
                color:props.mode ==='dark'?'white':'black'}}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Features of TextUtils
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#042743':'white' ,
         color:props.mode ==='dark'?'white':'black'}}>
                <p>
                  TextUtils feature many operations to analyze or change your
                  text as per you want as below
                </p>
                <h5>* Convert to UpperCase.</h5>
                <h5>* Convert to LowerCase.</h5>
                <h5>* You can Copy the text to your clipboard.</h5>
                <h5>* You can clear the whole text in your textbox.</h5>
                <h5>* You can remove extra spaces.</h5>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                style={{
                  backgroundColor: props.mode === "dark" ? "black" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Developed By
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div
                className="accordion-body"
                style={{
                  backgroundColor: props.mode === "dark" ? "#042743" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
              >
                <h6>Naman Rakesh - Web developer</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
