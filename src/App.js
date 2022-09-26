import React from 'react';
import './App.css';
import MainContent from './components/Main/index';
import {Sidebar} from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <MainContent />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
