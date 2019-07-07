const initialState = {
    number: 10,
    data: [],
    results: [],
    totalPage: 1,
    isLoading: false,
    isError: false,
}

// create a reducer for getting network from RESTful API
export default notes = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_NOTES_PENDING': // in case when loading get data
            return {
                ...state,
                isLoading: true
            }
        case 'GET_NOTES_REJECTED': // in case error network/else
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'GET_NOTES_FULFILLED': // in case successfuly get data
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                totalPage: action.payload.data.totalPage,
                data: action.payload.data.data,
                config: action.payload.config
            }

        case 'GET_MORENOTES_PENDING': // in case when loading get data
            return {
                ...state,
                isLoading: true
            }
        case 'GET_MORENOTES_REJECTED': // in case error network/else
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'GET_MORENOTES_FULFILLED': // in case successfuly get data
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                totalPage: action.payload.data.totalPage,
                data: state.data.concat(action.payload.data.data),
            }

        case 'POST_NOTES_PENDING': // in case when loading post data
            return {
                ...state,
                isLoading: true
            }
        case 'POST_NOTES_REJECTED': // in case error network/else
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'POST_NOTES_FULFILLED': // in case successfuly post data
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                data: [...state.data, action.payload.data.data[0]],
            }

        case 'PATCH_NOTES_PENDING': // in case when loading post data
            return {
                ...state,
                isLoading: true
            }
        case 'PATCH_NOTES_REJECTED': // in case error network/else
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'PATCH_NOTES_FULFILLED': // in case successfuly post data
            return {
                ...state,
                isError: false,
                isFinish: true,
                data: [...state.data, action.payload.data.data],
            }

        case 'DELETE_NOTES_PENDING': // in case when loading post data
            return {
                ...state,
                isLoading: true
            }
        case 'DELETE_NOTES_REJECTED': // in case error network/else
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'DELETE_NOTES_FULFILLED': // in case successfuly post data
            return {
                ...state,
                isError: false,
                data: [...state.data, action.payload.data.data],
            }

        case 'GET_NOTESACTION_PENDING': // in case when loading get data
            return {
                ...state,
                isLoading: true
            }
        case 'GET_NOTESACTION_REJECTED': // in case error network/else
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case 'GET_NOTESACTION_FULFILLED': // in case successfuly get data
            return {
                ...state,
                isLoading: false,
                isFinish: true,
                data: action.payload.data.data,
            }


        default:
            return state;
    }
}