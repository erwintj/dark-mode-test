import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo style={{ height: '300px', width: '300px', fill: 'var(--special-text-color)' }} />
        <p>
          Testing inheriting dark mode from MacOS on web using webkit support.
        </p>
      </header>
    </div>
  );
}

export default App;
