import React from 'react';
import { HashRouter } from 'react-router-dom';
import Screens from './screens';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Screens />
      </HashRouter>
    </div>
  );
}

export default App;
