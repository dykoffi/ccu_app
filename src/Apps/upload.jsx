import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useDropzone } from 'react-dropzone';
import Axios from 'axios';
import { header } from './apiQuery';
import { connect } from 'react-redux'
import { setMail, setLoading } from './redux'

const App = ({ email, setMail, setLoading }) => {
    const { getRootProps, getInputProps } = useDropzone()
    const [listFile, setlistFile] = useState([])
    const [loading, setloading] = useState(false)
    const [percent, setpercent] = useState(null)

    function sendFiles(files) {
        setloading(true)
        Axios({
            onUploadProgress: function (progressEvent) {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                setpercent(percentCompleted)
            },
            method: 'POST',
            url: `${header.url}/upload/${btoa(email)}`,
            data: files,
            headers: { "content-type": "multipart/form-data", "x-filename": files }
        }).then((data) => {
            console.log("fichiers envoyés");
        })
    }
    return (
        <div className="row d-flex flex-column">
            <div>
                <Button title={!email && "configurez d'abord le compte mail"} disabled={!email} {...getRootProps()} className="bg-light mt-4" startIcon={<CloudUploadIcon />} variant="contained" size="large">Importez vos fichiers (.csv, .vcf, .zip)
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
            </div>
            <div className="row d-flex">
                <small>Écrivez nous (par mail : nodytic@gmail.com) pour la prise en charge des fichiers spécifiques à votre entreprise.</small>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    const { indexReducer: { email, loading } } = state
    return { email, loading }
}

// const mapDispatchToProps = () => ({ setLoading, setMail })

const AppConnected = connect(mapStateToProps, { setLoading, setMail })(App)
export default AppConnected;