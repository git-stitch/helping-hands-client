import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends Component {
  render() {
    // console.log(this.props, "in navbar")
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/">
            <div className="navbar-item">
              <img src="https://www.empatica.com/assets/images/favicons/favicon.png" width="28" height="28" alt=""/>
            </div>
          </Link>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" alt="" href="homer">
              <span aria-hidden="true">1</span>
              <span aria-hidden="true">2</span>
              <span aria-hidden="true">3</span>
            </a>
        </div>
    
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/home">
            <a className="navbar-item" alt="" href="/home">
              Home
            </a>
          </Link>

          <Link to="/causes">
            <a className="navbar-item" href="causes">
              Causes
            </a>
          </Link>
    
          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/">
              <a className="navbar-link">
                More
              </a>
            </Link>
    
            <div className="navbar-dropdown">
              <a className="navbar-item" href="about">
                About
              </a>
              <a className="navbar-item" href="contact">
                Contact
              </a>
              <hr className="navbar-divider" />
              <a className="navbar-item" href="issues">
                Report an issue
              </a>
            </div>
          </div>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            {
              this.props.loggedIn ? 
              <>
                <div className="dropdown is-hoverable">
                  <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                      <span>Details</span>
                      <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div className="dropdown-content">
                        <a href="/profile" className="dropdown-item">Profile</a>
                        <a href="/support" className="dropdown-item">Supporting</a>    
                        <a href="/donations" className="dropdown-item">Donations</a>
                        <a href="/" className="dropdown-item" onClick={this.props.logoutUser}>Logout</a> 
                      </div>
                    </div>
                </div>
              </>
              :
            <div className="buttons">
              <Link to="/signup">
                <a className="button is-primary" href="signup">
                  <strong>Sign up</strong>
                </a>
              </Link>
              <Link to="/login">
                <a className="button is-light" href="login">
                  Log in
                </a>
              </Link>  
            </div>
            }
          </div>
        </div>
      </div>
    </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    loggedIn: state.userReducer.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch({type:"LOGOUT_USER"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
