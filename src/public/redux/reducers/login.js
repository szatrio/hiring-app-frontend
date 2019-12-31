const initialState = {
    email: '',
    role: '',
    token: '',
    id: ''
}

const login = (state= initialState, action) =>{
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                id: action.payload.data.data.id,
                email: action.payload.data.data.email,
                role: action.payload.data.data.role,
                token: action.payload.data.token
            }
        default:
            return state
    }
}

export default login