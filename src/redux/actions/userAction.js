import axios from 'axios';
import { SIGNUP, LOGIN_USER, PRODUCT_TO_CART } from '../../constants/userActionType';

let appDBUrl = process.env.REACT_APP_DB_URL;

const signupUser = (data) => {
    return {
        type: SIGNUP,
        payload: data
    }
}

const signupUserData = (
    firstName,
    lastName,
    email,
    password,
) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `${appDBUrl}/users/signup`,
            data: {
                firstName,
                lastName,
                email,
                password
            }
        });
        dispatch(signupUser(res.data));
    }
    catch (error) {
        console.log(error);
    }
}

const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    }
}

const loginUserData = (
    email,
    password
) => async (dispatch) => {

    console.log(email, password);

    try {
        const res = await axios({
            method: 'POST',
            url: `${appDBUrl}/users/login`,
            data: {
                email,
                password
            }
        });
        let userData = res.data.user;
        dispatch(loginUser(userData));
        // console.log("login data Action", userData._id);
        localStorage.setItem('userId', JSON.stringify(userData._id));
    }
    catch (error) {
        console.log(error.message);
    }
}

const productTocart = (data) => {
    return {
        type: PRODUCT_TO_CART,
        payload: data
    }
}

const addProductTocartData = (
    productId,
    userId
) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `${appDBUrl}/users/add/cart`,
            data: {
                productId,
                userId
            }
        });
        dispatch(productTocart(res.data));
    }
    catch (error) {
        console.log(error);
    }
}

const removeProductFromCart = (
    productId,
    userId
) => async (dispatch) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `${appDBUrl}/users/remove/cart`,
            data: {
                productId,
                userId
            }
        });
        dispatch(productTocart(res.data));
    }
    catch (error) {
        console.log(error);
    }
}

export {
    signupUserData,
    loginUserData,
    productTocart,
    addProductTocartData,
    removeProductFromCart
}