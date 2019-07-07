// import axios for getting data from API
import axios from 'axios';

// export action that get notes
export const getNotes = () => {
    return {
        type: 'GET_NOTES',
        payload: axios.get(`http://192.168.100.24:3000/notes`)
    }
}

// export action that get notes
export const getMoreNotes = (page) => {
    return {
        type: 'GET_MORENOTES',
        payload: axios.get(`http://192.168.100.24:3000/notes?page=${page}`)
    }
}

// export action that post notes
export const postNotes = (title, note, category) => {
    return {
        type: 'POST_NOTES',
        payload: axios.post('http://192.168.100.24:3000/notes',{title: title, note: note, idCategory: category})
    }
}

// export action that update notes
export const patchNotes = (title, note, category, id) => {
    return {
        type: 'PATCH_NOTES',
        payload: axios.patch(`http://192.168.100.24:3000/notes/${ id }`,{title: title, note: note, idCategory: category})
    }
}

export const deleteNotes = (id) => {
    return {
        type: 'DELETE_NOTES',
        payload: axios.delete(`http://192.168.100.24:3000/notes/${ id }`)
    }
}

export const getNotesSearchSort = (search, sort) => {
    return {
        type: 'GET_NOTESACTION',
        payload: axios.get(`http://192.168.100.24:3000/notes?search=${ search }&sort=${ sort }`)
    }
}