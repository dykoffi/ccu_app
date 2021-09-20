import React from "react";
import esatic from '../static/esatic.jpeg'
import cid from '../static/cid.png'
import lastic from '../static/lastic.jpeg'
import linkedin from '../static/linkedin.png'
import gmail from '../static/gmail.png'
import phone from '../static/phone.png'
import npm from '../static/npm.png'
import github from '../static/github.svg'

const App = () => {
    return (
        <div className="col-12 my-5">
            <h1 className="lead text-center">Nos Partenaires</h1>
            <div className="row d-flex justify-content-around pt-5" id="partenaires">
                <img height={70} src={lastic} alt="" />
                <img height={50} src={esatic} alt="" />
                <img height={50} src={cid} alt="" />
            </div>
            <h1 className="lead text-center mt-5">Coordonnées</h1>
            <div className="row d-flex justify-content-around pt-5" id="partenaires">
                <div className="row col-auto d-flex flex-column align-items-center">
                    <img className="mb-3" height={50} src={linkedin} alt="" />
                    <a href="https:ww.linkedin.com/in/edy-koffi-948494192/" target="_blank" rel="noopener noreferrer">Edy koffi</a>
                </div>
                <div className="row col-auto d-flex flex-column align-items-center">
                    <img className="mb-3" height={50} src={gmail} alt="" />
                    <a href="mailto:nodytic@gmail.com ">koffiedy@gmail.com </a>
                </div>
                <div className="row col-auto d-flex flex-column align-items-center">
                    <img className="mb-3" height={50} src={github} alt="" />
                    dykoffi
                </div>
                <div className="row col-auto d-flex flex-column align-items-center">
                    <img className="mb-3" height={50} src={npm} alt="" />
                    dykoffi
                </div>
                <div className="row col-auto d-flex flex-column align-items-center">
                    <img className="mb-3" height={50} src={phone} alt="" />
                    +225 05 55 85 46 85
                </div>
            </div>
        </div>
    )
}

export default App