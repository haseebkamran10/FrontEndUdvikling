import React from 'react'
import './CheckoutPage2.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const CheckoutPage2 = () => { 
  return (
    <div className='checkout-page-two-cont'  >
      <div className="left-cont">
        <h3>Velkommen til din inkøbskurv</h3>
        <div className='' style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "100px" }} >
          <ShoppingCartOutlinedIcon style={{ scale: "6" }} />
          <p style={{ marginTop: "100px" }} >Der ser ud til.at din kurv er tom start ved at din Shopping ved at tilføje varer til kurven.</p>
        </div>
      </div>
      <div className="right-cont">
        <h4 style={{ textAlign: "center" }} >Oversigt</h4>
        <hr />
        <div style={{ display: 'flex', justifyContent: "space-between" }} >
          <p>Sum</p>
          <p  >0 kr.</p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}  >
          <p>Levering</p>
          <p>0 kr.</p>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }} >
          <p>Total</p>
          <p>0. kr.</p>
        </div>
        <hr />
        <p style={{ textAlign: "center" }} >Du kan indtaste, værdikuponer og vælge din leveringsmuligheder ved kassen </p>
        <button style={{ display:"flex" , justifyContent:"center" , alignItems:"center", width:"100%" , background:"#80808070" , color:"black" , borderRadius:"0px" }} >Ga til kassen</button>
        <img src="/images/mode of payment.png" alt="" style={{margin:"auto"}} />
      </div>
      
    </div>
  )
}

export default CheckoutPage2