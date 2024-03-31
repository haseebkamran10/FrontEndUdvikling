import './LoginPage.css'
import login from '../../login.png'
import CloseIcon from '@mui/icons-material/Close';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const LoginPage =()=>{

return(
  <div className='login-page-cont' style={{display:'flex', flexDirection:'column'}}>
     <div style={{display:'flex'}}>
        <div className='loft-cont'>
            <div>
                <button> Adult</button>
                <button>kids</button>
            </div>
            <img src={login} alt="" />
        </div>
        <div className=' right-cont'>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                        <h3>Log ind</h3>
                         <CloseIcon />
                    </div>
                    <p style={{ textAlign: "left" }} >Log ind pa din konto:</p>
                    <form action="#">
                        <input type="email" name="" id="" placeholder='E-mail' />
                        <input type="password" name="" id="" placeholder='Adgansadasa' />
                    </form>
                    <div className='btns-cont' >
                        <button className='btn1' >Glemet adgangskod</button>
                        <button className='btn2' >Log ind</button>
                    </div>
                    <h3 style={{ textAlign: "left", fontSize: "1.5rem" }} >Ikke medlem endnu</h3>
                    <div className='' style={{ display: "flex", alignItems: "center" }} >
                        <SportsCricketIcon />
                        <p className='' style={{ marginLeft: "15px", color: "gray" }} >Bliv medlem</p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }} >
                        <ErrorOutlineIcon />
                        <p style={{ marginLeft: "15px", color: "gray" }} >Laes om alle fordele</p>
                    </div>                  
        </div>
     </div>
     <h3>ANBEAFALING TI</h3>
  </div>

)

}
export  default LoginPage