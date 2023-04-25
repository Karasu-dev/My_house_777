import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "../pags/Home";

import Ts from "../pags/Ts";
import Contact from '../Componentes/contact/Contact';

import {BrowserRouter , Routes, Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contato" element = {<Contact/>}></Route>
      <Route path="/Ts" element={<Ts/>}></Route>

 
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
