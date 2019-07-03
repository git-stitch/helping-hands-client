let initialState = {
  currentUser:{},
  email:"",
  password:"",
  loggedIn:false
}

const userReducer = (state= initialState, action) => {
  switch(action.type){
    case "HANDLE_FORM_CHANGE":
      return {...state, [action.payload.type]:action.payload.value}
    case "LOGIN_USER":
      return {...state, currentUser:action.payload, password:"", loggedIn:true}
    case "NO_AUTO_LOGIN":
      return {...state,currentUser:{}, email:"", loggedIn:false}
    case "LOGOUT_USER":
      localStorage.removeItem("token")
      return {currentUser:{}, email:"", password:"", loggedIn:false}
    default:
      return state
  }
}

export default userReducer