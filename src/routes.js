import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Party from "./pages/Party";
import Header from "./Components/Header";

function Def_routes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path ="profile" element = {<Profile/>}/>
                <Route path ="home" element = {<Home/>}/>
                <Route path ="login" element = {<Login/>}/>
                <Route path="register" element = {<Register/>}/>
                <Route path= "party" element = {<Party/>}/>
                <Route path= "header" element = {<Header/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Def_routes;