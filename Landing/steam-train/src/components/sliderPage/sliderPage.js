import React from "react";
import Slider from "react-slick";
import content from '../content/content'


class SliderPage extends React.Component {
  render() {
    var settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed:2000,
      slickNext: true
    };
    
   

    const image = content[1].img.map((img, i) =><div key={i}><img src={img} alt=""/></div>)
    return (
    <div  id='slider'>
      <div className='slides'>
      <Slider {...settings}>
        {image}
      </Slider>
      </div>
    </div>
    );
  }
}

export default SliderPage