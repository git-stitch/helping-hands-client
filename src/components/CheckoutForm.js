import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { connect } from 'react-redux'
import { sendPaymentToTheBackend } from '../Redux/actions'

class CheckoutForm extends Component {

  state = {
    donation:1
  }

  handleChange = (event) => {
    this.setState({
      donation:event.target.value
    })
  }

  submit = (event) => {
    event.preventDefault()
    this.props.stripe.createToken({name:"Name"}).then(data => {
      if(data.errors){
        alert("Something was wrong with your credentials")
      } else {
        console.log(data);
        let paymentInformation = {
          token: data, 
          amount: this.state.donation, organization_name:this.props.currentOrganization.name
        }
        this.props.sendPayment(paymentInformation,this.props.currentOrganization.id,this.props.currentUser.id)
      }
    })
  }

  render() {
    console.log(this.props, 'in da form');
    return (
      <div className="checkout">
        <div className="content">
          <p className="title is-3">Would you like to complete the purchase?</p>
          <label>Donation Amount: </label>
          <input type="number" placeholder="$$$" min="1" max="10000" value={this.state.donation} onChange={this.handleChange}></input>
        </div>
        <br></br>
        <CardElement />
        <br></br>
        <button className="button is-primary" onClick={this.submit}>Donate</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentOrganization: state.organizationReducer.currentOrganization,
    currentUser:
    state.userReducer.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    sendPayment:(info, organization_id, user_id)=>{
      dispatch(sendPaymentToTheBackend(info, organization_id, user_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(CheckoutForm))