import React, { Component } from 'react'
import SimpleSlider from '../components/SimpleSlider';

class SliderContainer extends Component {
  render() {
    return (
      <div className="section slider-style has-text-centered">
        <p className="title is-1">Featured Causes</p>
        <SimpleSlider />
      </div>
    )
  }
}

export default  SliderContainer