import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import SignUp from './components/SignUp';

// eslint-disable-next-line
import { buildQueries } from '@testing-library/react';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={ <About />} />
          <Route path="/menu" element={ <Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
