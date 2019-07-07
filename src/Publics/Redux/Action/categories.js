// import Axios for getting data from
import axios from 'axios';

// export action that getting data from API
export const getCategories = () => {
    return {
        type: 'GET_CATEGORIES',
        payload: axios.get('http://192.168.100.24:3000/categories')
    }
}

export const postCategory = (data) => {
    return {
        type: 'POST_CATEGORIES',
        payload: axios.post('http://192.168.100.24:3000/categories',{category: data.category, imageUrl: data.imageUrl})
    }
}

export const deleteCategory = (id) => {
    return {
        type: 'POST_CATEGORIES',
        payload: axios.delete(`http://192.168.100.24:3000/categories/${ id }`)
    }
}