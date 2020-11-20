import { newsTypes } from './newsDataActionTypes';



const initialState = {
    news: [],
    error: '',
    loading : false
}


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case newsTypes.FETCH_REQUEST:
            return {
                ...state,
                loading : true
            }
        case newsTypes.FETCH_SUCCESSFUL: 
            return {
                ...state,
                news: action.payload,
                loading: false 
            }
        case newsTypes.FETCH_UNSUCCESSFUL:
            return {
                ...state,
                error: action.payload,
                loading: false,
                news : []
            }
        default: 
            return {
                ...state
            }
    }
}



export default newsReducer;

