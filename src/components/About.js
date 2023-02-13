import React from 'react';

import MarioAdrianA from "../images/MarioAdrianA.jpg";
import MarioAdrianB from "../images/MarioAdrianB.jpg";


const About = () => {
    return (
        <>
            <section className="about-section" id="about">
                <div className="container">
                <div className="row">

                    <div className="col-lg-6 about-details">
                        <h3>Little Lemon</h3>
                        <h4>Chicago</h4>
                        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails 
                            in a lively but casual environment. The restaurant features a locally sourced
                            menu with daily specials.
                        </p>
                        <p>
                            Little Lemon started out of a family tradition of passion for Greek
                            cuisine and its place in the rich culinary tradition of the Mediterranean.
                        </p>
                        <p>
                            The company story can be traced back to Athens, Greece more than a
                            century ago. There, our great-grandparents started what would become a
                            long line of family bakeries that prepared
                            traditional baked goods that not
                            only sustained the local community, but became part of it.
                        </p>
                    </div>
                    <div className="col-lg-6 about-images">
                        <img  className="about-image one" src={MarioAdrianA} alt="about one" />
                        <img  className="about-image two" src={MarioAdrianB} alt="about two" />
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default About;