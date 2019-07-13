import React from 'react';
import './App.sass';
import NavBar from './components/NavBar'
import {connect} from 'react-redux'
import Login from './components/Login'
import Signup from './components/Signup'
import HomePageContainer from './containers/HomePageContainer'

import { Route, Switch, Redirect} from 'react-router-dom'
import { autoLoginCurrentUser } from './Redux/actions';
import WelcomeContainer from './containers/WelcomeContainer';
import ShowContainer from './containers/ShowContainer';
import DonateContainer from './containers/DonateContainer';
import ProfileContainer from './containers/ProfileContainer';

class App extends React.Component {
  componentDidMount = () => {
    this.props.autoLogin()
  }
  
  render() {
    console.log(this.props.loggedIn, "state in app")
    return(
      <div className="container is-fluid" >
        <NavBar currentUser={this.props.currentUser}/>
        <Switch>
          <Route path="/login"render={(routerProps) =>
            {
              return <Login {...routerProps}/>
            }}/>
          <Route path="/profile"render={(routerProps) =>
            {
              return <ProfileContainer {...routerProps} currentUser={this.props.currentUser}/>
            }}/>
            {
            <Route path="/donate"render={(routerProps) =>
          {
            return <DonateContainer {...routerProps}/>
          }}/>}
          <Route path={`/organization/`} render={(routerProps)=>
          {
            return <ShowContainer {...routerProps}/>
            }}/>
          <Route path="/signup"render={(routerProps) =>
            {
              return <Signup {...routerProps}/>
            }}/>
            <Route path="/home" render={(routerProps)=>{
              return <HomePageContainer {...routerProps}/>
            }}/>

            { this.props.loggedIn ? 
               <Route path="/home" render={(routerProps)=>{
                return <HomePageContainer {...routerProps}/>
              }}/>
              :
              <Route path="/welcome" render={() =>
              {
                return <WelcomeContainer />
              }}/>
            }
            <Route render={()=> {
              return this.props.loggedIn ?  <Redirect to="/home"/> :<Redirect to="/welcome"/>
            }}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  
  return {
    currentUser: state.userReducer.currentUser,
    loggedIn: state.userReducer.loggedIn,
    organization: state.organizationReducer
  }
}

const mapDispatchToProps = (dispatch) => {

    return {
      autoLogin: (history) => {
        dispatch(autoLoginCurrentUser(history))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
