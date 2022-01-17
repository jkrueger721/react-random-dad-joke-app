import React from 'react';
import './App.css';
import Joke from './Componates/Joke';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to random Dad joke generator</h1>
        <Joke></Joke>
      </header>
    </div>
  );
}

export default App;
