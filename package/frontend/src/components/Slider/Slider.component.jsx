import React from 'react';
import "./Slider.component.css"

const SliderComponent = () => {
    return (
        <div>
            <div id="slideshow">
                <div class="slide-wrapper">
                    <div class="slide"><img src="https://images.pexels.com/photos/2382325/pexels-photo-2382325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img></div>
                    <div class="slide"><img src="https://images.pexels.com/photos/3578393/pexels-photo-3578393.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img></div>
                    <div class="slide"><img src="https://images.pexels.com/photos/4484184/pexels-photo-4484184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img></div>
                </div>
            </div>
        </div>
    );
}

export default SliderComponent;