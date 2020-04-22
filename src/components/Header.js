import {Link} from "react-router-dom";
import logo from "../assets/logo.svg";
import React from "react";
import {APP_NAME} from "../constants";

export const Header = ({children}) => {
    return (
        <header className="App-header">
            <div className="container">
                    <Link className={'main-logo'} to="/">{APP_NAME}</Link>
                    <p>
                        Registrazione gratuita per sempre.<br/>
                        Aiutiamoci in questo momento di difficoltà :)
                    </p>
                    {children}
            </div>
        </header>
    )
}
