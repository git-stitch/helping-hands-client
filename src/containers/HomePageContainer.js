import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchOrganizations} from '../Redux/actions'
import loader from '../images/pacman-loader.svg'
import SliderContainer from './SliderContainer';
import CategoryContainer from './CategoryContainer'
import MainOrganizationsContainer from './MainOrganizationsContainer'
import {resetDonation} from '../Redux/actions'

class HomePageContainer extends Component {
  componentDidMount = () => {
    this.props.fetchOrganizations()
    this.props.resetDonation()
  }

  render() {
    console.log(this.props, "in home ");
    return (
      <div className="section">
      {
        this.props.loading ? 
        <>
          <div className="columns is-centered">
           <div className="column is-half">
             <div className="loader-stuff">
              <img src={loader} alt=""/>
             </div>  
           </div>
          </div>
        </>
        : 
        <div className="container">
          <div className="section">
            <SliderContainer />
          </div>
          <div className="section">
            <CategoryContainer />
          </div>
          <div className="section">
              <MainOrganizationsContainer />
          </div>
        </div>
      }
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    organization: state.organizationReducer,
    loading: state.organizationReducer.loading,
    complete: state.userReducer.complete
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchOrganizations: () => {
      dispatch(fetchOrganizations())
    },
    resetDonation: () => {
      dispatch(resetDonation())
    }
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(HomePageContainer)