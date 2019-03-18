import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Carousel from './component/Carousel';
//import styled from 'styled-components';
//import { PropTypes } from 'react';
//import CarouselPage from './component/CarouselPage';
import SimpleSlider from './component/SimpleSlider';

class Video extends Component {
  render() {
    return (
      <div className="Video">
         <SimpleSlider/>
       </div>
    )
  }
}
export default Video