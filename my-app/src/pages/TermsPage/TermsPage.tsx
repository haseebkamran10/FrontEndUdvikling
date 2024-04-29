import React from 'react';
import './TermsPage.css';

const TermsPage: React.FC = () => {
  return (
    <div className="terms-page">
      <h1>Handelsbetingelser</h1>

      <h2>Indledning</h2>
      <p>
        NordicCricket.nu ejes og drives af Nordic Cricket A/S, CVR-nr. 2233223322, beliggende i København. 
        Disse betingelser gælder for alle køb på NordicCricket.nu til levering i Danmark, undtagen Grønland og Færøerne.
      </p>

      <h2>Priser og betaling</h2>
      <p>
        Alle priser på hjemmesiden er inklusive 25% dansk moms. Eventuelle fragtomkostninger vil blive vist i indkøbskurven 
        og ved kassen. Vi accepterer betaling med de mest almindelige kreditkort og via MobilePay.
      </p>

      <h2>Levering</h2>
      <p>
        Vi tilbyder levering indenfor 3-5 arbejdsdage. For særlige varer eller forsendelsesområder kan længere leveringstider 
        og særlige fragtpriser gælde.
      </p>

      <h2>Fortrydelsesret</h2>
      <p>
        Du har 14 dages fortrydelsesret fra den dag, du modtager dine varer. For at gøre brug af denne ret skal du informere 
        os inden fristens udløb.
      </p>

      <h2>Reklamation og mangelsregler</h2>
      <p>
        Du har 24 måneders reklamationsret fra varens modtagelse. Hvis der opstår en fejl eller mangel ved produktet, vil du 
        kunne få det ombyttet, repareret eller få pengene tilbage afhængigt af den specifikke situation.
      </p>

      <h2>Persondata</h2>
      <p>
        For at du kan indgå aftale med os på NordicCricket.nu, har vi brug for følgende informationer: Navn, adresse, 
        telefonnr. og e-mailadresse. Vi foretager registreringen af dine personoplysninger med det formål at kunne levere 
        varen til dig.
      </p>

      <h2>Klageadgang</h2>
      <p>
        Hvis du vil indgive en klage over dit køb, skal du rette henvendelse til kundeservice@nordiccricket.nu . 
        Hvis det ikke lykkes os at finde en løsning, kan du indgive en klage til relevante nævn på området, såfremt 
        betingelserne herfor er opfyldt.
      </p>

      <h2>Standardfortrydelsesformular</h2>
      <p>
        Denne formular udfyldes og returneres kun, hvis fortrydelsesretten gøres gældende. Send til e-mail:  kundeservice@nordiccricket.nu 
        eller postadresse: Lautrupvang 15, 2750 Ballerup.
      </p>
      <p>
        "Jeg meddeler herved, at jeg ønsker at fortryde mit køb af følgende varer/tjenesteydelser."
      </p>
      
    </div>
  );
};

export default TermsPage;
