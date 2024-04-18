import React from 'react';
import { useForm } from 'react-hook-form';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import CartSummary from '../../components/CartSummary/CartSummary';
import {stripePromise} from '../../utils/stripeClient'; // Replace with the correct path
import mobilePayLogo from '../../MobilePay-logo.png'; // Replace with the correct path
import cardLogo from '../../Card.png'; // Replace with the correct path
import './PaymentPage.css';
type PaymentFormData = {
  phoneNumber: string;
  paymentMethod: 'MobilePay' | 'Card' | 'Invoice';
  fullName?: string;
};

const PaymentPage: React.FC = () => {
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
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label>
                <input
                  type="radio"
                  value="MobilePay"
                  {...register('paymentMethod', { required: true })}
                />
                <img src={mobilePayLogo} alt="MobilePay" className="icon-small" />
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="Card"
                  {...register('paymentMethod', { required: true })}
                />
                <img src={cardLogo} alt="Card" className="icon-small" />
              </label>
            </div>
            {selectedPaymentMethod === 'MobilePay' && (
              <div className="input-field-container">
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
            {selectedPaymentMethod === 'Card' && (
              <>
                <div className="input-field-container">
                  <input
                    {...register('fullName', {
                      required: 'Fuldt navn er påkrævet',
                    })}
                    placeholder="Fuldt navn"
                  />
                  {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
                </div>
                <div className="input-field-container">
                  <CardElement/>
                </div>
              </>
            )}
            <button type="submit">Fortsæt til betaling</button>
          </form>
        </div>
        <div >
          <CartSummary total={0} discount={0} onGoToPayment={() => {}} />
        </div> 
      </div>
    </Elements>
  );
}

export default PaymentPage;