import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeroComponent from '../components/HeroComponent';

class WelcomeContainer extends Component {
  render() {
    return (
      <section class="hero welcome-background is-large">
        <HeroComponent />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default  connect(mapStateToProps)(WelcomeContainer)
