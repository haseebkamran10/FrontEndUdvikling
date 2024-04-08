import React, { useEffect } from 'react';
import './ContactInfo.css';
import { useForm } from 'react-hook-form';
import CartSummary from '../../components/CartSummary/CartSummary';
import { useCart } from '../../CartContext'; // Adjust the import path as necessary

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
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>();
  const { total, discount } = useCart(); // Use total and discount from CartContext

  // Watch for changes in the zipCode field
  const zipCode = watch('zipCode');

  useEffect(() => {
    if (zipCode && zipCode.length === 4) {
      // Fetch city name based on the zip code
      fetch(`https://api.dataforsyningen.dk/postnumre/${zipCode}`)
        .then(response => response.json())
        .then(data => {
          if (data.navn) {
            setValue('city', data.navn);
          } else {
            console.error('City not found for the provided zip code.');
          }
        })
        .catch(error => console.error('Error fetching city name:', error));
    }
  }, [zipCode, setValue]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the data to the backend
  };

  return (
    <div className="contact-info-container">
      <div className="left-container">
        <h1 className="contact-info-heading">Kontaktoplysninger</h1>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="input-field-container">
            <input {...register('email', { required: 'E-mail er påkrævet' })} placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="input-field-container">
            <input {...register('phone', { required: 'Telefonnummer er påkrævet' })} placeholder="Telefonnummer" />
            {errors.phone && <p>{errors.phone.message}</p>}
          </div>

          <h1 className="contact-info-heading">Leveringsadresse</h1>

          <div className="input-field-container">
            <input {...register('firstName', { required: 'Fornavn er påkrævet' })} placeholder="Fornavn" />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>

          <div className="input-field-container">
            <input {...register('lastName', { required: 'Efternavn er påkrævet' })} placeholder="Efternavn" />
            {errors.lastName && <p>{errors.lastName.message}</p>}
          </div>

          <div className="input-field-container">
            <input {...register('address', { required: 'Adresse er påkrævet' })} placeholder="Vejnavn og husnummer" />
            {errors.address && <p>{errors.address.message}</p>}
          </div>

          <div className="input-field-container">
            <input {...register('zipCode', { required: 'Postnummer er påkrævet' })} placeholder="Postnummer" />
            {errors.zipCode && <p>{errors.zipCode.message}</p>}
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
          
          <button type="submit" className="submit-button">Færdiggør køb</button>
        </form>
      </div>

      <div className="right-container">
        <CartSummary 
          total={total} 
          discount={discount} 
          onGoToPayment={() => {/* Navigation logic here, such as navigate('/payment') */}} 
        />
      </div>
    </div> 
  );
};

export default ContactInfo;
