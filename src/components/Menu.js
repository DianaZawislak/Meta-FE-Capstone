// import { Button } from 'bootstrap';
import React from 'react';
import { NavLink } from 'react-router-dom';
import greeksalad from "../images/greeksalad.jpg";
import basket from "../images/basket .svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import lemondessert from "../images/lemondessert.jpg";
import bruschetta from "../images/bruschetta.jpg";


const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className='container mt-5'>
          <div className='row'>
            <div className='col-lg-9 mt-5'>
              <h1>This Week's Specials</h1>
            </div>
            <div className='col-lg-3 mt-5'>
              <NavLink className='btn' to='/reservation'>
                Order Online
              </NavLink>
            </div>
          </div>

          <div className='row g-3 mt-4'>

{/* *****************************CARD START **************************/}
            <div className='col-md-4 col-sm-12 d-flex'>
              <div className='card'>
                <img className='card-img-top' src={greeksalad} height='300px' alt='greek salad' />
                <div className='card-body'>
                  <h5 className='card-title'>Greek Salad   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: '#EE9972' }}>$12.99</span></h5>
                  <p className='card-text'>The famous Greek salad of crispy lettuce, peppers,
                    olives and our Chicago style feta cheese, garnished
                    with crunchy garlic and rosemary croutons.</p>
                </div>
                <div className='card-footer align-bottom'>
                  <button type="button" class="btn">Add to Cart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={basket} alt='basket'></img></button>
                </div>
              </div>
            </div>
{/* ************************   CARD END****************************** */}

{/* *****************************CARD START **************************/}
<div className='col-md-4 col-sm-12 d-flex'>
              <div className='card'>
                <img className='card-img-top' src={bruschetta} height='300px' alt='bruschetta' />
                <div className='card-body'>
                  <h5 className='card-title'>Bruschetta  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: '#EE9972' }}>$8.99</span></h5>
                  <p className='card-text'>Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
                </div>
                <div className='card-footer'>
                  <button type="button" class="btn">Add to Cart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={basket} alt='basket'></img></button>
                </div>
              </div>
            </div>
{/* ************************   CARD END****************************** */}

{/* *****************************CARD START **************************/}
<div className='col-md-4 col-sm-12 d-flex'>
              <div className='card'>
                <img className='card-img-top' src={lemondessert}  height='300px' alt='lemon dessert' />
                <div className='card-body'>
                  <h5 className='card-title'>Lemon Dessert  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: '#EE9972' }}>$5.99</span></h5>
                  <p className='card-text'>This comes straight from grandma’s recipe book, every last ingredient has 
                  been sourced and is as authentic as can be imagined.</p>
                </div>
                <div className='card-footer align-bottom'>
                  <button type="button" class="btn btn-block">Add to Cart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src={basket} alt='basket'></img></button>
                </div>
              </div>
            </div>
{/* ************************   CARD END****************************** */}



          </div>
        </div>
      </section>

    </>
  );
};

export default Menu;