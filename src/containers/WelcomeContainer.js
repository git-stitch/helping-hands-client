import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeroComponent from '../components/HeroComponent';
import WhoComponent from '../components/WhoComponent';

class WelcomeContainer extends Component {
  render() {
    return (
      <div className="container">
        <section className="hero welcome-background is-large">
          <HeroComponent />
        </section>
        <div className="hero is-medium is-primary">
          <WhoComponent />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default  connect(mapStateToProps)(WelcomeContainer)
