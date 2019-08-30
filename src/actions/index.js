import {GET_PRODUCTS_SUCCESS , GET_PRODUCTS_FAIL , GET_PRODUCTS_LOADER} from './types'

export const getProducts = () =>{
    return(dispatch) => {
        dispatch({type:GET_PRODUCTS_LOADER})
    fetch('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
    .then((response) => response.json())
    .then((responseJson) => { getProductSuccess(dispatch , responseJson)})
    .catch((error) => { getProductsFail(dispatch , error)})
}
}
const getProductSuccess = (dispatch , data) => {
    dispatch({type:GET_PRODUCTS_SUCCESS , payload:data})
}
const getProductsFail = (dispatch , error) => {
    dispatch({type:GET_PRODUCTS_FAIL , payload:error})
}