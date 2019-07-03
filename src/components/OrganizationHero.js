import React from 'react'
import { connect } from 'react-redux'

class OrganizationHero extends React.Component {
    render() {
    console.log(this.props, "in hero ")
    const { organization } = this.props
    return (<div className="hero is-medium org-hero is-bold">
      <div class="hero-body">
        <div class="container box welcome-box">
          <h1 class="title is-1">
            {organization.name}
          </h1>
          <h2 class="subtitle is-2">
            {organization.mission_statement}
          </h2>
        </div>
      </div>
      </div>
    )
  }
}

const mapStateToProps =(state) => {
  return {
    currentOrganization: state.organizationReducer.currentOrganization
  }
}

export default connect(mapStateToProps)(OrganizationHero)