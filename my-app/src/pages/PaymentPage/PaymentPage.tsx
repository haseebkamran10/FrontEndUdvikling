import React from 'react';
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
                <input type="radio" name="paymentmethod" id="" />
                <label htmlFor="">Mobile</label>
              </div>
              <img src="/images/mobilePay.png" alt="" className="mobile-pay-img" />
            </div>
            <div className='payment-cont'>
              <div>
                <input type="radio" name="paymentmethod" id="" />
                <label htmlFor="">Kort</label>
              </div>
              <img src="/images/Kort.png" alt="" className="kort-img"  />
            </div >
            <div className='payment-cont'>
              <div>
                <input type="radio" name="paymentmethod" id="" />
                <label htmlFor="">Klarna</label>
              </div>
              <img src="/images/Klarna.png" alt="" className="klarna-img"/>
            </div>
            <div className='payment-cont' style={{ borderBottom: "none" }}>
              <div>
                <input type="radio" name="paymentmethod" id="" />
                <label htmlFor="">ViaBill</label>
              </div>
              <img src="/images/Viabill.png" alt="" className="viabill-img" />
            </div>

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
              <button  style={{ background: "none", color: "black" }} onClick={()=>{ navigate("/delivery")}} >Tibage til levering</button>
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