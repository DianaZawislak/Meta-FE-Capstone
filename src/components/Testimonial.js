import React from 'react';
import customer_icon from "../images/customer_icon.jpg";
import customer_icon_1 from "../images/customer_icon_1.png";
import customer_icon_2 from "../images/customer_icon_2.png";
import customer_one from "../images/customer_one.jpg";
import customer_two from "../images/customer_two.jpg";
import customer_three from "../images/customer_three.jpg";


const Testimonial = () => {
    return (
<>
<section className="testimonials" id="testimonials">
<div className="container">
        <div className="row" id="testimonial">
        
            <h1 className="section_title">What customers say for us.</h1>

{/* -----------------------------CAROUSEL ITEM-------------------------------- */}
            <div id="testimonial_carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <h3 className="star">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                        </h3>
                        <h2 className="testimonial_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab harum est
                            quibusdam in soluta veritatis, sit placeat, quo ipsum quia
                        </h2>
                        <img className="testimonial_image" src={customer_one} alt="customer_one" />
                        <p>Paul Hermann, Detroit, MI</p>
                </div>

{/* -----------------------------CAROUSEL ITEM-------------------------------- */}
                    <div className="carousel-item">
                    <h3 className="star">
                        &#9733;&#9733;&#9733;&#9733;&#9733;

                        </h3>
                        <h2 className="testimonial_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab harum est
                            quibusdam in soluta veritatis, sit placeat,
                        </h2>
                        <img className="testimonial_image" src={customer_two} alt="customer_two" />
                        <p>Margaret Sayville, New York, NY</p>
                    </div>

{/* -----------------------------CAROUSEL ITEM-------------------------------- */}
                    <div className="carousel-item">
                    <h3 className="star">
                        &#9733;&#9733;&#9733;&#9733;&#9734;

                        </h3>
                        <h2 className="testimonial_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab harum est
                            quibusdam in soluta veritatis, sit placeat,
                        </h2>
                        <img className="testimonial_image" src={customer_three} alt="customer_three" />
                        <p>Rohan Outers, San Fransico, CA</p>
                    </div>


  {/* -----------------------------CAROUSEL ITEM-------------------------------- */}
  <div className="carousel-item">
                    <h3 className="star">
                        &#9733;&#9733;&#9733;&#9733;&#9733;

                        </h3>
                        <h2 className="testimonial_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab harum est
                            quibusdam in soluta veritatis, sit placeat,
                        </h2>
                        <img className="testimonial_image" src={customer_icon_1} alt="customer_two" />
                        <p>Sebastian Nowicki, Chicago, IL</p>
                    </div>

{/* -----------------------------CAROUSEL ITEM-------------------------------- */}
                    <div className="carousel-item">
                    <h3 className="star">
                        &#9733;&#9733;&#9733;&#9733;&#9733;

                        </h3>
                        <h2 className="testimonial_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab harum est
                            quibusdam in soluta veritatis, sit placeat,
                        </h2>
                        <img className="testimonial_image" src={customer_icon} alt="customer_three" />
                        <p>Barry Lazowski, Chicago, IL</p>
                    </div>

 {/* -----------------------------CAROUSEL ITEM-------------------------------- */}
                    <div className="carousel-item">
                    <h3 className="star">
                        &#9733;&#9733;&#9733;&#9733;&#9734;

                        </h3>
                        <h2 className="testimonial_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab harum est
                            quibusdam in soluta veritatis, sit placeat,
                        </h2>
                        <img className="testimonial_image" src={customer_icon_1} alt="customer_two" />
                        <p>Mark Doe, Buffalo, NY</p>
                    </div>

{/* -----------------------------CAROUSEL ITEM-------------------------------- */}
                    <div className="carousel-item">
                    <h3 className="star">
                        &#9733;&#9733;&#9733;&#9734;&#9734;

                        </h3>
                        <h2 className="testimonial_text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis ab harum est
                            quibusdam in soluta veritatis, sit placeat,
                        </h2>
                        <img className="testimonial_image" src={customer_icon_2} alt="customer_three" />
                        <p>Jose Snchez-Ortega, Miami, FL</p>
                    </div>
                    </div>



 {/* -----------------------------CAROUSEL BUTTON-------------------------------- */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#testimonial_carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#testimonial_carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
        </div>
        </section>
</>

    );
};

export default Testimonial;
