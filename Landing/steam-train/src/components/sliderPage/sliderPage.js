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
    // console.log(content[1].img)
    
   

    const image = content[1].img.map((img, i) =><div key={i}><img src={img} alt=""/></div>)
    // const lorem = content[2].names.map((name)=><h2>{name}</h2> )
    return (
    <div  id='slider'>
      <div className='slides'>
      <Slider {...settings}>
        {image}
        {/* {lorem} */}
      </Slider>
      </div>
    </div>
    );
  }
}

export default SliderPage