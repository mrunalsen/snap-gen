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
            leadership: undefined,
            business: undefined,
            technology: undefined,
            inclusive: undefined,
            collaboration: undefined,
        },
        reviewquestions: {
            mq1: '',
            mq2: '',
            mq3: '',
        }
    };

    // const containerRefs = useRef(Array(questions.length).fill(null).map(() => useRef()));
    const containerRefs = useRef();

    /**
     * @description method used for submitting form values with Formik and Yup libraries
     */
    const { handleSubmit, handleChange, values, setFieldValue } = useFormik({
        initialValues: initialvalue,

        onSubmit: async (value, action) => {
            // Get the MDXEditor value
            const mdxEditorValue = containerRefs.current?.getMarkdown();

            // Make a POST request to send the updated data
            try {
                await axios.post('http://localhost:3000/answers',);

                // Reset the form
                action.resetForm();

                // Optionally, you can show a success message or perform other actions after a successful POST request.
            } catch (error) {
                // Handle any errors that occur during the POST request.
                console.error('Error:', error);
            }
        },
    });


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
                    <div className={`${input === 'disabled' ? 'bg-gray-200' : 'bg-white'} overflow-hidden rounded-md mb-4`}>
                        {/* Start : Field Hero Title */}
                        <div className="bg-blue-500">
                            <p className='text-white p-3 m-0'>MANAGER REVIEW [TO BE FILLED BY THE REVIEW MANAGER]</p>
                        </div>
                        {/* End : Field Hero Title */}
                        <div className="p-3">
                            {/* Start : Performance Differentiators */}
                            <div className="group mb-4">
                                {/* Start : Label */}
                                <label htmlFor='mq1'>PERFORMANCE DIFFERENTIATORS</label>
                                {/* End : Label */}
                                {/* Start : Input */}
                                {/* <textarea
                                    value={values.review.mq1}
                                    onChange={handleChange}
                                    type="text"
                                    id="mq1"
                                    name='review.mq1'
                                    placeholder='Manager to describe performance differentiators displayed by the employee'
                                    className='disabled:cursor-not-allowed border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' /> */}
                                <MDXEditor
                                    ref={containerRefs}
                                    markdown={values.reviewquestions.mq1}
                                />
                                {/* End : Input */}
                            </div>
                            {/* End : Performance Differentiators */}
                            {/* Start : Development Actions */}
                            <div className="group mb-4">
                                {/* Start : Label */}
                                <label htmlFor='mq2'>DEVELOPMENT ACTIONS</label>
                                {/* End : Label */}
                                {/* Start : Input */}
                                {/* <textarea
                                    value={values.review.mq2}
                                    onChange={handleChange}
                                    type="text"
                                    id="mq2"
                                    name="review.mq2"
                                    placeholder='Manager to describe development areas for the employee'
                                    className='disabled:cursor-not-allowed border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' /> */}
                                <MDXEditor
                                    ref={containerRefs}
                                    markdown={values.reviewquestions.mq2}
                                />
                                {/* End : Input */}
                            </div>
                            {/* End : Development Actions */}
                            {/* Start : Fututre Focus Area */}
                            <div className="group mb-4">
                                {/* Start : Label */}
                                <label htmlFor='mq2'>FUTURE FOCUS AREAS</label>
                                {/* End : Label */}
                                {/* Start : Inout */}
                                {/* <textarea
                                    value={values.review.mq3}
                                    onChange={handleChange}
                                    type="text"
                                    id="mq3"
                                    name="review.mq3"
                                    placeholder='Manager to highlight future focus areas for the employee'
                                    className='disabled:cursor-not-allowed border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' /> */}
                                <MDXEditor
                                    ref={containerRefs}
                                    markdown={values.reviewquestions.mq3}
                                />
                                {/* End : Inout */}
                            </div>
                            {/* End : Fututre Focus Area */}
                        </div>
                    </div>
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