import React from 'react'
import npmImg from '../static/npm2.png'
import Upload from './upload'
import Modal from './modal'
import z1 from '../static/z1.jpeg'
import z2 from '../static/z2.jpeg'
import z3 from '../static/z3.jpeg'
import z4 from '../static/z4.jpeg'

const Waiting = () =>
    <div className="col-12">
        <div>
            <b className="text-success display-4 font-weight-bold">
                Prenez vos précautions : Exportez et Sauvegardez vos données avant toute manipulation
        </b>
        </div>
        <ol id="utils">
            <li> <h2><i className="mdi-hardware-phone-android mr-3"></i> l'Application mobile </h2>
                <p>
                    Modifier directement et automatiquement vos contacts à l'aide de l'application ZEN
                </p>
                <ol>
                    <li>Télécharger l'application ZEN sur playstore et suivez les instructions</li>
                    <div className="row d-flex justify-content-around" id="zen">
                        <img className="mb-3" height={500} src={z1} alt="" />
                        <img className="mb-3" height={500} src={z3} alt="" />
                        <img className="mb-3" height={500} src={z2} alt="" />
                        <img className="mb-3" height={500} src={z4} alt="" />
                    </div>
                </ol>
            </li>
            <li> <h2><i className="mdi-action-language mr-3"></i> l'Import de fichiers en ligne </h2>
                <p>
                    Actualisez automatiquement le contenu de tous vos document (.vcf, .csv, .zip) qui contiennent les numeros ivoiriens. Les fichiers ZIP doivent contenir des fichiers <code>.vcf</code> ou <code>.csv</code> (les autres formats ne seront pas pris en charges).
                </p>
                <ol>
                    <li>Renseignez votre adresse mail pour la reception des liens</li>
                    <li>Importez le fichier à partir du button ci-dessous</li>
                    <li>Téléchargez la version actualisée du fichier à partir du lien reçu sur votre mail. Le fichier est automatiquement supprimé après 4min.</li>
                    <b className="text-danger">(Cette méthode nécessite la suppression des contacts existants afin d'éviter les doublons)</b>
                    <Upload />
                </ol>
                <Modal />
            </li>
            <li> <h2><i className="mdi-action-polymer mr-3"></i> l'Outil CLI (ligne de commande LINUX/MAC/WINDOWS) </h2>
                <p>
                    Automatisez vos systèmes pour des mises à jour de masse (bases de données, annunaires téléphoniques, repertoires de masse ...).
                </p>
                <ol>
                    <li>Téléchargez l'outil CLI à l'aide du gestionnaire de packages npm (<code>npm install -g ccu-cli</code>)</li>
                    <li>Entrez la commande <code>ccu-cli --help</code> pour avoir tous les details ou rendez-vous sur <a href="https://www.npmjs.com/package/ccu-cli" target="_blank" rel="noopener noreferrer">npm</a> pour plus de details</li>
                    <b className="text-danger">(Cette méthode nécessite l'installation préalable de node js)</b>
                </ol>
            </li>
            <img src={npmImg} className="col-12 border" alt="" />

        </ol>
    </div>

export default Waiting