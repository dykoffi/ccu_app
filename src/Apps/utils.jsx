import React from 'react'
import npmImg from '../static/npm2.png'
import Upload from './upload'

const Waiting = () =>
    <div className="col-12">
        <div>
            <b className="text-success display-4 font-weight-bold">
                Prenez vos précautions : Exportez et Sauvegardez vos données avant toute manipulation.
        </b>
        </div>
        <ol id="utils">
            <li> <h2><i className="mdi-action-language mr-3"></i> l'Import de fichiers en ligne </h2>
                <p>
                    Actualisez le contenu de tous vos documents (<code>.vcf, .xlsx, .csv, .zip</code>) qui contiennent des numeros ivoiriens. Les fichiers ZIP doivent contenir des fichiers <code>.vcf, .xlsx</code> ou <code>.csv</code> (les autres formats ne seront pas traités).
                </p>
                <ol>
                    <li>Importez le fichier à partir du boutton ci-dessous</li>
                    <li>Téléchargez la version actualisée du fichier et actualisez votre système</li>
                    <li>Les fichiers <code>.csv</code> devront respecter le formatage suivant :
                        <ul>
                            <li>Séparateur <code>(,)</code></li>
                            <li>Contenir une colonne (ou plusieurs) destinée(s) aux contacts (peu importe le nom de la colonne)</li>
                            <li>Une cellule peut contenir plusieurs contacts séparés par un slash <code>(/)</code></li>
                            <li>Être valide selon la règle de formatage des fichiers csv</li>
                        </ul>
                    </li>
                    <p className="mt-3 green-text font-weight-bold">Par defaut, l'algorithme considère toutes les compositions numériques à huit chiffres (avec ou sans indicatif) comme des numéros ivoiriens, cochez la case ci-dessous pour ne traiter que les formats avec indicatif (pratique pour les pays étrangers).</p>
                    <Upload />
                </ol>
                <b className="text-danger">(Avant la mise à jour dans les systèmes téléphoniques, veuillez bien supprimer les anciens contacts afin d'éviter les doublons)</b>
            </li>
            <li> <h2><i className="mdi-action-polymer mr-3"></i> l'Outil CLI (ligne de commande LINUX/MAC/WINDOWS) </h2>
                <p>
                    Automatisez vos systèmes pour des mises à jour de masse (bases de données, annunaires téléphoniques, repertoires de masse ...).
                </p>
                <ol>
                    <li>Téléchargez l'outil CLI à l'aide du gestionnaire de packages npm (<code>npm install -g ccu-cli</code>)</li>
                    <li>Entrez la commande <code>ccu-cli --help</code> ou rendez-vous sur <a href="https://www.npmjs.com/package/ccu-cli" target="_blank" rel="noopener noreferrer">npm</a> pour plus de details</li>
                    <li>Prise en charge des base de données <code>Postgres, Mysql ,Sql Server, Oracle</code> (dans la prochaine version)</li>
                </ol>
                <b className="text-danger">(Cette méthode nécessite l'installation préalable de node js)</b>
            </li>
            <img src={npmImg} className="col-12 border" alt="" />

        </ol>
    </div>

export default Waiting