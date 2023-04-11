import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Project />
      <Project />
      <Project />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
