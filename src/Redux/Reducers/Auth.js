import { LOGIN_SUCCESS, LOGOUT, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER, SET_CURRENT_USER } from '../Constants/Types';
const initialState = {
    isAuthenticated: false,
    isLoadUser: false,
    loading: true,
    user: [],
    success: false,
    token: localStorage.getItem('user')
}
// eslint-disable-next-line
export default function (state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                success: true,
                loading: false,
                user: payload,
                isAuthenticated: true,
            }
        case LOAD_USER:
            return {
                user: payload,
                isAuthenticated: true,
                
            }
        case LOGOUT:
            localStorage.removeItem('user');
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                token: null,
                loading: false,
                success: true,
            }


        case REGISTER_SUCCESS:

        default:
            return state;
    }
}