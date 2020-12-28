import React from "react";
// import logo from "../static/LOGO-ARTCI.png"



const Head = () => {


    return (
        <div className="col-12">
            <div className="row d-flex">
                <div className="text-center font-weight-bold">
                    <h1 className="orange-text display-1 mb-n3">C</h1>
                    <span className="orange-text">CIV</span>
                </div>
                <div className="text-center bg-light font-weight-bold px-2 mx-1">
                    <h1 className="text-center display-1 mb-n3 grey-text">C</h1>
                    <span className="grey-text">Contacts</span>
                </div>
                <div className="text-center font-weight-bold">
                    <h1 className="display-1 mb-n3 green-text">U</h1>
                    <span className="green-text">Update</span>
                </div>
                {/* <div className="col d-flex justify-content-end align-items-center">
                    <img src={logo} style={{height:70}} alt="Logo de l'ARTCI"/>
                </div> */}
            </div >
            <div className="row d-flex flex-column p-5">
                <h1 className="font-weight-bold">Nouvelle numérotation à
                <span className="green-text"> 10 chiffres</span> en Côte d’Ivoire
                </h1>
                <p>
                    Dans la nuit du samedi 30 au dimanche 31
                    janvier 2021, la numérotation en Côte
                    d’Ivoire passe de 8 à 10 chiffres pour
                    accompagner les besoins grandissants en
                    matière de téléphonie.
                    
                </p>
                <p>
                Ce changement concerne tous les mobiles
                et fixes, hors numéros spéciaux.
                Pour appeler, il faudra ajouter un préfixe à
                l’ancien numéro : ce préfixe dépend de
                l'opérateur de votre correspondant.
                </p>
                <p>Plus d'info sur <a href="https://www.artci.ci/index.php/foire-aux-questions/470-nouveau-plan-de-national-de-numeroration.html" target="_blank" rel="noopener noreferrer">artci</a></p>
                <p><b>CCU</b> met à votre dispositon des outils qui vous permettent de facilement mettre à jour tous vos contacts et ainsi vous adapter au changement sans effort.</p>
            </div>
            
        </div >
    )
}

export default Head