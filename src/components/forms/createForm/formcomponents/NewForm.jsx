import { Field, FieldArray, Form, Formik, useFormik } from 'formik';
import React from 'react';

const NewForm = () => {
    const initialValues = {
        form: []
    };

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
                                    <div key={index}>
                                        <label htmlFor={`form[${index}].question`}>Question {index + 1}</label>
                                        <Field
                                            as='textarea'
                                            name={`form[${index}].question`}
                                            id={`form[${index}].question`}
                                        />
                                        <label htmlFor={`form[${index}].required`}>Required</label>
                                        <Field
                                            type="checkbox"
                                            name={`form[${index}].required`}
                                            id={`form[${index}].required`}
                                        />
                                        <label htmlFor={`form[${index}].brief`}>Brief</label>
                                        <Field
                                            type="checkbox"
                                            name={`form[${index}].brief`}
                                            id={`form[${index}].brief`}
                                        />
                                        <button type="button" onClick={() => remove(index)}>
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button type="button" onClick={() => push({ question: '', required: false, brief: true })}>
                                    Add Question
                                </button>
                            </>
                        )}
                    </FieldArray>
                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    );
};

export default NewForm;