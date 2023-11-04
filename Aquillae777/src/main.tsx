import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "../pags/Home";
import Contact from "../Componentes/Contact/Contact";
import Pjava from "../pags/Pjava";
import PTSX from "../pags/PTSX";


import {BrowserRouter , Routes, Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/java" element = {<Pjava/>} />
      <Route path = "/Tsx" element ={<PTSX/>}/> 
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)