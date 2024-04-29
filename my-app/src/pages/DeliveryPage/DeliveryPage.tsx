/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect ,useState,useCallback } from 'react';
import './Deliverypage.css';
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


const DeliveryPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const goToPaymentPage = () => {
    navigate('/paymentpage'); 
  };

  const goToContactInfo = () => {
    navigate('/contactinfo');
  };
  const { register, handleSubmit, setValue, watch, trigger, formState: { errors } } = useForm<FormData>();
  const { total, discount } = useCart();

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
    <div className="contact-info-container">
      {loading && <LoadingIndicator />}
      <div className="left-container-delivery">
        <form onSubmit={handleSubmit(onSubmit)}noValidate>
          <h2 className="contact-info-heading">Leveringsadresse</h2>
          <div className="input-field-container-firstname">
            <input type="text" {...register('firstName', { required: 'Fornavn er påkrævet',  pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Fornavn må kun indeholde bogstaver'
              }})} placeholder="Fornavn" />
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
        <div>
        <button className="checkout-button-1" onClick={goToContactInfo}>Tilbage</button>
        <button className="checkout-button-2"onClick={goToPaymentPage}>Fortsæt</button>
      </div>
      </div>
      <div>
        <CartSummary total={total} discount={discount} onGoToPayment={handleGoToPayment} />
      </div>
    </div>
  );
};

export default DeliveryPage;