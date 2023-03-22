import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "../pags/Home"
import {BrowserRouter , Routes, Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home/>}/>
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
