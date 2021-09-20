import { Cookies } from 'react-cookie'
import store from './redux/store'
import { setSESSIONID } from './redux'
const host = "ccuapi.ciql.org" //window.location.hostname;
const crypto = require('crypto')
const cookies = new Cookies()
export const header = { url: `https://${host}` };

if (!cookies.get("sessionID")) {
    let sessionid = crypto.randomBytes(64).toString('base64') + (new Date()).getTime()
    cookies.set("sessionID", sessionid, { path: '/' })
    store.dispatch(setSESSIONID(sessionid))
} 
