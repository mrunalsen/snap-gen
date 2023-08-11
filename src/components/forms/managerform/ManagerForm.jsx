import { useFormik } from 'formik';
import React from 'react';
import Ratings from '../common/Ratings';
import EmployeeInput from '../employeeform/EmployeeInput';
import ManagerInput from './ManagerInput';
import questions from '../common/Questions';

const ManagerForm = () => {

    const initialvalue = {
        id: 'xyzzyx',
        name: 'Mrunal',
        project: 'SnapGen',
        reviewer: 'Mitul',
        data: {
            q1: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, atque?',
            q2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, dolor.',
            q3: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus aperiam, quae expedita consequatur tempore dolor?',
            q4: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aperiam blanditiis porro reiciendis voluptatum enim?',
            q5: 'Lorem ipsum dolor sit amet.',
            q6: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, commodi?',
            q7: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum.',
            q8: 'Lorem ipsum dolor sit amet.',
            q9: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam aliquam magni obcaecati illo aut natus consequatur sed. Tempora!',
            q10: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta fuga ducimus facilis, commodi expedita laborum provident minima vero accusantium.',
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

    const { handleSubmit, handleChange, handleReset, values } = useFormik({
        initialValues: initialvalue,

        onSubmit: (value, action) => {
            console.log('values:', value);
            action.resetForm();
        }
    }
    );
    return (
        <form onSubmit={handleSubmit}>
            <EmployeeInput
                values={values}
                handleChange={handleChange}
                input={'disabled'}
                questions={questions}
            />
            <ManagerInput
                values={values}
                handleChange={handleChange}
                input={null}
            />
            <Ratings
                values={values}
                handleChange={handleChange}
                input={null}
            />
            <div className="text-end">
                <button className="btn-primary w-auto" type='submit'>submit</button>
            </div>
        </form>
    );
};

export default ManagerForm;