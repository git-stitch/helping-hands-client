import React from 'react'
import {Link} from 'react-router-dom'

const EventItem = (props) => {
  console.log(props, "in event item")
  return (
    <Link to={`/organization/${props.event.organization_id}`}>
      <p>{props.event.name}</p>
    </Link>
  )
}

export default EventItem