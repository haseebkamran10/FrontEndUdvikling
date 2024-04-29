import React from 'react';
import './OrderConfirmation.css';



const ConfirmationPage: React.FC = () => {
  return (
    <div className="confirmation-page">
      <h1>Kære Kunde,</h1>
      <p>

Tak for din bestilling hos Nordic Cricket

Vi har modtaget din ordre og er i gang med at behandle den. Du vil modtage en e-mail med en leveringsbekræftelse, så snart din ordre er sendt.

Næste skridt:
Du kan forvente, at din ordre bliver leveret inden for [antal dage] arbejdsdage. Vi sender dig trackinginformation, så du kan følge din pakkes rejse.

Hvis du har spørgsmål eller behov for yderligere assistance, er du altid velkommen til at kontakte vores kundeservice på kundeservice@nordiccricket.nu eller 80 40 40 40.

Vi ser frem til at levere din ordre og håber, du bliver tilfreds med dit køb.

Tak fordi du valgte Nordic Cricket

Med venlig hilsen,

Nordic Cricket Kundeservice</p>

    </div>
  );
};

export default ConfirmationPage;