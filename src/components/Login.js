import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchToBackendLoginInformation} from '../Redux/actions'

class Login extends Component {
  state = {
    org_member: false,
  }

  handleClick = () => {
    this.setState({
      org_member: !this.state.org_member
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.loginUserRedux(event, this.props, this.props.history)
  }

  render() {
    console.log("da props", this.props)
    return (
      <div className="section">
        <div className="columns is-centered is-vcentered">
          <div className="box">  
            <div className="column is-four-fifths">
              <form onSubmit={(event)=>this.handleSubmit(event)}>
              <div className="field">
                <p className="title is-1 login-title">Login</p>
                <p className="control has-icons-left has-icons-right">
                  <input className="input" type="email" placeholder="Email" onChange={(e)=> this.props.handleReduxFormChange(e.target,this.state.org_member)}/>
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
                  <input className="input" type="password" placeholder="Password" onChange={(e)=> this.props.handleReduxFormChange(e.target,this.state.org_member)}/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field login-button-field">
                <p className="control">
                  <button className="button is-primary">
                    Login
                  </button>
                </p>
              </div>
            </form>
            <br></br>
            <div className="field">
              <p className="control">
                <button className="button is-primary" onClick={this.handleClick}>
                  {this.state.org_member ? "As User" : "As Organization Member"}
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

const mapStateToProps = (state) => {
  console.log(state.userReducer,"in login")
  return {
    email: state.userReducer.email,
    password: state.userReducer.password
  }
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    handleReduxFormChange: (event) => {
      dispatch({type:"HANDLE_FORM_CHANGE", payload: event})
    },
    loginUserRedux: (event, login,history) => dispatch(fetchToBackendLoginInformation(login,history))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)