import React from "react";
import mtn from '../static/mtn.png'
import orange from '../static/orange.png'
import moov from '../static/moov.png'
import fjn from '../static/fjn.jpeg'
import esatic from '../static/esatic.jpeg'
import artci from '../static/artci.png'
import cid from '../static/cid.png'
import lastic from '../static/lastic.jpeg'
import linkedin from '../static/linkedin.png'
import gmail from '../static/gmail.png'
import phone from '../static/phone.png'
import npm from '../static/npm.png'
import location from '../static/location.png'
import github from '../static/github.svg'
// import { Avatar, Chip } from "@material-ui/core";

const App = () => {
    return (
        <div className="col-12 my-5">
            {/* <h1 className="lead text-center">Nos Partenaires</h1>
            <div className="row d-flex justify-content-around pt-5" id="partenaires">
                <img height={50} src={artci} alt="" />
                <img height={50} src={esatic} alt="" />
                <img height={70} src={lastic} alt="" />
                <img height={50} src={cid} alt="" />
                <img height={50} src={fjn} alt="" />
                <img height={50} src={orange} alt="" />
                <img height={50} src={mtn} alt="" />
                <img height={50} src={moov} alt="" />
            </div> */}
            <h1 className="lead text-center mt-5">Coordonnées</h1>
            <div className="row d-flex justify-content-around pt-5" id="partenaires">
                {/* <div className="row col-auto d-flex flex-column align-items-center">
                    <img className="mb-3" height={50} src={linkedin} alt="" />
                    <a href="https://www.linkedin.com/in/edy-koffi-948494192/" target="_blank" rel="noopener noreferrer">Edy koffi</a> 
                </div> */}
                <div className="row col-auto d-flex flex-column align-items-center">
                    <img className="mb-3" height={50} src={gmail} alt="" />
                    <a href="mailto:nodytic@gmail.com ">nodytic@gmail.com </a> 
                </div>
                {/* <div className="row col-auto d-flex flex-column align-items-center">
                    <img className="mb-3" height={50} src={github} alt="" />
                    dykoffi
                </div>
                <div className="row col-auto d-flex flex-column align-items-center">
                    <img className="mb-3" height={50} src={npm} alt="" />
                    dykoffi
                </div> */}
                <div className="row col-auto d-flex flex-column align-items-center">
                    <img className="mb-3" height={50} src={phone} alt="" />
                    +225 51 88 64 78 / +225 55 85 46 85 
                </div>
                {/* <div className="row col-auto d-flex flex-column align-items-center">
                    <img className="mb-3" height={50} src={location} alt="" />
                    Abidjan / Marcory
                </div> */}
            </div>

            {/* <h1 className="lead text-center pt-5">Contributeurs</h1>
            <div className="row d-flex justify-content-between pt-5" id="partenaires">
                <Chip avatar={<Avatar>D</Avatar>} label="Dr DYABY Moustapha" variant="outlined" />
                <Chip avatar={<Avatar>K</Avatar>} label="KOFFI Edy" variant="outlined" />
                <Chip avatar={<Avatar>P</Avatar>} label="Pondo Kouakou Alexis" variant="outlined" />
                <Chip avatar={<Avatar>S</Avatar>} label="Sodara Zié Christian" variant="outlined" />
                <Chip avatar={<Avatar>T</Avatar>} label="TIÉMÉLÉ Eliud" variant="outlined" />
                <Chip avatar={<Avatar>K</Avatar>} label="KONÉ Kignon" variant="outlined" />
            </div> */}
        </div>
    )
}

export default App