import React from 'react';
import Ratings from '../common/Ratings';
import ManagerInput from '../managerform/ManagerInput';
import EmployeeInput from './EmployeeInput';
import { useFormik } from 'formik';
import questions from '../common/Questions';

const EmployeeForm = () => {
    // Constant for Initial Values for form field values
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
    // Constant extracted from Formik Form Library
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: initialvalue,

        onSubmit: (value, action) => {
            console.log('values:', value);
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