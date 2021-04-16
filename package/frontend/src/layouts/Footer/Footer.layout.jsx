import React from 'react';
import './Footer.layout.css';
import "../layout.css"


function FooterLayout(props) {
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


    return (
        <footer className="footer">
            <div className="container">
                <div className="newsletter">
                    <h2>Introduct</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aperiam sed facilis eaque. Exercitationem expedita nam aspernatur quia hic repudiandae illo tempora quos est ipsam voluptas dolorem, distinctio nulla neque.</p>
                   
                </div>
                <div className="instagram">
                    <h2>Our Teams</h2>
                    <div className="flex-row">
                        <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-1/p200x200/166703778_736408793740408_6906991186412240198_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=GpywtlImYjUAX_G4f3A&_nc_ht=scontent-xsp1-2.xx&tp=6&oh=a1ca73372aca311b625037911a1e89f8&oe=609A2DF2" alt="insta1"></img>
                        <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-1/p200x200/166703778_736408793740408_6906991186412240198_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=GpywtlImYjUAX_G4f3A&_nc_ht=scontent-xsp1-2.xx&tp=6&oh=a1ca73372aca311b625037911a1e89f8&oe=609A2DF2" alt="insta2"></img>
                    </div>
                    <div className="flex-row">
                        <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-1/p200x200/166703778_736408793740408_6906991186412240198_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=GpywtlImYjUAX_G4f3A&_nc_ht=scontent-xsp1-2.xx&tp=6&oh=a1ca73372aca311b625037911a1e89f8&oe=609A2DF2" alt="insta4"></img>
                        <img src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-1/p200x200/166703778_736408793740408_6906991186412240198_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=GpywtlImYjUAX_G4f3A&_nc_ht=scontent-xsp1-2.xx&tp=6&oh=a1ca73372aca311b625037911a1e89f8&oe=609A2DF2" alt="insta5"></img>
                    </div>
                </div>
                <div className="follow">
                    <h2>Follow us</h2>
                    <p>Let us be Social</p>
                    <div>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div className="rights flex-row">
                <h4 className="text-gray">
                    <a href="#">AECC Team</a>
                </h4>
            </div>
            <div onClick={() => topFunction()} id="myBtn" >
                <span><i className="fas fa-arrow-circle-up fa-2x"></i></span>
            </div>
        </footer>
    );
}

export default FooterLayout;