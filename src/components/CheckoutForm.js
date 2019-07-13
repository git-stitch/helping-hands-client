import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import { connect } from 'react-redux'
import { sendPaymentToTheBackend } from '../Redux/actions'
import { Redirect} from 'react-router-dom'
import swal from 'sweetalert';


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
        swal("Something was wrong with your credentials")
      } else {
        console.log(data);
        let paymentInformation = {
          token: data, 
          amount: this.state.donation, organization_name:this.props.currentOrganization.name
        }
        let status = this.props.sendPayment(paymentInformation,this.props.currentOrganization.id,this.props.currentUser.id)
        
        return status
      }
    })
  }

  completeDonation = () => {
    swal({
      title: "Thank You!",
      text: "Your Donation Was Successful.",
      icon: "success",
      button: "Continue",
    }).then(()=>{
      this.props.history.push("/home")
    })
  }

  render() {
    console.log(this.props, 'in da form');
    return (
      <>
      {   
          this.props.complete ? 
          this.completeDonation()
          :
           null
        }
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
    </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentOrganization: state.organizationReducer.currentOrganization,
    currentUser:
    state.userReducer.currentUser,
    complete: state.userReducer.complete
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