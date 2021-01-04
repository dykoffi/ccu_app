import { Cookies } from 'react-cookie'

const cookies = new Cookies()
const initState = {
    email: cookies.get('email'),
    loading: { open: false, loaded: 0, total: 0, percent: 0 }
}

const SET_MAIL = "SET_MAIL"
const SET_LOADING = "SET_LOADING"

export const setMail = (email) => ({
    type: SET_MAIL,
    email: email
})

export const setLoading = (data) => ({
    type: SET_LOADING,
    loading: data
})

const indexReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_MAIL: return { ...state, email: action.email }
        case SET_LOADING: return { ...state, loading: action.loading }
        default: return state
    }
}

export default indexReducer