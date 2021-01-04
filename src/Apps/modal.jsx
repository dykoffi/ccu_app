import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Cookies } from 'react-cookie'
import { Avatar, Chip } from '@material-ui/core';
import { connect } from 'react-redux'
import { setMail, setLoading } from './redux'
import { setMinutes } from 'date-fns';

const Modal = ({ setMail, setLoading, email, loading }) => {
    const cookies = new Cookies()
    const [open, setOpen] = React.useState(false);
    const [inputMail, setinputMail] = React.useState(email);

    const handleClose = () => {
        setOpen(false);
    };

    function validerEmail() {
        if (/^[a-z0-9]+@[a-z]+\.(fr|com|ci|yahoo|co)$/.test(inputMail)) {
            cookies.set("email", inputMail, { path: '/' })
            setMail(inputMail)
            setOpen(false)
        }
    }

    useEffect(() => {
        if (!email) {
            setTimeout(() => {
                setOpen(true)
            }, 3000);
        }
    }, [])

    function inputMailHandle({ target: { value } }) {
        setinputMail(value)
    }

    return (
        <div className="col-12">

            {
                email ? <small><Chip className="bg-light" avatar={<Avatar>{email[0]}</Avatar>} label={email} onClick={() => setOpen(true)} /> confguré pour recevoir les liens</small> : <small>
                    <Chip className="bg-light" label={"Configuré un mail"} onClick={() => setOpen(true)} /> pour recevoir le lien des fichiers traités
                </small>
            }

            <Dialog
                open={open}
                onClose={handleClose}
                disableBackdropClick
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><h1>Confidentialité</h1></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Parce que votre sécurité compte pour nous, veuillez renseignez votre mail afin de recevoir en toute confidentialité les liens de vos fichiers traités
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        fullWidth
                        defaultValue={email}
                        onChange={inputMailHandle}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >Retour</Button>
                    {
                        email &&
                        <Button onClick={() => {
                            cookies.remove('email', { path: '/' })
                            setMail(null)
                            handleClose()
                        }} >Supprimer</Button>
                    }

                    <Button disabled={!(/^[a-z0-9]+@[a-z]+\.(fr|com|ci|yahoo|co)$/.test(inputMail))} onClick={validerEmail} className="bg-light">Valider</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { indexReducer: { email, loading } } = state
    return { email, loading }
}

// const mapDispatchToProps = () => ({ setLoading, setMail })

const ModalConnected = connect(mapStateToProps, { setLoading, setMail })(Modal)
export default ModalConnected;
