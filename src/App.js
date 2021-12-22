
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'
import Layout from './Layout';
import About from './Pages/About/About';
import Classes from './Pages/Classes/Classes';
import Teacher from './Pages/Teacher/Teacher';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';

const App = () => {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/teachers" element={<Teacher />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
}


export default App