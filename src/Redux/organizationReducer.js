let initialState = {
  organizations: [],
  featured: [],
  currentOrganization:{},
  organizationImages:{},
  loading: true
}
const organizationReducer = (state= initialState, action) => {
  switch(action.type){
    case "FETCH_ORGANIZATIONS":
      let featuredArr = action.payload.slice(0,8)
      return {...state, organizations:action.payload, featured:featuredArr}
    case "LOADED_ORGANIZATIONS":
      return {...state, loading:false}
    case "SET_CURRENT_ORGANIZATION":
      return {...state, currentOrganization:action.payload, organizationImages:action.payload.organization_images[0]}
    case "FETCH_CURRENT_ORGANIZATION":
      return {...state, currentOrganization:action.payload}
    case "SET_IMAGES":
      return {...state, organizationImages:state.currentOrganization.organization_images}
    case "ATTEND_EVENT":
      return {...state, currentOrganization: action.payload}
    default:
      return state
  }
}

export default organizationReducer
