import React from 'react';
import Ratings from '../common/Ratings';
import ManagerInput from '../managerform/ManagerInput';
import EmployeeInput from './EmployeeInput';
import { useFormik } from 'formik';

const EmployeeForm = () => {
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
        }
    };

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: initialvalue,
        // validationSchema: signupSchema,
        // validateOnChange: false,
        // validateOnBlur: false,
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
            />
            {/* End : Employee details */}
            {/* Start : Manager Review */}
            <ManagerInput input={'disabled'} />
            {/* End : Manager Review */}
            {/* Start : Ratings */}
            <Ratings input={'disabled'} />
            {/* End : Ratings */}
            <div className="text-end">
                <button className="btn-primary w-auto" type='submit'>submit</button>
            </div>
        </form>
    );
};

export default EmployeeForm;