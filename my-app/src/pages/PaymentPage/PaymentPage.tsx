import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import CartSummary from '../../components/CartSummary/CartSummary';
import { stripePromise } from '../../utils/stripeClient'; // Replace with the correct path
import { useNavigate } from 'react-router-dom';

import './PaymentPage.css';
type PaymentFormData = {
  phoneNumber: string;
  paymentMethod: 'MobilePay' | 'Card' | 'Invoice';
  fullName?: string;
};


const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [paymentChoice, setPaymentChoice] = useState("")
  const { register, handleSubmit, watch, formState: { errors } } = useForm<PaymentFormData>();
  const selectedPaymentMethod = watch('paymentMethod');

  const onSubmit = (data: PaymentFormData) => {
    console.log(data);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="payment-container">
        <div className="left-container">
          <h1 className="payment-heading">Betaling</h1>
          <p>Vælg betalingsMetode</p>

          <div className='payment-method-cont' >
            <div className='payment-cont' >
              <div>
                <input type="radio" name="paymentmethod" id="" onClick={() => { setPaymentChoice("MobilePay") }} />
                <label htmlFor="">Mobile</label>
              </div>
              <img src="/images/mobilePay.png" alt="" className="mobile-pay-img" />
            </div>
            <div className='payment-cont'>
              <div>
                <input type="radio" name="paymentmethod" id="" onClick={() => { setPaymentChoice("KortPay") }} />
                <label htmlFor="">Kort</label>
              </div>
              <img src="/images/Kort.png" alt="" className="kort-img" />
            </div >
            <div className='payment-cont'>
              <div>
                <input type="radio" name="paymentmethod" id="" />
                <label htmlFor="">Klarna</label>
              </div>
              <img src="/images/Klarna.png" alt="" className="klarna-img" />
            </div>
            <div className='payment-cont' style={{ borderBottom: "none" }}>
              <div>
                <input type="radio" name="paymentmethod" id="" onClick={()=>setPaymentChoice("ViaBillPay")} />
                <label htmlFor="">ViaBill</label>
              </div>
              <img src="/images/Viabill.png" alt="" className="viabill-img" />
            </div>

          </div>
          <div className='mobile-pay-cont' style={paymentChoice == "MobilePay" ? { display: "block" } : { display: "none" }} >
            <h3 style={{ fontWeight: "bolder", fontSize: "1.5rem" }} >Indtast mobilnumer</h3>
            <p>Vi Sender en bekeæftelseskod</p>
            <div>
              <p style={{ fontWeight: "bolder", fontSize: "1.3rem" }} >Mobilnummer</p>
              <div className='mobile-num-cont' >
                <p>+45</p>
                <input type="number" name="" id="" />
              </div>
            </div>
            <button>Bekraft nummer</button>
          </div>

          <div className='kort-pay' style={paymentChoice == "KortPay" ? { display: "block" } : { display: "none" }}  >
            <div>
              <p style={{fontWeight:"bolder" , fontSize:"1.2rem"}} >Kortnummer</p>
              <input type="number" style={{width:"95%" , padding:"10px" , fontSize:"1.3rem" }} />
            </div>

            <div style={{display:"flex" , justifyContent:"space-between"}} >
              <div>
                <p style={{fontWeight:"bolder" , fontSize:"1.2rem"}}>Udlobasto</p>
                <input type="number" name="" id="" style={{padding:"10px" , width:"15vw" , fontSize:"1.3rem"
                }}  />
              </div>
              <div>
                <p style={{fontWeight:"bolder" , fontSize:"1.2rem"}}>kontrolcifre</p>
                <input type="text" name="" id="" style={{padding:"10px" , width:"15vw" , fontSize:"1.3rem"}}  />
              </div>
            </div>

            <button style={{width:"100%" , marginTop:"20px" , background:"grey" , color:"white"}} >Betal </button>
            <p style={{textAlign:"center" , color:"blue"}} >Beløbet bliver reservert på din bankkonto</p>
          </div>

          <div className='mobile-pay-cont' style={paymentChoice == "ViaBillPay" ? { display: "block" } : { display: "none" }} >
            <h3 style={{ fontWeight: "bolder", fontSize: "1.5rem" }} >Indtast mobilnumer</h3>
            <p>Vi Sender en bekeæftelseskod</p>
            <div>
              <p style={{ fontWeight: "bolder", fontSize: "1.3rem" }} >Mobilnummer</p>
              <div className='mobile-num-cont' >
                <p>+45</p>
                <input type="number" name="" id="" />
              </div>
            </div>
            <button>Bekraft nummer</button>
          </div>


          <h3>Tilføj rabatkode (optional)</h3>
          <div className='gift-card-cont' >
            <input type="text" name="" id="" className='' />
            <button>Indløs</button>
          </div>



          <div className='choose-address-cont ' >
            <h3>Faktureringsadresse </h3>
            <p>vælg faktureringsadresse</p>
            <div className='address-options  ' >
              <div className='' ><input type="radio" name="addressCode" id="adress" /> <label htmlFor="adress"> Samme adresses leveringsadressen </label></div>
              <div className='' style={{ borderBottom: "none" }}  ><input type="radio" name="addressCode" id="adress" /> <label htmlFor="adress">Brug en anden faktureringsadresse</label></div>
            </div>
            <div className='btns-cont' >
              <button style={{ background: "none", color: "black" }} onClick={() => { navigate("/delivery") }} >Tibage til levering</button>
              <button>Betal nu</button>
            </div>
          </div>


        </div>

        <div >
          <CartSummary total={0} discount={0} onGoToPayment={() => { }} />
        </div>
      </div>
    </Elements>
  );
}

export default PaymentPage;