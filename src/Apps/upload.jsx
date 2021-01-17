import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useDropzone } from 'react-dropzone';
import Axios from 'axios';
import { header } from './apiQuery';
import { connect } from 'react-redux'
import { setSESSIONID, setLoading, setInformation, setFILES } from './redux'
import { Cookies } from 'react-cookie'
import { extname } from 'path'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import fileDownload from 'js-file-download';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import crypto from 'crypto'

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Message = ({ mes, open, close, w, r }) => {
    return (
        w ? <Snackbar open={open} onClose={close}>
            <Alert severity="info" > {mes}</Alert>
        </Snackbar > : <Snackbar autoHideDuration={1500} open={open} onClose={close}>
                <Alert onClose={close} severity={r ? "error" : "success"}>{mes}</Alert>
            </Snackbar>
    )
}

const Mask = () => <div id="masque"></div>
const File = (props) => {
    return (
        <div className="col-auto m-1">
            <div style={{ cursor: 'pointer' }} onClick={props.download} className="file row d-flex px-2 bg-light rounded">
                {extname(props.file) === ".vcf" && <i className="mdi-notification-event-note green-text"></i>}
                {extname(props.file) === ".zip" && <i className="mdi-file-folder amber-text text-accent-4"></i>}
                {extname(props.file) === ".csv" && <i className="mdi-navigation-menu"></i>}
                <span className="mx-2">{props.file}</span>
            </div>
        </div >)
}
const App = ({ sessionid, info, files, setInformation, setFILES }) => {
    const { getRootProps, getInputProps } = useDropzone()
    const cookies = new Cookies()
    const [listfiles, setlistfiles] = useState(files)
    const [loading, setloading] = useState(false)
    const [dealW, setDealW] = useState(false)
    const [dealOK, setDealOK] = useState(false)
    const [initW, setInitW] = useState(false)
    const [downloadW, setDownloadW] = useState(false)
    const [initOK, setInitOK] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const [serverW, setServerW] = useState(false)

    function sendFiles(files) {
        setDealW(true)
        setloading(true)
        Axios({
            method: 'POST',
            url: `${header.url}/upload`,
            data: files,
            timeout: 30000,
            headers: {"content-type": "multipart/form-data", "IDsession": cookies.get('sessionID') }
        }).then(({ data }) => {
            setDealW(false)
            setDealOK(true)
            setloading(false)
            setlistfiles([...listfiles, ...data])
            cookies.set("files", [...listfiles, ...data], { path: '/'})
            setFILES([...listfiles, ...data])
        }).catch((err) => {
            setDealW(false)
            setloading(false)
            setServerW(true)
            alert(err)
        })
    }
    function download(path, filename) {
        setDownloadW(true)
        setloading(true)
        Axios({
            method: 'GET',
            responseType: 'blob',
            timeout: 30000,
            url: `${header.url}/download/${path}`,
            headers: {"content-type": "multipart/form-data" }
        }).then((res) => {
            setDownloadW(false)
            setloading(false)
            if (res.status === 204) {
                let files = listfiles.filter(file => file.path !== path)
                setDeleted(true)
                setFILES(files)
                setlistfiles(files)
                cookies.set("files", files, { path: '/', maxAge: 300000 })
            } else {
                fileDownload(res.data, filename);
            }

        }).catch(() => {
            setloading(false)
            setDownloadW(false)
            setServerW(true)
        })
    }
    function initSession() {
        setloading(true)
        setInitW(true)
        Axios({
            method: 'GET',
            url: `${header.url}/initsession`,
            data: files,
            timeout: 30000,
            headers: { "content-type": "multipart/form-data", "IDsession": cookies.get('sessionID') }
        }).then(() => {
            setloading(false)
            setInitW(false)
            setInitOK(true)
            setFILES([])
            setlistfiles([])
            cookies.set("files", [], { path: '/', maxAge: 300000 })
            cookies.set("sessionID", crypto.randomBytes(64).toString('base64') + (new Date()).getTime(), { path: '/', maxAge: 300000 })
        }).catch(() => {
            setloading(false)
            setInitW(false)
            setServerW(true)
        })
    }
    return (
        <div className="row d-flex flex-column">
            {
                loading && <Mask />
            }
            <Message w open={dealW} mes={"Traitement des fichiers ..."} close={(even, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setDealW(false)
            }} />
            <Message r open={deleted} mes={"Oups !!! Le fichier n'existe plus"} close={(even, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setDeleted(false)
            }} />
            <Message r open={serverW} mes={"Oups !!! Le serveur ne repond pas"} close={(even, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setServerW(false)
            }} />
            <Message w open={downloadW} mes={"En attente du serveur ..."} close={(even, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setDealW(false)
            }} />
            <Message open={dealOK} mes={"Traitement terminé"} close={(even, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setDealOK(false)
            }} />
            <Message w open={initW} mes={"Réinitialisation  en cours ..."} close={(even, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setInitW(false)
            }} />

            <Message open={initOK} mes={"Réinitialisation terminé"} close={(even, reason) => {
                if (reason === 'clickaway') {
                    return;
                }
                setInitOK(false)
            }} />
            <div className="d-flex align-items-center mt-4">
                <Button disabled={loading || !sessionid} {...getRootProps()} className="bg-light" startIcon={<CloudUploadIcon />} variant="contained" size="large">Importez vos fichiers (.csv, .vcf, .zip)
            <input
                        {...getInputProps()}
                        className="col-12"
                        accept=".csv, .vcf, .zip"
                        type="file"
                        name='fichier'
                        onChange={({ target: { files } }) => {
                            const data = new FormData()
                            for (let i = 0; i < files.length; i++) {
                                data.append('fichier', files[i]);
                            }
                            sendFiles(data)
                        }}
                    />
                </Button>
                <span className="ml-3 text-success font-weight-bold">{info}</span>
            </div>
            {
                listfiles.length !== 0 &&
                <>
                    <h5 className="mt-3">{listfiles.length} fichier(s) traités : </h5>
                    <div className="row d-flex pl-3 mt-2">
                        {listfiles.map(({ filename, path }) => <File key={filename} download={() => download(path, filename)} path={path} file={filename} />)}
                    </div>
                    <div className="d-flex justify-content-end mt-3">
                        <Button onClick={initSession} startIcon={<ExitToAppIcon />} size="large" variant="contained" className="red white-text">Reinitialiser la session</Button>
                    </div>
                </>
            }

            <div className="row d-flex flex-column">
                <small className="blue-grey-text">Les fichiers sont automatiquement supprimés après 4min ou lors de la réinitialisation de la session</small>
                <small>Écrivez nous (par mail : <a href="mailto:nodytic@gmail.com">nodytic@gmail.com</a> ) pour la prise en charge des fichiers spécifiques à votre entreprise.</small>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    const { indexReducer: { sessionid, loading, info, files } } = state
    return { sessionid, loading, info, files }
}

const AppConnected = connect(mapStateToProps, { setLoading, setSESSIONID, setInformation, setFILES })(App)
export default AppConnected;