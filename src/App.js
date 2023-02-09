
import './App.css';
import React from "react";
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';
import Header from './components/Header';




function App() {
  return (
    <div className="App">
    <Main/>
    <Nav/>
    <Header/>
    <Footer/>
    </div>
  );
}

export default App;
