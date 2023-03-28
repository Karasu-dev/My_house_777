import React from "react-dom";
import "./style.scss";


const nav = () => {
    return (
        <>
            <div className="BarraN">
                <a href="" className="Button"> Home</a>
                
                <a href="" className="Button"> sobre</a>
                
                <div className="dropdown">
                    <button className="dropbtn">Projetos</button>
                    <div className="dropdown-content">
                        <a href="#">Projeto Spring</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>




        </>
    )
}

export default nav;
