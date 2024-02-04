import React, { useState } from 'react'

const Textarea = (props) => {
  const [text, setText] = useState('');

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted To Lower Case!', 'success');
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted To Lower Case!', 'success');
  };

  const handleClearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert('Text Cleared!', 'success');

  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied To ClipBoard!', 'success');

  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra Spaces Removed!', 'success');
  };

  const handleInvertText = () => {
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      let element = text[i];
      if (element.toUpperCase()===element) {
        newText+=element.toLowerCase();
      }else{
        newText+=element.toUpperCase();
      }
    }
    setText(newText);
    props.showAlert('Text Inverted!', 'success');
  };

  const handleReverseText = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert('Text is Reversed!', 'success');
  };

  const handleCapitalized = () => {
    let newText = text.toLowerCase().split(' ').map(newText => {
      return newText.charAt(0).toUpperCase() + newText.slice(1);
    }).join(' ');
    setText(newText);
    props.showAlert('Text is Capitalized!', 'success');
  }
  const handleDownload = () => {
    const fileName = 'downloaded_text.txt';
    const blob = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    props.showAlert('Downloading Start!', 'success');
  }

  const handleSetText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <h3 className='mb-4 text-center'>{props.heading}</h3>
        <label className='heading-label' htmlFor='textBox'>Enter Your Text Here: </label>
        <div className="mb-3">
          <textarea className="form-control" name='textBox' id="textBox" value={text} onChange={handleSetText} rows="8" style={{ background: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>
        </div>
        <button disabled={text.length === 0} onClick={handleLowClick} className="mx-1 my-1 fw-semibold btn btn-outline-primary">Covert To LowerCase</button>
        <button disabled={text.length === 0} onClick={handleUpClick} className="mx-1 my-1 fw-semibold btn btn-outline-secondary">Covert To UpperCase</button>
        <button disabled={text.length === 0} onClick={handleCapitalized} className="mx-1 my-1 fw-semibold btn btn-outline-warning">Covert To Capitalized Case</button>
        <button disabled={text.length === 0} onClick={handleCopyText} className="mx-1 my-1 fw-semibold btn btn-outline-success">Copy Text</button>
        <button disabled={text.length === 0} onClick={handleExtraSpaces} className="mx-1 my-1 fw-semibold btn btn-outline-danger">Remove Extra Spaces</button>
        <button disabled={text.length === 0} onClick={handleDownload} className="mx-1 my-1 fw-semibold btn btn-outline-info">Download Document</button>
        <button disabled={text.length === 0} onClick={handleReverseText} className="mx-1 my-1 fw-semibold btn btn-outline-success">Reverse Text</button>
        <button disabled={text.length === 0} onClick={handleInvertText} className="mx-1 my-1 fw-semibold btn btn-outline-warning">Invert Text</button>
        <button disabled={text.length === 0} onClick={handleClearText} className="mx-1 my-1 fw-semibold btn btn-outline-primary">Clear Area</button>
        <div className="d-flex justify-content-between align-items-center my-3 count">
          <h4 className='me-5'>Word Counter : <span>{text.split(/\s+/).filter((e) => { return e.length !== 0 }).length}</span> <span>Words</span> , <span>{text.length}</span> <span>Characters</span></h4>
          <h4>Time To Read : <span>{0.008 * text.split(/\s+/).filter((e) => { return e.length !== 0 }).length}</span> <span>Minutes</span></h4>
        </div>
        <div>
          <h4>Preview Text</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  )
}

export default Textarea;
