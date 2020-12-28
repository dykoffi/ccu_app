import React from "react";
import Head from './head'
import Utils from './utils'
import Copyright from "./copyright";
import Part from "./partenaires"



const App = () => {


  return (
    <div className="row">
      <div className="container mb-5">
        <Head />
        <Utils />
        <Part />
        <Copyright />
      </div>

    </div>
  )
}

export default App