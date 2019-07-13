import React, { Component } from 'react'
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from '../components/CheckoutForm';
import { connect } from 'react-redux'
 
class DonateContainer extends Component {
  render() {
    console.log(this.props, "props in donate")
    return (
      <div className="container con-color">
        <StripeProvider apiKey="pk_test_lbvfij83Wm8eHLj3SS8tzokc002CbwdPmg">
        <div className="content box">
          <h1>Donate to {this.props.currentOrganization.name}</h1>
          <Elements>
            <CheckoutForm  history={this.props.history}/>
          </Elements>
        </div>
      </StripeProvider>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentOrganization: state.organizationReducer.currentOrganization
  }
}

export default connect(mapStateToProps)(DonateContainer)