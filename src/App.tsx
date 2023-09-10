import React from 'react';
import logo from './logo.svg';
import './App.css';

import AppContent from './components/AppContent';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
        <Header logoSrc={logo} />
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <AppContent />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
