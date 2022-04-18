import { FETCH_PRODUCTS, FILTER_PRODUCTS, UPDATE_PRODUCT } from '../../constants/productActionType';

const initState = {
    products: [],
    filteredProducts: [],
    isLoading: false,
    isError: false,
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
                filteredProducts: [...action.payload],
                loading: false,
                isError: false
            }
        default:
            return state;
    }
}

export default productReducer;