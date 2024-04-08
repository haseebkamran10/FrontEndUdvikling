import React, { useEffect } from 'react';
import './ContactInfo.css';
import { useForm } from 'react-hook-form';
import CartSummary from '../../components/CartSummary/CartSummary';
import { useCart } from '../../CartContext';

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

  const onSubmit = data => console.log(data);

  const handleGoToPayment = async () => {
    const isValid = await trigger();
    if (isValid) {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="contact-info-container">
      <div className="left-container">
        <h1 className="contact-info-heading">Kontaktoplysninger</h1>
        <form noValidate>
          <div className="input-field-container">
            <input {...register('email', { required: 'E-mail er påkrævet' })} placeholder="Email" />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <div className="input-field-container">
            <input {...register('phone', { required: 'Telefonnummer er påkrævet', pattern: /^\d+$/ })} placeholder="Telefonnummer" />
            {errors.phone && <p className="error-message">{errors.phone.message}</p>}
          </div>
          <h1 className="contact-info-heading">Leveringsadresse</h1>
          <div className="input-field-container">
            <input {...register('firstName', { required: 'Fornavn er påkrævet' })} placeholder="Fornavn" />
            {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
          </div>
          <div className="input-field-container">
            <input {...register('lastName', { required: 'Efternavn er påkrævet' })} placeholder="Efternavn" />
            {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
          </div>
          <div className="input-field-container">
            <input {...register('address', { required: 'Adresse er påkrævet' })} placeholder="Vejnavn og husnummer" />
            {errors.address && <p className="error-message">{errors.address.message}</p>}
          </div>
          <div className="input-field-container">
            <input {...register('zipCode', { required: 'Postnummer er påkrævet', pattern: /^\d{4}$/ })} placeholder="Postnummer" />
            {errors.zipCode && <p className="error-message">{errors.zipCode.message}</p>}
          </div>
          <div className="input-field-container">
            <input {...register('city')} placeholder="By" readOnly />
          </div>
          <div className="input-field-container">
            <input {...register('companyName')} placeholder="Firmanavn (valgfrit)" />
          </div>
          <div className="input-field-container">
            <input {...register('companyVat')} placeholder="CVR-nummer (valgfrit)" />
          </div>
        </form>
      </div>
      <div className="right-container">
        <CartSummary total={total} discount={discount} onGoToPayment={handleGoToPayment} />
      </div>
    </div>
  );
};

export default ContactInfo;
