<<<<<<< HEAD
import React, { useState,useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> PaymentPage
import { useForm, SubmitHandler } from 'react-hook-form';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartSummary from '../../components/CartSummary/CartSummary';
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
import './PaymentPage.css';
import { useCart } from '../../CartContext';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';
=======

import './PaymentPage.css';
>>>>>>> PaymentPage



const stripePromise = loadStripe('your-public-key'); // Replace with your actual public key

interface PaymentFormData {
  phoneNumber: string;
  paymentMethod: 'MobilePay' | 'Card' | 'Invoice';
  fullName?: string;
  cardholderName?: string;
}

const PaymentPage: React.FC = () => {
<<<<<<< HEAD
  const [loading, setLoading] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>();
  const navigate = useNavigate();
  const { cartItems, total, discount } = useCart();
=======
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>();
  const navigate = useNavigate();
>>>>>>> PaymentPage


  const onSubmit: SubmitHandler<PaymentFormData> = data => {
    console.log(data);
  };
  useEffect(() => {
    console.log("Cart Items in CheckoutPage:", cartItems);
  }, [cartItems]);

  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.value);

    

  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 250);

    return () => clearTimeout(timeout);
  }, []);
  


  const handlePaymentMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.value);

    

  };
  


  return (
    <Elements stripe={stripePromise}>
<<<<<<< HEAD
      {loading && <LoadingIndicator />}
=======
>>>>>>> PaymentPage
      <form className="payment-container" onSubmit={handleSubmit(onSubmit)}>
        <div className="left-container">
          <p className="payment-heading">Betalingsoplysninger</p>
          <p>Vælg betalingsmetode</p>

          <div className='payment-method-cont'>
  <div className={`payment-cont ${selectedPaymentMethod === 'Card' ? 'selected' : ''}`}>
    <div>
    <input
      type="radio"
      value="Card"
      id="paymentMethodCard"
      {...register("paymentMethod", { required: true })}
      onChange={handlePaymentMethodChange}
    />
    <label htmlFor="paymentMethodCard">Kort</label>
    </div>
    
<<<<<<< HEAD
    <img src="src/images/Kort.png" alt="" className="kort-img"  />
=======
    <img src="/images/Kort.png" alt="" className="kort-img"  />
>>>>>>> PaymentPage
    </div>
    {selectedPaymentMethod === 'Card' && (
                <div className="card-inputs">
                  <CardElement />
                </div>
              )}
           
            <div className={`payment-cont ${selectedPaymentMethod === 'MobilePay' ? 'selected' : ''}`}>
             <div>
             <input
                type="radio"
                value="MobilePay"
                id="paymentMethodMobilePay"
                {...register("paymentMethod")}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="paymentMethodMobilePay">MobilePay</label>
             </div>
             
              
<<<<<<< HEAD
              <img src="src/images/MobilePay-logo.png" alt="" className="mobile-pay-img" />
=======
              <img src="/images/mobilePay.png" alt="" className="mobile-pay-img" />
>>>>>>> PaymentPage
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
              <div>
              <input
                type="radio"
                value="Invoice"
                id="paymentMethodInvoice"
                {...register("paymentMethod")}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="paymentMethodInvoice">Invoice</label>
              </div>
              
<<<<<<< HEAD
              <img src="src/images/invoice.png" alt="Invoice" className="payment-img" />
            </div>
          </div>

          <h3>Tilføj rabatkode</h3>
=======
              <img src="/images/invoice.png" alt="Invoice" className="payment-img" />
            </div>

            <div className='payment-cont'>
              <div>
              <input
                type="radio"
                value="ViaBill"
                id="paymentMethodViaBill"
                {...register("paymentMethod")}
                onChange={handlePaymentMethodChange}
              />
              <label htmlFor="paymentMethodViaBill">ViaBill</label>
              </div>
              
              <img src="/images/Viabill.png" alt="" className="viabill-img" />
            </div>
          </div>

          <h3>Tilføj rabatkode (optional)</h3>
>>>>>>> PaymentPage
          <div className='gift-card-cont' >
            <input type="text" name="" id="" className='' />
            <button>Indløs</button>
          </div>

          <div className='choose-address-cont ' >
            <h3>Faktureringsadresse </h3>
            <p>Vælg faktureringsadresse</p>
            <div className='address-options  ' >
              <div className='' ><input type="radio" name="addressCode" id="adress" /> <label htmlFor="adress"> Samme adresses leveringsadressen </label></div>
              <div className='' style={{ borderBottom: "none" }}  ><input type="radio" name="addressCode" id="adress" /> <label htmlFor="adress">Brug en anden faktureringsadresse</label></div>
            </div>
<<<<<<< HEAD
            <div className='btns-cont'>
              <button onClick={()=>{ navigate("/delivery")}} >Tibage til levering</button>
=======
            <div className='btns-cont' >
              <button  style={{ background: "none", color: "black" }} onClick={()=>{ navigate("/deliverypage")}} >Tibage til levering</button>
>>>>>>> PaymentPage
            </div>
          </div>


        </div>

        <div>
<<<<<<< HEAD
          <CartSummary total={total} discount={discount} onGoToPayment={() => { }} />
=======
          <CartSummary total={0} discount={0} onGoToPayment={() => { }} />
>>>>>>> PaymentPage
        </div>
      </form>
    </Elements>
  );
};

export default PaymentPage;
