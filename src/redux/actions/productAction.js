import axios from 'axios';

import { FETCH_PRODUCTS, FILTER_PRODUCTS, UPDATE_PRODUCT, FETCH_PRODUCTS_BY_ID } from '../../constants/productActionType';

let appDBUrl = process.env.REACT_APP_DB_URL;

const getProductsData = (data) => {
    return {
        type: FETCH_PRODUCTS,
        payload: data
    }
}

const fetchProductsData = () => async (dispatch) => {
    try {
        const response = await axios.get(`${appDBUrl}/products`);
        dispatch(getProductsData(response.data.product));
        // console.log('im from p-Action', response.data.product);
    }
    catch (error) {
        console.log(error);
    }
}


const filterProducts = (data) => {
    return {
        type: FILTER_PRODUCTS,
        payload: data
    }
}


const filterProductsData = (
    name,
    price,
    discount,
    brand,
    age,
    color,
    material,
    subCategory,
    gender) => async (dispatch) => {
        try {
            const res = await axios({
                method: 'GET',
                url: `${appDBUrl}/products/filters`,
                params: {
                    name,
                    price,
                    discount,
                    brand,
                    age,
                    color,
                    material,
                    subCategory,
                    gender
                }
            });
            dispatch(filterProducts(res.data));
            // console.log(`data action`, res.data);
        } catch (err) {
            console.log(err);
        }
    }

const getProductById = (data) => {
    return {
        type: FETCH_PRODUCTS_BY_ID,
        payload: data
    }
}

const fetchProductById = (id) => async (dispatch) => {
    // console.log('id action', id);
    try {
        const res = await axios({
            method: 'GET',
            url: `${appDBUrl}/products/${id}`
        });
        dispatch(getProductById(res.data));
        // console.log("data action", res.data);
    } catch (err) {
        console.log(err);
    }
}

export { fetchProductsData, filterProductsData, getProductById, fetchProductById };
