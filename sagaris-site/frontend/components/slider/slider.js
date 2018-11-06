import React, { Component } from "react";
import Slider from "react-slick/lib/slider";
import {SliderWrapperSC, SliderSircleElementSC} from '../../lib/styledComponents'

export default class SliderHOC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const {content, settings, area, sliderBackgrounds, backSliderSettings, cName} = this.props
    return (
      <SliderWrapperSC area={area}>
        <SliderSircleElementSC />
        <Slider 
              className={`slider ${cName?cName: ''}`} 
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
              {...settings}>
            {content}
        </Slider>
        {sliderBackgrounds ? <Slider 
          className='backgroundSlider'
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          {...backSliderSettings}
        >
          {sliderBackgrounds}
        </Slider> : null}
      </SliderWrapperSC>
    );
  }
}