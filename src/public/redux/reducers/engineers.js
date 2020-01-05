const initialState = {
  card: [],
  isLoading: false,
  isError: false,
  engineer: [],
}

const engineers = (state=initialState, action) => {
  switch(action.type){
      case "FETCH_ENGINEERS_PENDING":
          return{
            //   ...state, //collect all previous state
            //   isError: false,
            //   isLoading: true
          }
      case "FETCH_ENGINEERS_FULFILLED":
          return{
            //   ...state,
            //   isLoading: false,
            //   isError: false,
          }
      case "FETCH_ENGINEERS_REJECTED":
          return{
            //   ...state,
            //   isLoading: false,
            //   isError: true
          }
      case "GET_ENGINEER_FULFILLED":
              return{
                //   ...state,
                //   isLoading: false,
                //   isError: false,
              }
      case "ENGINEER_DETAIL":
        console.log(action.payload, "action payload")
        return{
                  ...state,
                  engineer: action.payload
                }
      default:
          return state
  }
}

export default engineers