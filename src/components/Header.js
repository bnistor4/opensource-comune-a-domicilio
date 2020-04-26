import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import React from "react";
import { APP_NAME } from "../constants";

export const Header = ({ children }) => {
    return (
        <header className="App-header">
            <div className="container">
                <Link className={'main-logo'} to="/">{APP_NAME}</Link>
                <p>Questo sito ha lo scopo di dare informazioni relative all'apertura ed a servizi offerti dai commercianti di zona, fra cui la <stong>consegna a domicilio.</stong></p>
                <p>
                    Registrazione gratuita per sempre.<br />
                        Aiutiamoci in questo momento di difficoltà 😄
                    </p>
                {children}
            </div>
        </header>
    )
}
