import axios from 'axios';

import { FETCH_PRODUCTS, FILTER_PRODUCTS, UPDATE_PRODUCT } from '../../constants/productActionType';

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
        console.log('im from p-Action', response.data.product);
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
    subCategory) => async (dispatch) => {
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
                    subCategory
                }
            });
            dispatch(filterProducts(res.data));
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

export { fetchProductsData, filterProductsData };
