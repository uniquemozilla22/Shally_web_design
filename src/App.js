
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'
import Layout from './Layout';

const App= ()=> {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Layout>
    </>
  );
}


export default App