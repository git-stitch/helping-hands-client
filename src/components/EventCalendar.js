import React, { Component } from 'react'
import Calendar from 'react-calendar';
import {connect} from 'react-redux'
import {showCurrentEvent} from '../Redux/actions'

class EventCalendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })
  onClickDay = (value) => {
      this.props.showCurrentEvent(value)
  }

  tileContent = ({ date, view }) =>{ 
    console.log(date.toString().split(" ")[2], "looking for you date")
    let index = parseInt(date.toString().split(" ")[2])
    if(this.props.currentUser.events[index]){
      return <p onClick={()=>this.onClickDay(this.props.currentUser.events[index])}>Event</p>
    } 
  }

  render() {
    console.log(this.props, "in event calendar");
  return (
      <div>
           <Calendar
          onChange={this.onChange}
          value={this.state.date}
          tileContent={this.tileContent}
        />
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
    showCurrentEvent: (event) => {
      dispatch(showCurrentEvent(event))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCalendar)