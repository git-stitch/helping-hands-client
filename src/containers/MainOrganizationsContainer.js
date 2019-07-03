import React, { Component } from 'react'
import { connect } from 'react-redux'
import OrganizationCard from '../components/OrganizationCard';

class MainOrganizationsContainer extends Component {
  render() {
    console.log(this.props, "in main container");
    return (
      <div className="container slider-style">
        <p className="title is-1 has-text-centered">Causes</p>
        <div className="columns is-multiline is-vcentered">
          {
            this.props.organizations.map(organization => {
              return <OrganizationCard organization={organization} key={organization.id}/>
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    organizations: state.organizationReducer.organizations
  }
}

export default connect(mapStateToProps)(MainOrganizationsContainer)