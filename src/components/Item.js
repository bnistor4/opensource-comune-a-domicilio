import React, { useState } from "react";
import iconWeb from "../assets/icons/web.svg";
import iconMail from "../assets/icons/mail.svg";
import iconPhone from "../assets/icons/phone.svg";
import iconSocial from "../assets/icons/social.svg";

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
  facebook,
}) => {
  const [open, setOpen] = useState(false);
  var websiteDescription, emailDescription, phoneDescription, socialDescription;

  function handleClick() {
    setOpen(!open);
  }

  const status = open ? "open" : "";
  const classes = `list_item ${status}`;

  if (website !== null) {
    websiteDescription = <a href={website} target="_blank" rel="noopener noreferrer"> <img alt="" className="icon" src={iconWeb} /></a>;
  }

  if (email !== null) {
    emailDescription = <a href={`mailto:${email}`}><img alt="" className="icon" src={iconMail} /></a>;
  }

  if (phone !== null) {
    phoneDescription = <a href={`tel:${phone}`}><img alt="" className="icon" src={iconPhone} /></a>;
  }

  if (facebook !== null) {
    socialDescription = <a href={facebook}><img alt="" className="icon" src={iconSocial} /></a>;
  }

  return (
    <div className={classes}>
      <div className="flex justify-between items-center">
        <h2>{name}</h2>
        <div className="meta">
          {socialDescription}
          {websiteDescription}
          {emailDescription}
          {phoneDescription}
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
          <p> {paymentType != null ? "💳 Pagamenti accettati: " + paymentType : ""}</p>
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
