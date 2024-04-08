import React from 'react';
import './ContactInfo.css'; // Make sure this path is correct based on your project structure
import CartSummary from '../../components/CartSummary/CartSummary';


const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="left-container">
        <h1 className="contact-info-heading">Kontaktoplysninger</h1>
        <div className="input-field-container">
          <input type="Email" placeholder="Email" /> {/* Example input field */}
        </div>
        <div className="input-field-container">
          <input type="Telefon" placeholder="Telefonnummer" /> {/* Example input field */}
        </div>
        <h1 className="contact-info-heading">Leveringsadresse</h1>
        <div className="input-field-container">
          <input type="Fornavn" placeholder="Fornavn" /> {/* Example input field */}
        </div>
        <div className="input-field-container">
          <input type="Efternavn" placeholder="Efternavn" /> {/* Example input field */}
        </div>
        <div className="input-field-container">
          <input type="Adresse" placeholder="Vejnavn og husnummer" /> {/* Example input field */}
        </div>
        <div className="input-field-container">
          <input type="Postnummer" placeholder="Postnummer" /> {/* Example input field */}
        </div>
        <div className="input-field-container">
          <input type="Firma" placeholder="Firmanavn (valgfrit)" /> {/* Example input field */}
        </div>
        <div className="input-field-container">
          <input type="CVR-nummer" placeholder="CVR-nummer (valgfrit)" /> {/* Example input field */}
        </div>
      </div>
      <div className="right-container">
        {/* Content for the right container goes here */}
      </div>
    </div>
  );
}

export default ContactInfo;
