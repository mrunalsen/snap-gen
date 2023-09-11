import React, { useEffect, useRef, useState } from 'react';
import Ratings from '../common/Ratings';
import ManagerInput from '../managerform/ManagerInput';
import EmployeeInput from './EmployeeInput';
import { useFormik } from 'formik';
import questions from '../common/Questions';

const EmployeeForm = () => {
    const [mdxEditorContent, setMdxEditorContent] = useState('');
    /* Constant for Initial Values for form field values */
    const initialvalue = {
        id: '',
        name: '',
        project: '',
        reviewer: '',
        data: {
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            q10: '',
        },
        review: {
            mq1: '',
            mq2: '',
            mq3: '',
            leadership: undefined,
            business: undefined,
            technology: undefined,
            inclusive: undefined,
            collaboration: undefined,
        }
    };

    const containerref = useRef();
    const mdxContent = containerref.current?.getMarkdown();
    /**
     * @description method used for submitting form values with Formik and Yup libraries
     */
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: initialvalue,
        onSubmit: async (value, action) => {
            // console.log('values:', value);
            // Get all the MDXEditor values
            const allMdxEditorValues = {};
            questions.forEach((question, index) => {
                allMdxEditorValues[`q${index + 1}`] = containerref.current[index]?.getMarkdown() || '';
            });
            console.log('All MDXEditor Values:', allMdxEditorValues);

            action.resetForm();
        }
    }
    );

    return (
        <form onSubmit={handleSubmit}>
            {/* Start : Employee details */}
            <EmployeeInput
                values={values}
                handleChange={handleChange}
                input={null}
                questions={questions}
                containerref={containerref}
            />
            {/* End : Employee details */}
            {/* Start : Manager Review */}
            <ManagerInput
                input={'disabled'}
                handleChange={handleChange}
                values={values}
            />
            {/* End : Manager Review */}
            {/* Start : Ratings */}
            <Ratings
                input={'disabled'}
                handleChange={handleChange}
                values={values}
            />
            {/* End : Ratings */}
            {/* Start : Submit Action */}
            <div className="text-end">
                <button className="btn-primary w-auto" type='submit'>submit</button>
            </div>
            {/* End : Submit Action */}
        </form>
    );
};

export default EmployeeForm;