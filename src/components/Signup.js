import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signUpUser} from '../Redux/actions'
import swal from 'sweetalert'

class Signup extends Component {
  state = {
    org_member: false,
    email: "",
    password: "",
    confirmPassword:""
  }

  handleChange = (event) => {
    console.log("hello")
    this.setState({
      [event.target.id]:event.target.value
    })
  }

  handleClick = () => {
    this.setState({
      org_member: !this.state.org_member
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.password !== this.state.confirmPassword){
      return swal("Passwords must match fam.")
    } else {
      let user = {
        email: this.state.email,
        password: this.state.password
      }
      this.props.signUpUser(user, this.props.history)
    }
    }

  render() {
    console.log(this.props.history, "state in signup");
    return (
      <div className="section">
        <div className="columns is-centered is-vcentered">
          <div className="box">  
            <div className="column is-four-fifths">
            <form onSubmit={this.handleSubmit}>
            <div className="field">
              <p className="title is-1 login-title">Signup</p>
              <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Email" id="email" value={this.state.email}onChange={this.handleChange}/>
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
                <input className="input" type="password" placeholder="Password" id="password" value={this.state.passwordl} onChange={this.handleChange}/>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Confirm Password" id="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}/>
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
            </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (user, history) => {
      dispatch(signUpUser(user, history))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)