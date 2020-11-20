import Axios from 'axios';
import { newsTypes } from './newsDataActionTypes';



export const fetchNewsData = () => {
    return {
        type : newsTypes.FETCH_REQUEST
    }
}

export const fetchNewsSuccessful = (news) => {
    return {
        type: newsTypes.FETCH_SUCCESSFUL,
        payload :news
    }
}

export const fetchNewsUnsuccessful = (error) => {
    return {
        type: newsTypes.FETCH_UNSUCCESSFUL,
        payload : error
        
    }
}



export const newsAPiFetch = category => dispatch =>{
            // initiallize first dispatch
        dispatch(fetchNewsData());
        Axios.get(
          `https://gnews.io/api/v3/topics/${category}?token=${process.env.REACT_APP_NEWS_API_KEY}`
        )
          .then((response) => {
            const newsData = response.data.articles;
            dispatch(fetchNewsSuccessful(newsData));
          })
          .catch((error) => {
            const errorMsg = error.message;
            dispatch(fetchNewsUnsuccessful(errorMsg));
          });
}

