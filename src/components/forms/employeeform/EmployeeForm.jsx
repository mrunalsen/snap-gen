import React, { useRef, useState } from 'react';
import questions from '../common/Questions';
import EmployeeInput from './EmployeeInput';
import axios from 'axios';
import { useFormik } from 'formik';
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

const EmployeeForm = () => {
    const [input, setinput] = useState(null);
    const initialValue = {
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
    };

    const containerRefs = useRef(Array(questions.length).fill(null).map(() => useRef()));
    /**
     * @description method used for submitting form values with Formik
     */
    const { handleSubmit, values, handleChange } = useFormik({
        initialValues: initialValue,
        onSubmit: async (value, action) => {
            containerRefs.current.forEach((ref, index) => {
                const fieldName = `q${index + 1}`;
                values.data[fieldName] = ref.current.getMarkdown();
            });
            console.log(values);

            try {
                await axios.post('http://localhost:3000/answers', values);
                action.resetForm();

            } catch (error) {
                console.error(error);
            }
        }
    }
    );

    return (
        <form onSubmit={handleSubmit}>
            {/* Start : Employee details */}
            <EmployeeInput
                input={null}
                questions={questions}
                values={values}
                handleChange={handleChange}
            />
            {/* End : Employee details */}
            {/* Start : Questions for Employees */}
            <div className={`${input === 'disabled' ? 'bg-gray-200' : 'bg-white'} overflow-hidden rounded-md mb-4`}>
                {/* Start : Field Hero Title */}
                <div className="bg-blue-500">
                    <p className='text-white p-3 m-0'>SELF-ASSESSMENT [TO BE FILLED BY THE EMPLOYEE]</p>
                </div>
                {/* End : Field Hero Title */}

                {/* Start : Form Questions */}
                <div className="p-4">
                    {questions.map((question, index) => (
                        <div className="group mb-4" key={index}>
                            {/* Start : label */}
                            <label
                                // htmlFor={`q${index + 1}`}
                                className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}
                            >
                                {question.label}
                            </label>
                            {/* End : label */}
                            {/* Start : Form Input */}
                            {/* <textarea
                                value={values.data[`q${index + 1}`]}
                                onChange={handleChange}
                                id={`q${index + 1}`}
                                name={`data.q${index + 1}`}
                                className="border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100"
                                disabled={input}
                            /> */}
                            <div className='border border-zinc-300'>
                                <MDXEditor
                                    ref={containerRefs.current[index]}
                                    markdown={values.data[`q${index + 1}`]}
                                    // readOnly={true}
                                    id={`q${index + 1}`}
                                    name={`data.q${index + 1}`}
                                    className='focus-within:bg-gray-100 transition-all duration-150'
                                    disabled={input}
                                    plugins={[
                                        headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(), linkPlugin(), linkDialogPlugin(), listsPlugin(),
                                        toolbarPlugin({
                                            toolbarContents: () => (
                                                <div className={`flex rounded z-0`}>
                                                    <UndoRedo />
                                                    <Separator />
                                                    <BoldItalicUnderlineToggles />
                                                    <Separator />
                                                    <InsertThematicBreak />
                                                    <CodeToggle />
                                                    <CreateLink />
                                                    <ListsToggle />
                                                </div>
                                            )
                                        })]}
                                />
                            </div>
                            {/* End : Form Input */}
                        </div>
                    ))}
                </div>
                {/* End : Form Questions */}
            </div>
            {/* End : Questions for Employees */}
            {/* Start : Submit Action */}
            <div className="text-end">
                <button type='submit' className='btn-primary mb-4'>Submit</button>
            </div>
            {/* End : Submit Action */}
        </form>
    );
};

export default EmployeeForm;