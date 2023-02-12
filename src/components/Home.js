import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import Menu from './Menu';
import Testimonial from './Testimonial';
import restauranfood from '../images/restauranfood.jpg';


const Home = () => {
    return (
      <>
        <section className='home' id='home'>
        <div class="container">
          <div className='row'>
          <div className='col-lg-6 col-sm-12'>
          <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
              Located in the heart of Downtown Chicago at 123 Main Street, Little Lemon's atmosphere and design, which complement and attract a fashion, music and entertainment clientele, takes you off the busy streets and transcends you to the middle of the Mediterranean. 
            </p>
            <NavLink className='btn' to='/reservation'>
              Reserve Table
            </NavLink>
          </div>
             <div className='col-6 d-none d-lg-block' id='restaurant image' >
            <img
                  src={restauranfood}
                  alt='restaurant'
                  height='550px'
                />
              </div>
            </div>
          <div>
        </div>
        </div>
        </section>
        <Menu />
        <Testimonial />
        <About />
      </>
    );
};

export default Home;
