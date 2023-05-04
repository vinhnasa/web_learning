import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input type="text" {...register('name', { required: true })} />
        {errors.name && <span>This field is required</span>}
      </label>
      <br />
      <label>
        Address:
        <input type="text" {...register('address', { required: true })} />
        {errors.address && <span>This field is required</span>}
      </label>
      <br />
      <label>
        Phone Number:
        <input type="tel" {...register('phoneNumber', { required: true, pattern: /^\d{10}$/ })} />
        {errors.phoneNumber?.type === 'required' && <span>This field is required</span>}
        {errors.phoneNumber?.type === 'pattern' && <span>Invalid phone number</span>}
      </label>
      <br />
      <label>
        Email:
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </label>
      <br />
      <label>
        Symptoms:
        <br />
        <input type="checkbox" {...register('symptoms.fever')} /> Fever
        <br />
        <input type="checkbox" {...register('symptoms.cough')} /> Cough
        <br />
        <input type="checkbox" {...register('symptoms.soreThroat')} /> Sore Throat
        <br />
        <input type="checkbox" {...register('symptoms.shortnessOfBreath')} /> Shortness of Breath
        <br />
        <input type="checkbox" {...register('symptoms.fatigue')} /> Fatigue
        <br />
        <input type="checkbox" {...register('symptoms.bodyAches')} /> Body Aches
        <br />
        <input type="checkbox" {...register('symptoms.lossOfTasteOrSmell')} /> Loss of Taste or Smell
        <br />
        <input type="checkbox" {...register('symptoms.headache')} /> Headache
        <br />
        <input type="checkbox" {...register('symptoms.chills')} /> Chills
        <br />
        <input type="checkbox" {...register('symptoms.nauseaOrVomiting')} /> Nausea or Vomiting
        <br />
        <input type="checkbox" {...register('symptoms.diarrhea')} /> Diarrhea
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
