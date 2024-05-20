import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [Peso, setPeso] = useState('');
  const [Altura, setAltura] = useState('');

  let IMC = Peso / Altura**2; 
  
  return (
    <div className="App">
      <header className="App-header">
        <label>Introduzca su peso</label>
        <input type='number' value={Peso} onChange = {event => setPeso(event.target.value)}/>
        
        <label>Introduzca su altura </label>
        <input type='number' value={Altura} onChange={ event => setAltura(event.target.value)}/>
        
        <p>Texto ingresado: { IMC } </p>
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;