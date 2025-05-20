import React from 'react';
import useForm from '../hooks/useForm';

// Validation logic
const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  return errors;
};

function FormValidation() {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm
  } = useForm(
    { name: '', email: '' },
    validate,
    (formValues) => {
      alert(`Submitted!\nName: ${formValues.name}\nEmail: ${formValues.email}`);
      resetForm();
    }
  );

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto' }}>
      <h2>Form Validation Example</h2>

      <div>
        <label>Name:</label><br />
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>

      <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
    </form>
  );
}

export default FormValidation;
