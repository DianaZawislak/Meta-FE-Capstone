import { NavLink } from 'react-router-dom';
import logo_navbar from '../images/logo_navbar.png';
import logoSmall from '../images/logoSmall.png';

const Navbar = () => {

    return (
      <>
      <div class='container'>
        <nav className='navbar navbar-expand-lg'>
          <NavLink className='navbar-brand navbar-logo m-2' to='/' exact>
            <img className='navbar-image' src={logo_navbar} class="d-md-block d-sm-none d-xs-none" height="100" alt='logo' />
            <img className='navbar-image' src={logoSmall} class="d-md-none d-lg-none d-xl-none" height="100" alt='logo' />
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav mr-auto me-5'>
              <li className='nav-item active'>
                <NavLink className='nav-link fs-5 m-2' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link fs-5 m-2' to='/about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link fs-5 m-2' to='/menu'>
                  Menu
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link fs-5 m-2' to='/reservation'>
                  Reservation
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link fs-5 m-2' to='/login'>
                  Login
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link fs-5 m-2' to='/signup'>
                  SignUp
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        </div>
      </>
    );
};

export default Navbar;
