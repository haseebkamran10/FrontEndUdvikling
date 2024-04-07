import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './PaymentPage.css'

type FormData = {
  name: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  zipCode: string;
  city: string;
  country: 'Denmark';
  companyName?: string;
  companyVat?: string;
};

const PaymentPage: React.FC = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
  };

  const handleZipCodeChange = async (zipCode: string) => {
    if (zipCode.length === 4) {
      // Calling the API to validate the ZIP code and get the city name
      try {
        const response = await fetch(`https://api.dataforsyningen.dk/postnumre/${zipCode}`);
        if (!response.ok) throw new Error('Invalid ZIP code');
        const data = await response.json();
        setValue('city', data.navn);
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Watching zip code changes
  const zipCodeValue = watch('zipCode');
  React.useEffect(() => {
    handleZipCodeChange(zipCodeValue);
  }, [zipCodeValue]);

  return (

    <div className='form-container-parent'>

      <form onSubmit={handleSubmit(onSubmit)} className='form-container'>

        <input {...register('name', { required: true })} placeholder="Name" />
        {errors.name && <p>Name is required.</p>}

        <input {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} placeholder="Email" />
        {errors.email && <p>Email is required.</p>}

        <input {...register('phone', { required: true, pattern: /^\d{8}$/ })} placeholder="Phone" />
        {errors.phone && <p>Phone is required.</p>}

        <select {...register('country')} defaultValue="Denmark">
          <option value="Denmark">Denmark</option>
          {/* Sweden and Norway would be added later */}
        </select>

        <input {...register('zipCode', { required: true, pattern: /^\d{4}$/ })} placeholder="Zip Code" />
        {errors.zipCode && <p>ZIP code is required.</p>}

        <input {...register('city')} placeholder="City" readOnly />

        <input {...register('addressLine1', { required: true })} placeholder="Address Line 1" />
        {errors.addressLine1 && <p>Address Line 1 is required.</p>}

        <input {...register('addressLine2')} placeholder="Address Line 2" />

        <input {...register('companyName')} placeholder="Company Name (Optional)" />

        <input {...register('companyVat', { pattern: /^\d{8}$/ })} placeholder="Company VAT Number (Optional)" />
        {errors.companyVat && <p>Invalid VAT number.</p>}

        <button type="submit" className="checkout-button">Complete Purchase</button>

      </form>

    </div>

  );
};

export default PaymentPage;
