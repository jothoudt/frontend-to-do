import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';
import './App.css'

function App(){
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="content-container">
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

