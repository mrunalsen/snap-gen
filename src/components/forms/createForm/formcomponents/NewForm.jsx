import { Field, FieldArray, Formik } from 'formik';
import React, { useRef } from 'react';

const NewForm = () => {
    const initialValues = { form: [] };
    const formRef = useRef(null);
    
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ values, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <FieldArray name="form">
                        {({ push, remove }) => (
                            <>
                                {values.form.map((question, index) => (
                                    <div key={index} className='flex flex-col border hover:bg-gray-100 p-4'>
                                        {/* <label
                                            htmlFor={`form[${index}].question`}
                                            className='mb-2'
                                        >
                                            {`${index + 1}) Question`}
                                        </label> */}
                                        <Field
                                            type='text'
                                            name={`form[${index}].question`}
                                            id={`form[${index}].question`}
                                            className={`input-primary`}
                                            placeholder= {`${index + 1}) Question`}
                                            autoComplete="off"
                                        />
                                        <div className="flex justify-between mt-2">
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
                                            <button type="button" onClick={() => remove(index)}>
                                                <i className="bi bi-trash-fill text-zinc-600 hover:text-rose-500 text-lg"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                           <div className='text-center my-6'>
                           <button
                                    type="button"
                                    className='btn-primary'
                                    onClick={() => {
                                        push({ question: '', required: false });
                                  formRef.current.scrollTo({
                                    top: formRef.current.scrollHeight,
                                    behaviour: 'smooth'
                                  })
                                    }}
                                >
                                    Add Question
                                </button>
                           </div>
                            </>
                        )}
                    </FieldArray>
                  <div>
                  <button type="submit" className='btn-outline-primary group'>
                        <span className="text-outline-primary">Submit</span>
                    </button>
                  </div>
                </form>
            )}
        </Formik>
    );
};

export default NewForm;