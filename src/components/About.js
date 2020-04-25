import React from 'react';
import { Link } from "react-router-dom";
import { ADD_ACTIVITY_URL } from "../constants";

export const About = () => {
    return (
        <div className={'About'}>
            <nav className="buttons">
                <div className={'container'}>
                    <Link to={'/'}>
                        <button className="btn btn-gray">Torna alle attività</button>
                    </Link>
                    <a className="btn btn-primary" target="_blank" rel='noopener noreferrer' href={ADD_ACTIVITY_URL}>Aggiungi un'attività</a>
                </div>
            </nav>
            <div className={'container'}>

                <div className={'content'}>
                    <p>
                        👋 Sono Bogdan, ho implementato il progetto dei ragazzi del team di Fiumicino App per il comune di Ladispoli.
                        Rigrazio i ragazzi per il grande lavoro fatto e spero possa essere utile alle attività locali.
                        Qui sotto trovate il messaggio originale dei ragazzi.
                    </p>
                    <p>
                        👋 Siamo un gruppo di ragazzi che vivono a Fiumicino e che hanno a cuore la propria città.
                        </p>
                    <p>
                        Durante il periodo Covid-19 ad inizio 2020 abbiamo voluto realizzare il portale fiumicinoadomicilio.it, che offre alle attività produttive ancora aperte del nostro Comune di poter continuare a lavorare, offrendo prodotti e servizi a tutti noi che dobbiamo restare a casa. Abbiamo voluto dare il nostro piccolo contributo a supporto della comunità.
                        </p>
                    <p>
                        Data la grande risposta da parte di attività e cittadini abbiamo deciso di migliorare il servizio e stiamo continuando ad aggiornare il progetto sulla base delle segnalazioni di cittadini ed attività che ci supportano.
                        </p>
                    <p>
                        L’iniziativa è completamente gratuita e senza alcun fine economico, commerciale, politico o di qualsiasi altro tipo.
                        </p>
                    <p>
                        Chiunque abbia un’attività può registrarsi ed entrare nella piattaforma.
                        </p>
                    <p>
                        📣 Aiutaci a diffondere il progetto, condividi con chi puoi! Grazie per il tuo prezioso contributo.
                        </p>
                    <p>
                        👉 Il team di Fiumicino App
                        </p>
                </div>
            </div>
        </div>
    );
};

