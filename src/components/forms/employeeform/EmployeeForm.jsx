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
    const { handleSubmit, handleChange, values, setFieldValue } = useFormik({
        initialValues: initialvalue,
        onSubmit: async (value, action) => {
            // console.log('values:', value);
            console.log('MDXEditor Content:', mdxContent);
            setFieldValue('data.q1', mdxContent);

            // Now, you can access the updated form values with the MDXEditor content
            console.log('Form values:', mdxContent);
            action.resetForm();
        }
    }
    );
    useEffect(() => {
        console.log(containerref.current?.getMarkdown());
    }, []);;
    const handleMDXEditorChange = (fieldName, newContent) => {
        // Update the form values with the new MDXEditor content
        console.log('MDXEditor Content:', mdxEditorContent);
    };
    return (
        <form onSubmit={handleSubmit}>
            {/* Start : Employee details */}
            <EmployeeInput
                values={values}
                handleChange={handleChange}
                input={null}
                questions={questions}
                onMDXEditorChange={handleMDXEditorChange}
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