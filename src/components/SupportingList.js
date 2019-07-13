import React from 'react'
import { Link } from 'react-router-dom'
import { setCurrentOrganization } from '../Redux/actions';
import { connect } from 'react-redux'

const SupportingList = (props) => {
  console.log(props, "props in support list")
  return (
    <Link to={`/organization/${props.organization.id}`}>
      <p>{props.organization.name}</p>
    </Link>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentOrganization: (org)=>{
      dispatch(setCurrentOrganization(org))
    }
  }
}

export default connect(null,mapDispatchToProps)(SupportingList)