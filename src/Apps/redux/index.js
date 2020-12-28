import Axios from "axios"
import { header, socket } from '../apiQuery'
const initState = {
    listFiles: [],
    loading: { open: false, loaded: 0, total: 0, percent: 0 }
}

const SET_LIST_FILE = "SET_LIST_FILE"
const SET_LOADING = "SET_LOADING"

const setListFile = (files) => ({
    type: SET_LIST_FILE,
    listFiles: files
})

export const setLoading = (data) => ({
    type: SET_LOADING,
    loading: data
})

const indexReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_LIST_FILE: return { ...state, listFiles: action.listFiles }
        case SET_LOADING: return { ...state, loading: action.loading }
        default: return state
    }
}


export function thunkListFiles() {
    return async (dispatch) => {
        Axios({
            method: 'GET',
            url: `${header.url}/list/files`,
        }).then(({ data }) => {
            dispatch(setListFile(data))
        }).catch((err) => {
            console.log(err);
            console.log("dans l'erreur");
        })
    }
}

export function thunkAddFiles(files) {
    return async (dispatch) => {
        Axios({
            onUploadProgress: function (progressEvent) {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                dispatch(setLoading({ open: true, loaded: progressEvent.loaded, total: progressEvent.total, percent: percentCompleted }))
            },
            method: 'POST',
            url: `${header.url}/upload/cours`,
            data: files,
            headers: { "content-type": "multipart/form-data", "x-filename" : files }
        }).then(() => {
            console.log("fichier(s) envoyé(s)");
            dispatch(setLoading({ open: false, loaded: 0, total: 0, percent: 0 }))
            dispatch(thunkListFiles())
            socket.emit("files_update")
        })
    }
}

export default indexReducer