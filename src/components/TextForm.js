import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase!","success")
    }
    const handleLoClick = ()=>{        
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase!","success")
    }
    const handleClearClick = ()=>{        
        let newText='';
        setText(newText);
        props.showAlert(" Text is cleared","success")
    }

    const handleOnChange = (event)=>{        
        setText(event.target.value);
    }

    const handleCopy = ()=>{        
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to clipboard!","success")
    }

    const handleExtraSpaces = ()=>{        
       let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert(" Extra spaces removed!","success")
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color :props.mode==='dark'?'white':'#042743'}}>         
            <h1>{props.heading}</h1>
            <div className="mb-3">        
            <textarea className="form-control" value={text} style={{backgroundColor :props.mode==='dark'?'grey':'white',color :props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>


        </div>
        <div className="container my-3" style={{color :props.mode==='dark'?'white':'#042743'}}>   
        <h2>Your Text Summary</h2>
        <p><b>{text.split(" ").length}</b> words, <b>{text.length}</b> characters</p> 
        <p>{0.008 * text.split(" ").length} Minutes read </p> 
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox to Preview here"}</p>
        </div>
        </>
    )
}
