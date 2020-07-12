import React from 'react';
import './App.css';

import {ResultsTable} from "../table/Table"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ResultsTable/>
        </div>
      </header>
    </div>
  );
}

export default App;
