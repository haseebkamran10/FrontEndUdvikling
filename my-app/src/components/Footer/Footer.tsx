import '../Footer/Footer.css'
const Footer : React.FC= () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Nordic Cricket</h3>
        <p>Nordic Cricket tilbyder et omfattende udvalg af cricketudstyr og -tilbehør, der imødekommer spillere på alle niveauer fra begyndere til avancerede. 
          Vi forstår vigtigheden af kvalitet og holdbarhed i cricketudstyr og er dedikeret til at levere produkter, der både forbedrer spiloplevelsen og sikrer spillerens sikkerhed.</p>
      </div>
      <div className="footer-column">
        <h3>Kundeservice</h3>
        <p>Se åbningstider </p>
        <p>Mail:  kundeservice@nordiccricket.nu</p>
        <p>Telefon:  60 50 40 68</p>
        <p>Køb gavekort </p>
        <p>Job</p>
      </div>
      <div className="footer-column">
        <h3>Hjælp</h3>
        <p>Levering og Tracking</p>
          <p>Reklamation</p>
          <p>Retunering</p> 
          <p>Gavekort</p>
          <p>Ørige spørgsmål</p>
          <p>Fortrydelseret</p>
          <p>Handelbetigelser</p>
          <p>Om vores priser</p>
          <p>Click & Collect </p>
      </div>
      <div className="footer-column">
        <h3>Mere fra Nordic Cricket</h3>
        <p>Bliv medlem </p>
        <p>Bonus</p>
        <p>Kvitteringer</p>
        <p>Afmeld nyhedsbrev / SMS  </p>
        <p>Hjælp til log ind </p>
        <p>Om Nordic Cricket </p>
      </div>
      <div className="site-footer">NordicCricket - Lautrupvang 15, 2750 Ballerup - CVR: 2233223322 | OBS! Din bestilling er først bindende, når vi har bekræftet din ordre.</div>
    </footer>
  );
};

export default Footer;