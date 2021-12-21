
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'
import Layout from './Layout';
import About from './Pages/About/About';

const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </>
  );
}


export default App