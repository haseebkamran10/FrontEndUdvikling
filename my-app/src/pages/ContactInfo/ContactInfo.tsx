import React, { useEffect, useState, useCallback } from 'react';
import './ContactInfo.css';
import { useForm } from 'react-hook-form';
import CartSummary from '../../components/CartSummary/CartSummary';
import { useCart } from '../../CartContext';
import { useNavigate } from 'react-router-dom';
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator';

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

const ContactInfo: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const formMethods = useForm<FormData>();
  const { register, handleSubmit, setValue, watch, trigger, formState: { errors } } = formMethods;
  const { total, discount } = useCart();
  const goToProductsPage = () => {
    navigate('/productspage');
  };
  const goToDeliveryPage = () => {
    navigate('/delivery'); 
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleZipCodeChange = async (zipCode: string) => {
    if (zipCode.length === 4) {
      try {
        const response = await fetch(`https://api.dataforsyningen.dk/postnumre/${zipCode}`);
        if (!response.ok) throw new Error('Invalid ZIP code');
        const data = await response.json();
        setValue('city', data.navn);
      } catch (error) {
        console.error('Error fetching city name:', error);
        setValue('city', ''); 
      }
    } else {
      setValue('city', '');
    }
  };

  // Watching zip code changes
  const zipCodeValue = watch('zipCode');
  useEffect(() => {
    handleZipCodeChange(zipCodeValue);
  }, [zipCodeValue, handleZipCodeChange]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 250);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach(key => {
        setValue(key as keyof FormData, parsedData[key]);
      });
    }
    setLoading(false);
  }, [setValue]);

  const onSubmit = useCallback((data: FormData) => {
    console.log('Form Data:', data);
    localStorage.setItem('formData', JSON.stringify(data));
  }, []);

  const handleGoToPayment = async () => {
    const isValid = await trigger();
    if (isValid) {
      handleSubmit(onSubmit)();
    }
  };



  return (
    <div className="contact-info">
      {loading && <LoadingIndicator />}
      <div className="left-container">
        <h2 className="contact-info-heading">Kontaktoplysninger</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="input-field-box-email">
            <input {...register('email', { required: 'E-mail er påkrævet' })} placeholder="Email" />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="input-field-box-phone">
            <input type="tel"{...register('phone', { required: 'Telefonnummer er påkrævet', pattern: {
              value: /^[0-9]+$/,
              message: 'Ugyldig telefonnummer'
            }})} placeholder="Telefonnummer" />
            {errors.phone && <p className="error-message">{errors.phone.message}</p>}
          </div>
          <h2 className="contact-info-heading">Leveringsadresse</h2>
          <div className="input-field-box-firstName">
            <input {...register('firstName', { required: 'Fornavn er påkrævet' })} placeholder="Fornavn" />
            {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
          </div>
          <div className="input-field-box-lastName">
            <input {...register('lastName', { required: 'Efternavn er påkrævet' })} placeholder="Efternavn" />
            {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
          </div>
          <div className="input-field-box-address">
            <input {...register('address', { required: 'Adresse er påkrævet' })} placeholder="Vejnavn og husnummer" />
            {errors.address && <p className="error-message">{errors.address.message}</p>}
          </div>
          <div className="input-field-box-zipCode">
            <input {...register('zipCode', { required: 'Postnummer er påkrævet', pattern: /^\d{4}$/ })} placeholder="Postnummer" />
            {errors.zipCode && <p className="error-message">{errors.zipCode.message}</p>}
          </div>
          <div className="input-field-box-city">
            <input {...register('city')} placeholder="By" readOnly />
          </div>
          <div className="input-field-box-companyName">
            <input {...register('companyName')} placeholder="Firmanavn (valgfrit)" />
          </div>
          
          <div className="input-field-box-CVR">
            <input {...register('companyVat')} placeholder="CVR-nummer (valgfrit)" />
          </div>
       
        <div className="checkout-button">
        <button type="submit" className="checkout-button-1" onClick={goToProductsPage}>Tilbage</button>
        <button type="submit" className="checkout-button-2" onClick={goToDeliveryPage}>Fortsæt</button>
        </div>
      </form>
      
      </div>
      

     
        <CartSummary total={total} discount={discount} onGoToPayment={handleGoToPayment} />
      
      
    </div>
  );
};

export default ContactInfo;