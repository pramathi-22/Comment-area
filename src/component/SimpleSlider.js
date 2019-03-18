import React from "react";
import Slider from "react-slick";
import Carousel from "./Carousel";
import CarouselPage from "./CarouselPage";

class SimpleSlider extends React.Component {
    render() {
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
        
        return (
          <div>
            <h2> Multiple items </h2>
           <div className="slider">
            <Slider {...settings}>
              <div>
              <iframe width="" height="200"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>       
              </div>
              <div>
              <iframe width="300" height="200"
                  src="https://www.youtube.com/embed/5jT_BNIiasA">
              </iframe>
              </div>
              <div>
              <iframe width="300" height="200" 
                   src="https://www.youtube.com/embed/NUQkajBdnmQ">
              </iframe>
              </div>
              <div>
              <iframe width="300" height="200"
                 src="https://www.youtube.com/embed/rH1RTwaAeGc">
              </iframe>
              </div>
              <div>
              <iframe width="300" height="200" 
                 src="https://www.youtube.com/embed/hdroCjAuTzg">
              </iframe>
              </div>
              <div>
              <iframe width="300" height="200" 
                 src="https://www.youtube.com/embed/Fz0jaApePCk">
              </iframe>
              </div>
            </Slider>
            </div>
          </div>
        );
      }
    }
export default SimpleSlider;