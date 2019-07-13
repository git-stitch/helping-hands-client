import React from 'react'
import {Link} from 'react-router-dom'

const SliderImage = (props) =>{
  console.log(props, "props in images");
  return (
    <>
      <div className="image is-square">
      <Link to={`/organization/${props.organization.id}`}>
        <img src={props.organization.logo_url} alt="" className="slider-image"/>
      </Link>
      </div>
      <p className="subtitle has-text-centered">{props.organization.name}</p>
    </>
  )
}

export default SliderImage