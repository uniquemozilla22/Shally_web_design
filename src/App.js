
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

const App= ()=> {
  
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}


export default App