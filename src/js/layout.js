import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Context } from "./store/appContext.js";
import injectContext from "./store/appContext.js";

import Navbar from "./component/navbar.js";
import Home from "./pages/home.js";

function Layout() {

  const {store, actions} = useContext(Context)

  return (
    <>
    <Navbar></Navbar>

      <BrowserRouter basename={store.basename} >
        <Routes>
        <Route element={<Home />} path='/' />
        

          <Route element={<>404 Not Found</>} path='*' />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default injectContext(Layout)