👋  Siamo un gruppo di ragazzi che vivono a Fiumicino e che hanno a cuore la propria città.

Durante il periodo Covid-19 ad inizio 2020 abbiamo voluto realizzare il portale fiumicinoadomicilio.it, che offre alle attività produttive ancora aperte del nostro Comune di poter continuare a lavorare, offrendo prodotti e servizi a tutti noi che dobbiamo restare a casa. Abbiamo voluto dare il nostro piccolo contributo a supporto della comunità.

Data la grande risposta da parte di attività e cittadini anche di altri comuni, abbiamo deciso di rendere il progetto OpenSource.

L’iniziativa è completamente gratuita e senza alcun fine economico, commerciale, politico o di qualsiasi altro tipo.

📣  Aiutaci a diffondere il progetto, condividi con chi puoi! Grazie per il tuo prezioso contributo.

👉  Il team di Fiumicino App


## 🔎 Come replicare il progetto

Per prima cosa clona il progetto con questo comando sul terminale:
```git clone https://github.com/FiumicinoApp/opensource-comune-a-domicilio.git```

Ora hai bisogno di installare **NPM**, trovi tutte le informazioni qui: (https://www.npmjs.com/).

Adesso devi installare le *dipendenze node* lanciando questo comando dalla cartella di progetto:
``npm i``

Per visionare il progetto sul tuo computer, lancia questo comando:
```npm run start```

Ecco fatto! Ora potrai vedere la tua versione di Comune a Domicilio a questo indirizzo:
```http://localhost:3000```

## ✍🏼 Come inserire le attività

Per inserire le attività all'interno di Comune a Domicilio crea un nuovo foglio SpreadSheet sulla identico a questo:(https://docs.google.com/spreadsheets/d/1ORBU2WqDBQvwZsNO2U9QobzbyvgQ48odu1knZ4O2Wkg/edit#gid=0)

Dopodiché clicca sul tasto condividi in alto a destra, premi "Avanzate" e in "Chi ha accesso" Seleziona "Attivo - Pubblico sul Web".

Fatto questo clicca su "File > Pubblica sul web", seleziona "Foglio 1" e "Pagina Web" e premi pubblica.

Ora copia l'url del tuo foglio spreadsheet, sarà tipo questo:
```https://docs.google.com/spreadsheets/d/1ORBU2WqDBQvwZsNO2U9QobzbyvgQ48odu1knZ4O2Wkg/edit#gid=0```

Dovrai prendere il codice compreso tra /d/ e /edit, nel nostro caso:
```1ORBU2WqDBQvwZsNO2U9QobzbyvgQ48odu1knZ4O2Wkg```

Ora incolla questo codice nel tuo progetto, nel file:
```src/constants.js```
nella voce "ID_GOOGLE_SPREADSHEET".

Ora la tua versione di Comune a Domicilio sarà agganciata al tuo nuovo Foglio spreadsheet.


## ✨Come personalizzare la tua versione di Comune a Domicilio

Inserisci il nome del tuo progetto nel file:
```src/constants.js```
nella chiave "APP_NAME".
Inoltre potrai inserire anche una *tua* Privacy Policy, sostituendola al "#" alla chiave "PRIVACY_POLICY_URL"

## 🚀 Mettere online il tuo progetto

Per mettere online il tuo progetto, lancia il comando 
```npm run build```
e carica il contenuto della nuova cartella "build" su un hosting a tuo piacimento 😁
