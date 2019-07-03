import React, { Component } from 'react'
import Slider from "react-slick";
import { connect } from 'react-redux'
import SliderImage from './SliderImage';

class SimpleSlider extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 3,
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
    }
      console.log(this.props, "in slider")
      const { featured } = this.props
    return (
      <Slider {...settings}>
       {
        featured.map(organization => {
          return <SliderImage organization={organization} key={organization.id} />
        })
       }
      </Slider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    organizations: state.organizationReducer,
    featured: state.organizationReducer.featured
  }
}

export default  connect(mapStateToProps)(SimpleSlider)