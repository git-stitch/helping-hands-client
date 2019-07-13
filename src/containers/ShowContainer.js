import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrganizationHero from '../components/OrganizationHero';
import {fetchSingleOrganization} from '../Redux/actions'
import OrganizationTiles from '../components/OrganizationTiles'

class ShowContainer extends Component {
  componentDidMount = () => {
    console.log("in da mount")
    if(this.props.currentOrganization.id){
      return null
    } else {
      const split_path = this.props.location.pathname.split("/")
      let id = split_path[split_path.length-1]
      console.log(id,"in da mount in else")
      this.props.fetchOrganization(id, this.props.history)
    }
  }

  render() {
    console.log(this.props, "props in show container")
    return (
      <div className="section">
        <div className="container slider-style con-color">
          <OrganizationHero  organization={this.props.currentOrganization}/>
          <OrganizationTiles history={this.props.history}organization={this.props.currentOrganization}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    currentOrganization: state.organizationReducer.currentOrganization
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrganization: (id, history) => {
      dispatch(fetchSingleOrganization(id, history))
    }
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ShowContainer)
