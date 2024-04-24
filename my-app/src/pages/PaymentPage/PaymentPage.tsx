import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartSummary from '../../components/CartSummary/CartSummary';
import { useNavigate } from 'react-router-dom';

import './PaymentPage.css';



const stripePromise = loadStripe('your-public-key'); // Replace with your actual public key

interface PaymentFormData {
  phoneNumber: string;
  paymentMethod: 'MobilePay' | 'Card' | 'Invoice';
  fullName?: string;
  cardholderName?: string;
}

const PaymentPage: React.FC = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>();
  const navigate = useNavigate();


  const onSubmit: SubmitHandler<PaymentFormData> = data => {
    console.log(data);
  };

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.value);

    

  };
  


  return (
    <Elements stripe={stripePromise}>
      <form className="payment-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="left-container">
          <h1 className="payment-heading">Betalingsoplysninger</h1>
          <p>Vælg betalingsmetode</p>

          <div className='payment-method-cont'>
  <div className={`payment-cont ${selectedPaymentMethod === 'Card' ? 'selected' : ''}`}>
    <input
      type="radio"
      value="Card"
      id="paymentMethodCard"
      {...register("paymentMethod", { required: true })}
      onChange={handlePaymentMethodChange}
    />
    <label htmlFor="paymentMethodCard">Kort</label>
    <img src="/images/Kort.png" alt="" className="kort-img"  />
    </div>
    {selectedPaymentMethod === 'Card' && (
                <div className="card-inputs">
                  <CardElement />
                </div>
              )}
           
            <div className={`payment-cont ${selectedPaymentMethod === 'MobilePay' ? 'selected' : ''}`}>
              <input
                type="radio"
                value="MobilePay"
                id="paymentMethodMobilePay"
                {...register("paymentMethod")}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="paymentMethodMobilePay">MobilePay</label>
              <img src="/images/mobilePay.png" alt="" className="mobile-pay-img" />
            </div>
            {selectedPaymentMethod === 'MobilePay' && (
              <div className="input-mobilpay">
                <input
                  {...register('phoneNumber', {
                    required: 'Telefonnummer er påkrævet',
                    pattern: {
                      value: /^\d{8}$/,
                      message: "Telefonnummer skal være 8 cifre"
            
                    }
                  })}
                  placeholder="Telefonnummer for MobilePay"
                />
                {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}style={backgroundColor='none'}</p>}
              </div>
            )}

            <div className='payment-cont'>
              <input
                type="radio"
                value="Invoice"
                id="paymentMethodInvoice"
                {...register("paymentMethod")}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="paymentMethodInvoice">Invoice</label>
              <img src="/images/invoice.png" alt="Invoice" className="payment-img" />
            </div>

            <div className='payment-cont'>
              <input
                type="radio"
                value="ViaBill"
                id="paymentMethodViaBill"
                {...register("paymentMethod")}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="paymentMethodViaBill">ViaBill</label>
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
            </div>
          </div>


        </div>

        <div>
          <CartSummary total={0} discount={0} onGoToPayment={() => { }} />
        </div>
      </form>
    </Elements>
  );
};

export default PaymentPage;
