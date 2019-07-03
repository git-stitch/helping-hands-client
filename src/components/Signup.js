import React, { Component } from 'react'

export default class Signup extends Component {
  state = {
    org_member: false,
  }

  handleClick = () => {
    this.setState({
      org_member: !this.state.org_member
    })
  }

  render() {
    return (
      <div className="section">
        <div className="columns is-centered is-vcentered">
          <div className="box">  
            <div className="column is-four-fifths">
            <div className="field">
              <p className="title is-1 login-title">Signup</p>
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="icon is-small is-right">
                  <i className="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Password" />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="confirm-password" placeholder="Confirm Password" />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field login-button-field">
              <p className="control">
                <button className="button is-primary">
                  Sign Up
                </button>
              </p>
            </div>
            <div className="field">
              <p className="control">
                <button className="button is-primary" onClick={this.handleClick}>
                  {this.state.org_member ? "As User" : "Create Organization"}
                </button>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
