
import './App.css';
import React from "react";
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/Main';
import Header from './components/Header';
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Book from "./components/Book";



function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="book" element={<Book />} />
        </Routes>
    <Main/>
    <Header/>
    <Footer/>
    </div>
  );
}

export default App;
