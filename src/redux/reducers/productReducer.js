import { FETCH_PRODUCTS, FILTER_PRODUCTS, UPDATE_PRODUCT, FETCH_PRODUCTS_BY_ID } from '../../constants/productActionType';

const initState = {
    products: [],
    filteredProducts: [],
    isLoading: false,
    isError: false,
    productById: {},
    cart: 0,
}

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: [...action.payload],
                loading: false,
                isError: false
            }
        case FILTER_PRODUCTS:
            return {
                ...state,
                // filteredProducts: [...action.payload],
                products: [...action.payload],
                loading: false,
                isError: false
            }
        case FETCH_PRODUCTS_BY_ID:
            return {
                ...state,
                productById: { ...action.payload },
                loading: false,
                isError: false
            }

        case UPDATE_PRODUCT:
            return {
                ...state,
                cart: action.payload,
            }
        default:
            return state;
    }
}

export default productReducer;