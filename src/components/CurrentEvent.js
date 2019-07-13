import React from 'react'

const CurrentEvent = (props) => {
  return (
    <>
      <p className="title is-2">{props.currentEvent.name}</p>
      <img src={props.currentEvent.img_url} alt="" className="is-square"/>
      <p className="para-color">Date: {props.currentEvent.date}</p>
      <p className="para-color">Description: {props.currentEvent.description}</p>
    </>
  )
}

export default CurrentEvent