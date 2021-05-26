import React from 'react';
import './contact.style.css';

function ContactPage(props) {
    return (
        <>
        <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>ABOUT US</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">ABOUT US</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
        <div className="contact-box-main">
            
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div className="contact-info-left">
                        <h2>CONTACT INFO</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                        <ul>
                            <li>
                                <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 Preston Street Wichita, KS 67213 </p>
                            </li>
                            <li>
                                <p><i className="fas fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                            </li>
                            <li>
                                <p><i className="fas fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <div className="contact-form-right">
                        <h2>GET IN TOUCH</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
                        <form id="contactForm">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" ></input>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" placeholder="Your Email" id="email" className="form-control" name="name" ></input>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="subject" name="name" placeholder="Subject"></input>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control" id="message" placeholder="Your Message" rows="4" ></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="  text-center">
                                        <button className="btn hvr-hover" id="submit" type="submit">Send Message</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default ContactPage;