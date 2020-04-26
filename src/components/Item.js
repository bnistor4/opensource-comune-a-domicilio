import React, { useState } from "react";
import iconWeb from "../assets/icons/web.svg";
import iconMail from "../assets/icons/mail.svg";
import iconPhone from "../assets/icons/phone.svg";
import { func } from "prop-types";

export const ListItem = ({
  name,
  location,
  address,
  phone,
  website,
  email,
  description,
  openTime,
  homeDelivery,
  paymentType,
}) => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const status = open ? "open" : "";
  const classes = `list_item ${status}`;

  return (
    <div className={classes}>
      <div className="flex justify-between items-center">
        <h2>{name}</h2>
        <div className="meta">
          <a
            href={website != null ? website : ""}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="" className="icon" src={iconWeb} />
          </a>
          <a href={email != null ? `mailto:${email}` : ""}>
            <img alt="" className="icon" src={iconMail} />
          </a>
          <a href={phone != null ? `tel:${phone}` : ""}>
            <img alt="" className="icon" src={iconPhone} />
          </a>
        </div>
      </div>

      <div className="text">
        <pre>
          <p>
            🏠 Indirizzo: {address} - {location}
          </p>
          <p> {phone != null ? "📞 Telefono: " + phone : ""} </p>
          <p> {website != null ? "🌐 Website: " + website : ""} </p>
          <p> {email != null ? "📧 Email: " + email : ""} </p>
          <p> {openTime != null ? "⏱️ Orari Apertura: " + openTime : ""} </p>
          <p>
            {" "}
            {paymentType != null
              ? "💳 Pagamenti accettati: " + paymentType
              : ""}{" "}
          </p>
          <p>
            <strong>🚚 Consegna a domicilio:</strong> {homeDelivery}
          </p>
          <hr></hr>
          <p>{description}</p>
        </pre>
        <br />
      </div>
      <button onClick={handleClick} className="switcher">
        {open ? "Chiudi la descrizione" : "Leggi la descrizione"}
      </button>
    </div>
  );
};
