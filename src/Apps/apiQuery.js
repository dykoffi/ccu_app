import { Cookies } from 'react-cookie'
import store from './redux/store'
import { setSESSIONID } from './redux'
const host = window.location.hostname;
const crypto = require('crypto')
const cookies = new Cookies()
export const header = { url: `https://ccuapi.loca.lt` };

if (!cookies.get("sessionID")) {
    let sessionid = crypto.randomBytes(64).toString('base64') + (new Date()).getTime()
    cookies.set("sessionID", sessionid, { path: '/', maxAge: 300000 })
    store.dispatch(setSESSIONID(sessionid))
}
