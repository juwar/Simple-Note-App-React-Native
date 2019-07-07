const initialState = {
    number: 10,
    data: [],
    results: [],
    isLoading: false,
    isError: false,
}

// create a reducer for getting network from RESTFull API
export default categories = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CATEGORIES_PENDING': // in case when loading get data
            return {
                ...state,
                isLoading: true
            }
        case 'GET_CATEGORIES_REJECTED': // in case error network/else
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'GET_CATEGORIES_FULFILLED': // in case successfuly get data
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
            }

        case 'POST_CATEGORIES_PENDING': // in case when loading get data
            return {
                ...state,
                isLoading: true
            }
        case 'POST_CATEGORIES_REJECTED': // in case error network/else
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'POST_CATEGORIES_FULFILLED': // in case successfuly get data
            return {
                ...state,
                isError: false,
                data: [...state.data, action.payload.data.data[0]]
            }

        case 'DELETE_CATEGORIES_PENDING': // in case when loading get data
            return {
                ...state,
                isLoading: true
            }
        case 'DELETE_CATEGORIES_REJECTED': // in case error network/else
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'DELETE_CATEGORIES_FULFILLED': // in case successfuly get data
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload.data.data,
            }

        default:
            return state;
    }
}