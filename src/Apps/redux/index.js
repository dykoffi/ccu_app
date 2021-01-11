import { Cookies } from 'react-cookie'

const cookies = new Cookies()
const initState = {
    sessionid: cookies.get('sessionID'),
    files: cookies.get('files') || [],
    loading: { open: false, loaded: 0, total: 0, percent: 0 },
    info: ""
}

const SET_SESSIONID = "SET_SESSIONID"
const SET_FILES = "SET_FILES"
const SET_INFORMATION = "SET_INFORMATION"
const SET_LOADING = "SET_LOADING"

export const setSESSIONID = (sessionid) => ({
    type: SET_SESSIONID,
    sessionid: sessionid
})

export const setFILES = (files) => ({
    type: SET_FILES,
    files: files
})

export const setLoading = (data) => ({
    type: SET_LOADING,
    loading: data
})

export const setInformation = (data) => ({
    type: SET_INFORMATION,
    info: data
})

const indexReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_SESSIONID: return { ...state, sessionid: action.sessionid }
        case SET_FILES: return { ...state, files: action.files }
        case SET_LOADING: return { ...state, loading: action.loading }
        case SET_INFORMATION: return { ...state, info: action.info }
        default: return state
    }
}

export default indexReducer