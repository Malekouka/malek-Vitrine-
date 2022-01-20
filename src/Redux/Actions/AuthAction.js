import axios from 'axios';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL, LOAD_USER, LOAD_ERROR } from '../Constants/Types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();                     
//Login User 
export const log = (email, password) => async dispatch => {
    const config = {
        headers: {
            'content-Type': 'application/json'
        }
    }
    const data = JSON.stringify({
        email,
        password,
    });
    try {
        axios.post('http://127.0.0.1:8000/api/auth/login', data, config).then((res) => {
            console.log('***', res);
            localStorage.setItem('user', res.data.access_token)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.data
            });
            toast.info('login successful'); 
        }).catch((error) => {
            dispatch({
                type: LOGIN_FAIL,
            })
            toast.error('login Failed'); 
        });
    } catch (error) {

    }
}


//Logout
export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
    toast.info('Good By');

}


//sigup 
export const signup = (userName, email, password, password_confirmation) => async dispatch => {

    const config = {

        headers: {
            'content-Type': 'application/json'
        }
    }
    const data = JSON.stringify({
        userName,
        email,
        password,
        password_confirmation,
    })
    try {
        const res = await axios.post('http://127.0.0.1:8000/api/auth/signup', data, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
        toast.info('signup successful trying to connect'); 
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL,
        })
        toast.error('signup Failed'); 
    }
}



//load user

export const loadUser = () => async dispatch => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('user'),
        }
    }
    console.log('dddd', localStorage)
    try {
        const res = await axios.get('http://127.0.0.1:8000/api/user', config)
        console.log(res);
        dispatch({
            type: LOAD_USER,
            payload: res.data
        })

    } catch(err) {
        dispatch({
            type:LOAD_ERROR,
            payload: err.data
        })
    }
}