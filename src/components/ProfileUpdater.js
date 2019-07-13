import React, { Component } from 'react'
import {connect} from 'react-redux'
import {updateCurrentUser} from'../Redux/actions'
import swal from 'sweetalert';

class ProfileUpdater extends Component {

  handleSubmit = (event) => {
    if(event.target.id === "update_email"){
      let userData  = {
        email: this.props.email
      }
      this.props.updateCurrentUser( this.props.currentUser.id, userData)
    } else {
      if(this.props.password !== this.props.confirmPassword){
        return swal("Passwords Must Match Fam")
      }
      let userData  = {
        password: this.props.password
      }
      this.props.updateCurrentUser(this.props.currentUser.id,userData)
    }
    
  }

  render() {
    console.log(this.props, "in form");
    return (
      <>
        <form onSubmit={(event)=>this.handleSubmit(event)} id="update_email">
        <div className="field">
          <label class="label">Current Email: {this.props.currentUser.email}</label>
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="New Email" id="email" value={this.props.email} onChange={(e)=> this.props.handleReduxFormChange(e.target)}/>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field login-button-field">
          <p className="control">
            <button className="button is-primary">
              Update Email
            </button>
          </p>
        </div>
        </form>
        <form onSubmit={(event)=>this.handleSubmit(event)} id="update_password">
        <div className="field">
        <label class="label">Update Password</label>
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="New Password" id="password"onChange={(e)=> this.props.handleReduxFormChange(e.target)}/>
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Confirm Password" id="confirmPassword" onChange={(e)=> this.props.handleReduxFormChange(e.target)}/>
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field login-button-field">
          <p className="control">
            <button className="button is-primary">
              Update Password
            </button>
          </p>
        </div>
      </form>
    </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    email: state.userReducer.email,
    password: state.userReducer.password,
    confirmPassword: state.userReducer.confirmPassword
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleReduxFormChange: (event) => {
      dispatch({type:"HANDLE_FORM_CHANGE", payload: event})
    },
    updateCurrentUser: (userId, user) => {
      dispatch(updateCurrentUser(userId, user))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileUpdater)