import React from "react";
import Hero from "../../Componentes/hero/hero";
import Who from "../../Componentes/who/who";
import Whors from "../../Componentes/works/works";
import Contact from "../../Componentes/contact/Contact";
import "./style.scss";
import styled from "styled-components"





const Home = () => {
    return (
        <div className="Container0">

            <Hero />
            <Who />
            <Whors />
            <Contact />

        </div>





    )
}

export default Home;