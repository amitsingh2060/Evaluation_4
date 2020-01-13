const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";


const initialState = {
    isAuth: false,
    username:'admin',
    password:'admin'
}

const auth_reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case LOG_IN:
        if(payload.username===state.username && payload.password===state.password)
            return {...state, isAuth:true}
        else
            return { ...state, ...payload }

    case LOG_OUT:
        return{
            ...state,
            isAuth:false
        }

    default:
        return state
    }
}
export default auth_reducer