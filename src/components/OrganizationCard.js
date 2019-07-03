import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setCurrentOrganization } from '../Redux/actions';

class OrganizationCard extends Component {
  render() {
    console.log(this.props, "props in organization card");
    return (
      <div className="column is-one-fifth">
        <div className="card">
          <div className="card-image">
            <figure className="image is-square">
              <img src={this.props.organization.logo_url} alt="logo" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{this.props.organization.name}</p>
              </div>
            </div>

              <div className="content">
              {this.props.organization.mission_statement}
                <br/>
              </div>
            </div>
            <footer class="card-footer">
              <Link to={`/organization/${this.props.organization.id}`} onClick={()=> this.props.setCurrentOrganization(this.props.organization)}>
                <a href="/organization" className="card-footer-item" >View</a>
              </Link>
              <a href="/home" className="card-footer-item">Quick Donate</a>
            </footer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentOrganization: state.organizationReducer.currentOrganization
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentOrganization: (org)=>{
      dispatch(setCurrentOrganization(org))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationCard)