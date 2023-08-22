import axios from 'axios';
import { Field, FieldArray, Formik } from 'formik';
import React, { useRef } from 'react';

const NewForm = ({ containerRef }) => {
    /* Constant for form FieldArray input */
    const initialValues = { form: [] };
    /* Constant for Submit button reference */
    const submitButtonRef = useRef();

    /**
     * @description this function brings Submit button into view on add question button click
     */
    const scrollToSubmitButton = () => {
        setTimeout(() => {
            if (submitButtonRef.current) {
                submitButtonRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        });
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
                try {
                    const response = await axios.post('http://localhost:3000/form',
                        { questions: values.form }
                    );
                    console.log('response', response.data);
                } catch (err) {
                    console.error('Error', err);
                }
            }}
        >
            {({ values, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    {/* Start : Field Array */}
                    <FieldArray name="form">
                        {({ push, remove }) => (
                            <div className='bg-white overflow-hidden rounded-md'>
                                {values.form.map((question, index) => (
                                    <div key={index} className='flex flex-col border hover:bg-gray-100 p-4'>
                                        {/* Start : Question input Field */}
                                        <Field
                                            type='text'
                                            name={`form[${index}].question`}
                                            id={`form[${index}].question`}
                                            className={`input-primary`}
                                            placeholder={`${index + 1}) Question`}
                                            autoComplete="off"
                                        />
                                        {/* End : Question input Field */}
                                        {/* Start : Action Fields */}
                                        <div className="flex justify-between mt-2">
                                            {/* Start : Required Action */}
                                            <div className="flex items-center">
                                                <Field
                                                    type="checkbox"
                                                    name={`form[${index}].required`}
                                                    id={`form[${index}].required`}
                                                    className={`hidden checkbox`}
                                                />
                                                <label htmlFor={`form[${index}].required`} className='slider-container'>
                                                    <div className="slider"></div>
                                                </label>
                                                <p className='m-0'>Required</p>
                                            </div>
                                            {/* End : Required Action */}
                                            {/* Start : Remove Field Action */}
                                            <button type="button" onClick={() => remove(index)}>
                                                <i className="bi bi-trash-fill text-zinc-600 hover:text-rose-500 text-lg"></i>
                                            </button>
                                            {/* End : Remove Field Action */}
                                        </div>
                                        {/* End : Action Fields */}
                                    </div>
                                ))}
                                {/* Start : Add Question Action */}
                                <div className='text-center py-6'>
                                    <button
                                        type="button"
                                        className='btn-primary'
                                        onClick={() => {
                                            push({ question: '', required: false });
                                            scrollToSubmitButton();
                                        }}>
                                        Add Question
                                    </button>
                                </div>
                                {/* End : Add Question Action */}
                            </div>
                        )}
                    </FieldArray>
                    {/* End : Field Array */}
                    {/* Start : Submit Action */}
                    <div className='text-end mt-4' ref={submitButtonRef}>
                        <button type="submit" className='btn-primary'>Submit</button>
                    </div>
                    {/* End : Submit Action */}
                </form>
            )}
        </Formik>
    );
};

export default NewForm;