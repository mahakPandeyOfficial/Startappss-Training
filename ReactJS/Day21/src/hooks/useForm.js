import { useState } from 'react';

function useForm( initialValues, validate, onSubmit ) {
    const [ values, setValues ] = useState( initialValues );
    const [ errors, setErrors ] = useState( {} );

    //handleChange function
    // this function will be called when the input value changes

    const handleChange = (e) => {
        const {name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value}));

        if(validate) {
            const validationErrors = validate({ ...values, [name]: value });
            setErrors(validationErrors);
        }
    }

    //handleSubmit function
    // this function will be called when the form is submitted
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate(values);
        setErrors(validationErrors);

        if(Object.keys(validationErrors).length === 0) {
            onSubmit(values);
        }
    };


    //resetForm function
    // this function will reset the form to its initial values
    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    }

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        resetForm
    };
}

export default useForm;

//this hook can be used in any form component to manage form state, validation, and submission.