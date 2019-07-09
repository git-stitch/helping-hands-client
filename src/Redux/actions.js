////////////////////////////////////////////////////////////
//Fetch Organization Information
////////////////////////////////////////////////////////////

export const fetchOrganizations = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/organizations")
    .then(res => res.json())
    .then(organizations => {
      console.log("organizations", organizations)
      dispatch(saveOrganizationsToState(organizations))
    })
    .then(()=>{
      dispatch({type:"LOADED_ORGANIZATIONS"})
    })
  }
}

export const saveOrganizationsToState = (organizations) => {
  return {type: "FETCH_ORGANIZATIONS", payload: organizations}
}

////////////////////////////////////////////////////////////
//Fetch User Login Information
////////////////////////////////////////////////////////////
export const fetchToBackendLoginInformation = (loginInformation, history) => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/login", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user:{
          email:loginInformation.email,
          password:loginInformation.password
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data,"data in fetch")
      if(data.errors){
        alert(data.errors)
      } else {
        localStorage.setItem("token", data.token)
        history.push("/home")
        dispatch({type:"LOGIN_USER", payload:data.user})
      }
    })
  }
}

export const autoLoginCurrentUser = () => {
  const token = localStorage.token
  if(token){
    return (dispatch) => {
      fetch("http://localhost:3000/api/v1/auto_login", {
        method:"GET",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json",
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(data => {
        if(data.errors){
          localStorage.removeItem("token")
          alert(data.errors)
          dispatch({type:"NO_AUTO_LOGIN"})
        }
        console.log(data, "in auto login")
        dispatch({type:"LOGIN_USER", payload:data})
      })
    }
  } else {
    console.log("in else")
    return (dispatch) => dispatch({type:"NO_AUTO_LOGIN"})
  }
}

export const setCurrentOrganization = (org) => {
  return (dispatch) => dispatch({type:"SET_CURRENT_ORGANIZATION", payload:org})
}

export const fetchSingleOrganization = (id,history) => {
  return (dispatch) => {fetch(`http://localhost:3000/api/v1/organizations/${id}`)
  .then(res => res.json())
  .then(organization => {
    if(organization.errors){
      alert(organization.errors)
      history.push("/home")
    } else{
      dispatch({type:"FETCH_CURRENT_ORGANIZATION", payload: organization})
    }
  })
}
}

export const setImages = () => {
  return (dispatch) => {
    dispatch({type:"SET_IMAGES"})
  }
}

export const attendEvent = (userId, eventId) => {
  const token = localStorage.token
  return (dispatch) => {
    if(token){
    fetch("http://localhost:3000/api/v1/attendees", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({
        attendee:{
          user_id:userId,
          event_id:eventId
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.errors){
        alert(data.errors)
      } else {
        dispatch({type:"ATTEND_EVENT",payload:data})
      }
    })
  }
  }
}

export const sendPaymentToTheBackend = (info, organization_id, user_id) => {
  const token = localStorage.token

  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/donate", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body:JSON.stringify({
        user:{
          id:user_id,
          organization_id: organization_id,
          token_id: info.token.token.id,
          amount: info.amount,
          organization_name: info.organization_name
        }
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data, "donattion returned successfully")
      // dispatch({type:"DOSOMETHTING"})
    })
  }
}

