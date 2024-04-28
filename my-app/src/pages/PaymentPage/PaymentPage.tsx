import React, { useState,useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CartSummary from '../../components/CartSummary/CartSummary';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';
import { useCart } from '../../CartContext';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';



const stripePromise = loadStripe('your-public-key'); // Replace with your actual public key

interface PaymentFormData {
  phoneNumber: string;
  paymentMethod: 'MobilePay' | 'Card' | 'Invoice';
  fullName?: string;
  cardholderName?: string;
}

const PaymentPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>();
  const navigate = useNavigate();
  const { cartItems, total, discount } = useCart();


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
  


  return (
    <Elements stripe={stripePromise}>
      {loading && <LoadingIndicator />}
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
    
    <img src="src/images/Kort.png" alt="" className="kort-img"  />
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
             
              
              <img src="src/images/MobilePay-logo.png" alt="" className="mobile-pay-img" />
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
                {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}
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
              
              <img src="src/images/invoice.png" alt="Invoice" className="payment-img" />
            </div>
          </div>

          <h3>Tilføj rabatkode</h3>
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
            <div className='btns-cont'>
              <button onClick={()=>{ navigate("/delivery")}} >Tibage til levering</button>
            </div>
          </div>


        </div>

        <div>
          <CartSummary total={total} discount={discount} onGoToPayment={() => { }} />
        </div>
      </form>
    </Elements>
  );
};

export default PaymentPage;
