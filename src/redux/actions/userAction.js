import axios from 'axios';
import { SIGNUP, LOGIN_USER } from '../../constants/userActionType';

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
        let userData = res.data.user;
        dispatch(signupUser(userData));
        localStorage.setItem('userId', JSON.stringify(userData._id));
        localStorage.setItem("isUserLogedIn", true);
        localStorage.setItem("userName", JSON.stringify(userData.firstName + " " + userData.lastName));
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
        localStorage.setItem("isUserLogedIn", true);
        localStorage.setItem("userName", JSON.stringify(userData.firstName + " " + userData.lastName));
    }
    catch (error) {
        console.log(error.message);
    }
}

const addProductTocartData = (
    productId,
    userId
) => async (dispatch) => {
    console.log(productId, userId);
    try {
        const res = await axios({
            method: 'PATCH',
            url: `${appDBUrl}/users/cart/add`,
            data: {
                productId,
                userId
            }
        });
        let userData = res.data.data;
        // console.log("add product to cart", userData.cart);
        // dispatch(productTocart(userData.cart));

        dispatch(loginUser(userData));
        console.log("add product to cart", res.data.data);
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
            method: 'PATCH',
            url: `${appDBUrl}/users/cart/remove`,
            data: {
                productId,
                userId
            }
        });
        let userData = res.data.data;
        dispatch(loginUser(userData));
        console.log("add product to cart", res.data.data);
    }
    catch (error) {
        console.log(error);
    }
}

export {
    signupUserData,
    loginUserData,
    addProductTocartData,
    removeProductFromCart
}