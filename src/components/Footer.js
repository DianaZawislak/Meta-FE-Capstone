import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

import logofoot from "../images/logofoot.png";


export default function App() {
  return (

    <MDBFooter className='footer'>
      <MDBContainer className='p-1'>
        <section className='socials'>

          <MDBBtn floating className='m-3' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn floating className='m-3' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn  floating className='m-3' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn  floating className='m-3' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

        </section>

        <section className='flinks'>
          <MDBRow>
          <MDBCol lg='3'  className='flogo'>
              <img src={logofoot} alt='logo' height='130px'></img>
            </MDBCol>

            <MDBCol md='12' lg='3' xl='3' className='flinks'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled'>
                
                <li>
                  <a href='#!' className='footlink'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#!' className='footlink'>
                    Menu
                  </a>
                </li>
                <li>
                  <a href='#!' className='footlink'i>
                    About
                  </a>
                </li>
               
              </ul>
            </MDBCol>

            <MDBCol md='12' lg='3' xl='3'  className='flinks'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled'>
                
                <li>
                  <a href='#!' className='footlink'>
                    Reserve a Table
                  </a>
                </li>
                <li>
                  <a href='#!' className='footlink'>
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href='#!' className='footlink'i>
                    Login
                    </a>
                </li>
             
              </ul>
            </MDBCol>

        

            <MDBCol md='12' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h5 className='text-uppercase'>Contact</h5>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-3' />
                Chicago, IL 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: Little Lemon
        
      </div>
    
    </MDBFooter>
  );
}