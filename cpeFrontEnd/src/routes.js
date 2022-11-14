import React from "react";
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Party from "./pages/Party";
import Header from "./Components/Header";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />
  );



function Def_routes(){
    return (
        <BrowserRouter>
            <Routes>
                <PrivateRoute path ="profile" element = {<Profile/>}/>
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