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
                Prenez vos précautions : Exportez et Sauvegardez vos données avant toute manipulation.
        </b>
        </div>
        <ol id="utils">
            {/* <li> <h2><i className="mdi-hardware-phone-android mr-3"></i> l'Application mobile </h2>
                <p>
                    Modifiez directement et automatiquement vos contacts à l'aide de l'application ZEN
                </p>
                <ol>
                    <li>Télécharger et installer l'application ZEN depuis le playstore</li>
                    <li>Inscrivez vous et soucrivez à un forfait</li>
                    <li>Choisissez le mode automatique ou mauel pour la mise à jour de vos contacts</li>
                    <div className="row d-flex flex-row justify-content-around mt-3" id="zen">
                        <img className="mb-3" height={500} src={z1} alt="" />
                        <img className="mb-3" height={500} src={z3} alt="" />
                        <img className="mb-3" height={500} src={z2} alt="" />
                        <img className="mb-3" height={500} src={z4} alt="" />
                    </div>
                </ol>
            </li>*/}
            <li> <h2><i className="mdi-action-language mr-3"></i> l'Import de fichiers en ligne </h2>
                <p>
                    Actualisez le contenu de tous vos documents (<code>.vcf, .csv, .zip</code>) qui contiennent des numeros ivoiriens. Les fichiers ZIP doivent contenir des fichiers <code>.vcf</code> ou <code>.csv</code> (les autres formats ne seront pas traités).
                </p>
                <ol>
                    <li>Renseignez votre adresse mail pour la reception des fichiers</li>
                    <Modal />
                    <li>Importez le fichier à partir du boutton ci-dessous</li>
                    <li>Téléchargez la version actualisée du fichier reçu sur votre mail et actualisez votre système.</li>
                    <li>Les fichiers <code>.csv</code> devront respecter le formatage suivant :
                        <ul>
                            <li>séparateur <code>;</code> ou <code>,</code></li>
                            <li>Contenir une colonne (ou plusieurs) destinée(s) aux contacts (peu importe le nom de la colonne)</li>
                            <li>Être valide selon la règle de formatage des fichiers csv</li>
                        </ul>
                    </li>
                    <Upload />
                </ol>
                <b className="text-danger">(Cette méthode nécessite la suppression des contacts existants afin d'éviter les doublons)</b>
            </li>
            <li> <h2><i className="mdi-action-polymer mr-3"></i> l'Outil CLI (ligne de commande LINUX/MAC/WINDOWS) </h2>
                <p>
                    Automatisez vos systèmes pour des mises à jour de masse (bases de données, annunaires téléphoniques, repertoires de masse ...).
                </p>
                <ol>
                    <li>Téléchargez l'outil CLI à l'aide du gestionnaire de packages npm (<code>npm install -g ccu-cli</code>)</li>
                    <li>Entrez la commande <code>ccu-cli --help</code> ou rendez-vous sur <a href="https://www.npmjs.com/package/ccu-cli" target="_blank" rel="noopener noreferrer">npm</a> pour plus de details</li>
                    <li>Prise en charge des base de données <code>Postgres, Mysql ,Sql Server, Sqlite, MongoDB</code> (dans la prochaine version)</li>
                </ol>
                <b className="text-danger">(Cette méthode nécessite l'installation préalable de node js)</b>
            </li>
            <img src={npmImg} className="col-12 border" alt="" />

        </ol>
    </div>

export default Waiting