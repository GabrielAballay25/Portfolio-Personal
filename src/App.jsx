import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
