
import CONSTANS from '../Constans';

const initialState = {

    movieInfo : null,
    loading :false,
    error : ""

}

const Movie = (state = initialState,action) => {
    switch(action.type){
        case(CONSTANS.DATA_GET_REQUEST):
            return{
                ...state,
                loading: true,
                movieInfo: null,
            }

        case(CONSTANS.DATA_GET_SUCCESS):
            return{
                
                movieInfo: action.info,
                loading: false,
                error: ''
            }

        case(CONSTANS.DATA_GET_FAILURE):
            return{
                movieInfo: null,
                loading: false,
                error: action.error,
                
            }
        default:
            return {...state}


    }
}


export default Movie


