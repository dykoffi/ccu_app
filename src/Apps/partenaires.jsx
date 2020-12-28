import React from "react";
import mtn from '../static/mtn.png'
import orange from '../static/orange.png'
import moov from '../static/moov.png'
import fjn from '../static/fjn.jpeg'
import esatic from '../static/esatic.jpeg'
import artci from '../static/artci.png'
import cid from '../static/cid.png'
import { Avatar, Chip } from "@material-ui/core";

const App = () => {


    return (
        <div className="col-12 my-5">
            <h1 className="lead text-center">Nos Partenaires</h1>
            <div className="row d-flex justify-content-between pt-5" id="partenaires">
                <img height={50} src={artci} alt="" />
                <img height={50} src={esatic} alt="" />
                <img height={50} src={cid} alt="" />
                <img height={50} src={fjn} alt="" />
                <img height={50} src={orange} alt="" />
                <img height={50} src={mtn} alt="" />
                <img height={50} src={moov} alt="" />
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