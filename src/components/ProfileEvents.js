import React, { Component } from 'react'
import {connect} from 'react-redux'
import EventItem from './EventItem'

class ProfileEvents extends Component {
  render() {
    return (
      <>  
        {
          this.props.currentUser.events.map((event => {
            return <EventItem event={event} />
          }))
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser
  }
}

export default connect(mapStateToProps)(ProfileEvents)