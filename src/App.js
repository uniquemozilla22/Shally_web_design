
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'
import Layout from './Layout';
import About from './Pages/About/About';
import Classes from './Pages/Classes/Classes';

const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
        </Routes>
      </Layout>
    </>
  );
}


export default App