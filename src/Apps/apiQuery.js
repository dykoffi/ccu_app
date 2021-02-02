import { Cookies } from 'react-cookie'
import store from './redux/store'
import { setSESSIONID } from './redux'
const host = "160.120.185.111" //window.location.hostname;
const crypto = require('crypto')
const cookies = new Cookies()
export const header = { url: `http://${host}:37000` };

if (!cookies.get("sessionID")) {
    let sessionid = crypto.randomBytes(64).toString('base64') + (new Date()).getTime()
    cookies.set("sessionID", sessionid, { path: '/' })
    store.dispatch(setSESSIONID(sessionid))
}
