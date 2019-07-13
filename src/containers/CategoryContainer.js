import React, { Component } from 'react'
import { connect } from 'react-redux'

class CategoryContainer extends Component {
  render() {
    return (
      <div className="container slider-style con-color">
          <p className="title is-1 has-text-centered">Categories</p>
          <div className="columns is-centered">
            <div className="column is-one-fourth">
              <button className="button is-primary butt-column">All</button>
            </div>
            <div className="column is-one-fourth">
              <button className="button is-primary is-centered butt-column">Location</button>
            </div>
            <div className="column is-one-fourth">
              <button className="button is-primary butt-column">Random</button>
            </div>
            <div className="column is-one-fourth">
              <button className="button is-primary butt-column">FindBy</button>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(CategoryContainer)