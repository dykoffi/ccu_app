import React from 'react'
const Waiting = () =>
    <div className="col-12">
        <div>
            <b className="text-success display-4 font-weight-bold">
                Prenez vos précautions : Exportez et Sauvegardez vos contacts avant toute manipulation
        </b>
        </div>
        <ol id="utils">
            <li> <h2><i className="mdi-hardware-phone-android mr-3"></i> l'Application mobile </h2>
                <p>
                    Modifier directement et automatiquement vos contacts à l'aide de l'application ZEN
                    <ol>
                        <li>Télécharger l'application ZEN sur playstore et suivez les instructions</li>
                    </ol>
                </p>
            </li>
            <li> <h2><i className="mdi-action-language mr-3"></i> l'Import de fichiers en ligne </h2>
                <p>
                    Actualiser tous vos contacts à l'aide de l'import/export de contacts sous format .vcf .
                    <ol>
                        <li>Accedez à vos contacts et exporter les dans la memoire interne (un fichier .vcf est crée)</li>
                        <li>Uploadez ce fichier à partir du système système ci-dessous</li>
                        <li>Téléchargez la version actualisée du fichier</li>
                        <li>Rendez vous dans vos contacts et importer le nouveau fichier téléchargé</li>
                        <b className="text-danger">(Cette méthode nécessite la suppression des contacts existants afin d'éviter les doublons)</b>
                    </ol>
                </p>
            </li>
            <li> <h2><i className="mdi-notification-vpn-lock mr-3"></i> l'API en ligne </h2>
                <p>
                    Intégrez cette API à vos applications (WEB et mobile) afin de bénéficier des fonctionnalités avancées de CCU .
                    <ol>
                        <li>Accedez à vos contacts et exporter les dans la memoire interne (un fichier .vcf est crée)</li>
                        <li>Uploadez ce fichier à partir du système système ci-dessous</li>
                        <li>Téléchargez la version actualisée du fichier</li>
                        <li>Rendez vous dans vos contacts et importer le nouveau fichier téléchargé</li>
                    </ol>
                </p>
            </li>
            <li> <h2><i className="mdi-av-my-library-books mr-3"></i> l'Outil de traitement de document</h2>
                <p>
                    Actualisez automatiquement le contenu de tous vos document (.txt, .docx, .pdf, .csv) qui contiennent les numeros ivoiriens (hotelerie, aréoports, agence de communication ...).
                    <ol>
                        <li>Uploadez le fichier à partir du système système ci-dessous</li>
                        <li>Téléchargez la version actualisée du fichier</li>
                    </ol>
                </p>
            </li>
            <li> <h2><i className="mdi-action-polymer mr-3"></i> l'Outil CLI (ligne de commande LINUX/MAC/WINDOWS) </h2>
                <p>
                    Automatisez vos systèmes pour des mise à jour de masse (hotelerie, aréoports, agence de communication ...).
                    <ol>
                        <li>Téléchargez l'outil CLI à l'aide du gestionnaire de package node.js npm (<code>npm install -g ccu-cli</code>)</li>
                        <li>Entrez la commande <code>ccu-cli --help</code> pour avoir tous les details ou rendez-vous sur <a href="http://www.npm.org" target="_blank" rel="noopener noreferrer">npm</a> pour plus de details</li>
                        <b className="text-danger">(Cette méthode nécessite l'installation préalable de node js)</b>
                    </ol>
                </p>
            </li>

        </ol>
    </div>

export default Waiting