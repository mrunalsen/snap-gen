import { useFormik } from 'formik';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import Ratings from '../common/Ratings';
import EmployeeInput from '../employeeform/EmployeeInput';
import ManagerInput from './ManagerInput';
import questions from '../common/Questions';
import {
    CodeToggle,
    CreateLink,
    InsertThematicBreak,
    ListsToggle,
    MDXEditor,
    Separator,
    headingsPlugin,
    linkDialogPlugin,
    linkPlugin,
    listsPlugin,
    quotePlugin,
    thematicBreakPlugin,
} from '@mdxeditor/editor';
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar';
import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles';
import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo';
import '@mdxeditor/editor/style.css';

const ManagerForm = () => {
    const [input, setInput] = useState('disabled');
    /* Constant for initial values for form input values */
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
            q6: '**Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, commodi?**',
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

    const containerRefs = useRef(Array(questions.length).fill(null).map(() => useRef()));

    /**
     * @description method used for submitting form values with Formik and Yup libraries
     */
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: initialvalue,

        onSubmit: (value, action) => {
            console.log('values:', value);
            action.resetForm();
        }
    }
    );

    return (
        <>
            {/* Start : Manager Form */}
            <div>
                {/* Start : Employee Input */}
                <EmployeeInput
                    initialvalue={initialvalue}
                    values={values}
                    handleChange={handleChange}
                    input={'disabled'}
                    questions={questions}
                />
                {/* End : Employee Input */}
                {/* Start : Questions for Employees */}
                <div className={`${input === 'disabled' ? 'bg-gray-200' : 'bg-white'} overflow-hidden rounded-md mb-4`}>
                    {/* Start : Field Hero Title */}
                    <div className="bg-blue-500">
                        <p className='text-white p-3 m-0'>SELF-ASSESSMENT [TO BE FILLED BY THE EMPLOYEE]</p>
                    </div>
                    {/* End : Field Hero Title */}
                    {/* Start : MdxEditor Emplyee Response */}
                    <div className="p-4">
                        {questions.map((question, index) => (
                            <div className="group mb-4" key={index}>
                                {/* Start : label */}
                                <label className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}>
                                    {question.label}
                                </label>
                                {/* End : label */}
                                {/* Start : Form Input */}
                                <div className='border border-zinc-300'>
                                    <MDXEditor
                                        markdown={values.data[`q${index + 1}`]}
                                        readOnly
                                        className='focus-within:bg-gray-100 transition-all duration-150'
                                    />
                                </div>
                                {/* End : Form Input */}
                            </div>
                        ))}
                    </div>
                    {/* End : MdxEditor Emplyee Response */}
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Start : Manager Input */}
                    <ManagerInput
                        values={values}
                        handleChange={handleChange}
                        input={null}
                    />
                    {/* End : Manager Input */}
                    {/* Start : Tarings Input */}
                    <Ratings
                        values={values}
                        handleChange={handleChange}
                        input={null}
                    />
                    {/* End : Tarings Input */}
                    {/* Start : Submit Action */}
                    <div className="text-end">
                        <button className="btn-primary w-auto" type='submit'>submit</button>
                    </div>
                    {/* End : Submit Action */}
                </form>

            </div>
            {/* End : Manager Form */}
        </>
    );
};

export default ManagerForm;