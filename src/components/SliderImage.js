import React from 'react'

const SliderImage = (props) =>{
  console.log(props, "props in images");
  return (
    <>
      <div className="image is-square">
        <a href={props.organization.homepage_url}><img src={props.organization.logo_url} alt="" className="slider-image"/></a>
      </div>
      <p className="subtitle has-text-centered">{props.organization.name}</p>
    </>
  )
}

export default SliderImage