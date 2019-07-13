let initialState = {
  currentUser:{
    events:[]
  },
  email:"",
  password:"",
  confirmPassword:"",
  loggedIn:false,
  complete: false,
  loading:true
}

const userReducer = (state= initialState, action) => {
  switch(action.type){
    case "HANDLE_FORM_CHANGE":
      return {...state, [action.payload.id]:action.payload.value}
    case "LOGIN_USER":
      return {...state, currentUser:action.payload, password:"", loggedIn:true, email: ""}
    case "SIGNUP_USER":
      return {...state, currentUser:action.payload, password:"", loggedIn:true, confirmPassword:"", email: ""}
    case "NO_AUTO_LOGIN":
      localStorage.removeItem("token")
      return {...state,currentUser:{}, email:"", loggedIn:false, password:""}
    case "LOGOUT_USER":
      localStorage.removeItem("token")
      return {currentUser:{}, email:"", password:"", loggedIn:false}
    case "LOADED_USER":
      return {...state, loading:false, password:"", confirmPassword:""}
    case "COMPLETE_DONATION":
      return {...state, complete: true}
    case "SET_CURRENT_USER":
      return {...state, currentUser:action.payload, email:"",password:"", loading:true, confirmPassword:""}
    case "RESET_DONATION":
      return {...state, complete: false}
    default:
      return state
  }
}

export default userReducer