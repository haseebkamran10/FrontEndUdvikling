import React, { useEffect } from 'react';
import './Deliverypage.css';
import { useForm } from 'react-hook-form';
import CartSummary from '../../components/CartSummary/CartSummary';
import { useCart } from '../../CartContext';
import { useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  address: string;
  zipCode: string;
  city: string;
  companyName?: string;
  companyVat?: string;
};

/**
 * Renders the contact information form for the delivery page.
 * This component is responsible for collecting the user's contact details such as name, email, phone, and address.
 * The form data is managed using the `useForm` hook from the `react-hook-form` library.
 */
const DeliveryPage: React.FC = () => {
  const navigate = useNavigate();
  const goToPaymentPage = () => {
    navigate('/paymentpage'); 
  };

  const goToContactInfo = () => {
    navigate('/contactinfo');
  };
  const { register, handleSubmit, setValue, watch, trigger, formState: { errors } } = useForm<FormData>();
  const { total, discount } = useCart();

  useEffect(() => {
    const zipCode = watch('zipCode');
    if (zipCode && zipCode.length === 4) {
      fetch(`https://api.dataforsyningen.dk/postnumre/${zipCode}`)
        .then(response => response.json())
        .then(data => setValue('city', data.navn))
        .catch(error => console.error('Error fetching city name:', error));
    }
  }, [watch, setValue]);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  const handleGoToPayment = async () => {
    const isValid = await trigger();
    if (isValid) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="contact-info-container">
      <div className="left-container">
        <form noValidate>
          <h1 className="contact-info-heading">Leveringsadresse</h1>
          <div className="input-field-container-firstname">
            <input {...register('firstName', { required: 'Fornavn er påkrævet' })} placeholder="Fornavn" />
            {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
          </div>
          <div className="input-field-container-lastname">
            <input {...register('lastName', { required: 'Efternavn er påkrævet' })} placeholder="Efternavn" />
            {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
          </div>
          <div className="input-field-container-adress">
            <input {...register('address', { required: 'Adresse er påkrævet' })} placeholder="Vejnavn og husnummer" />
            {errors.address && <p className="error-message">{errors.address.message}</p>}
          </div>
          <div className="input-field-container-zip">
            <input {...register('zipCode', { required: 'Postnummer er påkrævet', pattern: /^\d{4}$/ })} placeholder="Postnummer" />
            {errors.zipCode && <p className="error-message">{errors.zipCode.message}</p>}
          </div>
          <div className="input-field-container-city">
            <input {...register('city')} placeholder="By" readOnly />
          </div>
          <div className="input-field-container-companyName">
            <input {...register('companyName')} placeholder="Firmanavn (valgfrit)" />
          </div>
          <div className="input-field-container-CVR">
            <input {...register('companyVat')} placeholder="CVR-nummer (valgfrit)" />
          </div>
        </form>
        <div className="checkout-button">
        <button onClick={goToContactInfo}>Tilbage</button>
        <button onClick={goToPaymentPage}>Fortsæt</button>
      </div>
      </div>
      <div>
        <CartSummary total={total} discount={discount} onGoToPayment={handleGoToPayment} />
      </div>
    </div>
  );
};

export default DeliveryPage;