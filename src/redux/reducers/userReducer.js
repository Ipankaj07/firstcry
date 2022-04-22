import { SIGNUP, LOGIN_USER } from '../../constants/userActionType';

const initState = {
    user: [],
    isLoggedIn: false,
    isLoading: false,
    isError: false
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SIGNUP:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                isLoading: false,
                isError: false
            }
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
                isLoading: false,
                isError: false
            }
        default:
            return state;
    }
}

export default userReducer;