import React, { useState } from 'react';
import Canvas from './QRCode'
import Header from './Header';
import './App.css';

function App() {

  function Download() {
    var link = document.createElement('a');
    link.download = 'qrcode.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
  }

  const [text, setText] = useState("")
  return (
    <div>
      <Header />
      <div className="App">
        <input onChange={(element) => {setText(element.target.value)}} value={text} placeholder="Insira aqui a URL"></input>
        <Canvas text={text} id="canvas"></Canvas>  
        <button onClick={Download}>Download</button>
      </div>
    </div>
  );
}

export default App;
