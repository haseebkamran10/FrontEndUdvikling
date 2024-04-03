import './LoginPage.css';
import CloseIcon from '@mui/icons-material/Close';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const LoginPage = () => {
  return (
    <div className='login-page-cont' style={{display: 'flex', flexDirection: 'column'}}>
      <div className='right-cont'>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <h3>Log ind</h3>
          <CloseIcon />
        </div>
        <p style={{textAlign: "left"}}>Log ind på din konto:</p>
        <form action="#">
          <input type="email" name="" id="" placeholder='E-mail' />
          <input type="password" name="" id="" placeholder='Adgangskode' />
        </form>
        <div className='btns-cont'>
          <button className='btn1'>Glemt adgangskode</button>
          <button className='btn2'>Log ind</button>
        </div>
        <h3 style={{textAlign: "left", fontSize: "1.0rem"}}>Ikke medlem endnu</h3>
        <div style={{display: "flex", alignItems: "center"}}>
          <SportsCricketIcon />
          <p style={{marginLeft: "15px", color: "gray"}}>Bliv medlem</p>
        </div>
        <div style={{display: "flex", alignItems: "center"}}>
          <ErrorOutlineIcon />
          <p style={{marginLeft: "15px", color: "gray"}}>Læs om alle fordele</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
