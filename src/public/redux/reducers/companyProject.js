const initialState = {
    card: [],
    isLoading: false,
    isError: false,
    projects: [],
  }
  
  const companyProject = (state=initialState, action) => {
    switch(action.type){
        case "COMPANY_PROJECT":
          console.log(action.payload, "action payload")
          return{
                    ...state,
                    projects: action.payload
                  }
        default:
            return state
    }
  }
  
  export default companyProject