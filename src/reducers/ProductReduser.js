import {GET_PRODUCTS_FAIL , GET_PRODUCTS_SUCCESS , GET_PRODUCTS_LOADER} from '../actions/types'

const INITIAL_STATE = {
    allProducts:[],
    loading:false,
    error:''
}

export default (state = INITIAL_STATE , action) =>{
    switch(action.type){
        case GET_PRODUCTS_LOADER:{
            return{...state , error:'' , loading:true}
        }
        case GET_PRODUCTS_SUCCESS : {
            return {...state , allProducts:action.payload , loading:false , error:''}
        }
        case GET_PRODUCTS_FAIL:{
            return {...state , error:action.payload , loading:false}
        }
        default: 
        return state
    }
}