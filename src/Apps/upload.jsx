import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useDropzone } from 'react-dropzone';
import Axios from 'axios';
import { header } from './apiQuery';
import { connect } from 'react-redux'
import { setMail, setLoading, setInformation } from './redux'

const App = ({ email, info, setInformation }) => {
    const { getRootProps, getInputProps } = useDropzone()
    const [loading, setloading] = useState(false)
    const [percent, setpercent] = useState(null)

    function sendFiles(files) {
        setloading(true)
        setInformation("Envoi en cours ...")
        Axios({
            onUploadProgress: function (progressEvent) {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                setpercent(percentCompleted)
            },
            method: 'POST',
            url: `${header.url}/upload/${btoa(email)}`,
            data: files,
            headers: { "content-type": "multipart/form-data", "x-filename": files }
        }).then(({ data }) => {
            setInformation(data)
            setTimeout(() => {
                setInformation("")
            }, 2500);
        })
    }
    return (
        <div className="row d-flex flex-column">
            <div className="d-flex align-items-center mt-4">
                <Button disabled={!email} {...getRootProps()} className="bg-light" startIcon={<CloudUploadIcon />} variant="contained" size="large">Importez vos fichiers (.csv, .vcf, .zip)
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
            <div className="row d-flex">
                <small>Écrivez nous (par mail : <a href="mailto:nodytic@gmail.com">nodytic@gmail.com</a> ) pour la prise en charge des fichiers spécifiques à votre entreprise.</small>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    const { indexReducer: { email, loading, info } } = state
    return { email, loading, info }
}

// const mapDispatchToProps = () => ({ setLoading, setMail })

const AppConnected = connect(mapStateToProps, { setLoading, setMail, setInformation })(App)
export default AppConnected;