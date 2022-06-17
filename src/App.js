import { useState } from 'react';
import Canvas from './QRCode'
import './App.css';

function App() {

  const [text, setText] = useState("")
  return (
    <div className="App">
      <h1>Gerador de QR Code</h1>
      <input onChange={(element) => {setText(element.target.value)}} value={text} placeholder="Insira aqui a URL"></input>
      <Canvas text={text}></Canvas>  
    </div>
  );
}

export default App;
