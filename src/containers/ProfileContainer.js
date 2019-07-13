import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProfileUpdater from '../components/ProfileUpdater'
import {fetchCurrentUser, displayAllEvents} from '../Redux/actions'
import loader from '../images/pacman-loader.svg'
import SupportingList from '../components/SupportingList'
import EventCalendar from '../components/EventCalendar';
import ProfileEvents from '../components/ProfileEvents';
import CurrentEvent from '../components/CurrentEvent';


class ProfileContainer extends Component {
  componentDidMount = () => {
      const split_path = this.props.location.pathname.split("/")
      let id = split_path[split_path.length-1]
      this.props.fetchCurrentUser(id)
  }
  render() {
    console.log(this.props, "in profile container");
    return (
      <div className="section">
       { 
         this.props.loading ? 
         <>
           <div className="columns is-centered">
            <div className="column is-half">
              <div className="loader-stuff">
               <img src={loader} alt=""/>
              </div>  
            </div>
           </div>
         </>
         :
        <div className="container box">
          <div className="box">
          <nav class="level is-mobile">
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Supporting</p>
                <p class="title">{this.props.currentUser.organizations === undefined ? "" : this.props.currentUser.organizations.length}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Donations</p>
                <p class="title">{this.props.currentUser.events === undefined ? "" : this.props.currentUser.events.length}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Attending</p>
                <p class="title">{this.props.currentUser.events === undefined ? "" : this.props.currentUser.events.length}</p>
              </div>
            </div>
            <div class="level-item has-text-centered">
              <div>
                <p class="heading">Medals</p>
                <p class="title">789</p>
              </div>
            </div>
          </nav>
          </div>`
          <div className="box">
          <div className="content">
            <p className="title is-1">Welcome {this.props.currentUser.email}</p>
          </div>
          </div>
          
          <div className="columns is-vcentered">
           <div className="column is-half">
            <div className="box">
              <div className="content">
                <p className="subtitle is-3">Update Profile Information</p>
                <ProfileUpdater />
              </div>
            </div>
          </div> 
            <div className="column is-half">
            <div className="box">
              <div className="content">
                <p className="title is-2">Causes You Support</p>
              {
                this.props.currentUser.organizations === undefined ? 
                null
                :
                    this.props.currentUser.organizations.map(organization => {
                      return <SupportingList organization={organization} />
                    })
              }
              </div>
            </div>
            </div>
          </div>
          <div className="columns is-vcentered">
            <div className="column is-half">
              <div className="box">
                <p className="title is-2">Calendar</p>
                <button className="button is-primary is-pulled-right" onClick={this.props.displayAllEvents}>
                  All Events
                </button>
              <EventCalendar />
              </div>
            </div>
            <div className="column is-half">
              <div className="box">
                <div className="content">
                  {
                    this.props.displayEvent ?
                    <CurrentEvent currentEvent={this.props.currentEvent}/>
                    :
                    <>
                    <p className="title is-2">Upcoming Events:</p>
                    <ProfileEvents />
                    </>
                  }
                </div>
              </div>
            </div>
          </div>  
        </div>
      }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    loading: state.userReducer.loading,
    currentEvent: state.organizationReducer.currentEvent,
    displayEvent: state.organizationReducer.displayEvent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUser: (userId, history) => {
      dispatch(fetchCurrentUser(userId))
    },
    displayAllEvents: () => {
      dispatch(displayAllEvents())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)