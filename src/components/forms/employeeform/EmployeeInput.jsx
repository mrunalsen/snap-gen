import { CreateLink, Separator, headingsPlugin, linkDialogPlugin, linkPlugin, listsPlugin, quotePlugin, thematicBreakPlugin } from '@mdxeditor/editor';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toolbarPlugin } from '@mdxeditor/editor/plugins/toolbar';
import { BoldItalicUnderlineToggles } from '@mdxeditor/editor/plugins/toolbar/components/BoldItalicUnderlineToggles';
import { UndoRedo } from '@mdxeditor/editor/plugins/toolbar/components/UndoRedo';
import '@mdxeditor/editor/style.css';
import MemoizedMDXEditor from './MemoizedMDXEditor';

const EmployeeInput = (props) => {
    // Constants extracted from props passed on from Employee Manager form
    const { handleChange, values, input, questions } = props;
    // const containerRefs = useRef([]);
    const [mdxEditorValues, setMdxEditorValues] = useState({});
    const location = useLocation();

    /* Function for rendering Submit button only for Employee input */
    const isHome = () => {
        return location.pathname === '/home';
    };

    const handleEditorChange = (index, markdown) => {
        setMdxEditorValues((prevValues) => ({
            ...prevValues,
            [`q${index + 1}`]: markdown,
        }));
    };
    /* Function to get values of user input */
    const getAllValues = () => {
        console.log(mdxEditorValues);
    };

    return (
        <>
            {/* Start : Employee details */}
            <div className={`${input === 'disabled' ? 'bg-gray-200' : 'bg-white'} overflow-hidden rounded-md mb-4`}>
                {/* Start : Field Hero Title */}
                <div className='bg-blue-500'>
                    <p className='text-white p-3 m-0'>SNAPSHOT DETAILS [TO BE FILLED BY THE EMPLOYEE]</p>
                </div>
                {/* End : Field Hero Title */}
                <div className="p-4">
                    {/* Start : Employee ID */}
                    <div className="group grid grid-cols-3">
                        {/* Start : Label */}
                        <label htmlFor="id" className='border-l-2 border-t-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Employee ID</label>
                        {/* End : Label */}
                        {/* Start : Input */}
                        <input type="text"
                            value={values.id}
                            onChange={handleChange}
                            name="id"
                            id="id"
                            className='col-span-2 border-x-2 border-t-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100'
                            disabled={input}
                            autoComplete='off'
                        />
                        {/* End : Input */}
                    </div>
                    {/* End : Employee ID */}
                    {/* Start : Employee Name */}
                    <div className="group grid grid-cols-3">
                        {/* Start : Label */}
                        <label htmlFor="name" className='border-l-2 border-t-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Employee Name</label>
                        {/* End : Label */}
                        {/* Start : Input */}
                        <input type="text"
                            value={values.name}
                            onChange={handleChange}
                            name="name"
                            id="name"
                            className='col-span-2 border-x-2 border-t-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100'
                            disabled={input}
                            autoComplete='on'
                        />
                        {/* End : Input */}
                    </div>
                    {/* End : Employee Name */}
                    {/* Start : Project Name */}
                    <div className="group grid grid-cols-3">
                        {/* Start : Label */}
                        <label htmlFor="project" className='border-l-2 border-t-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Project Name</label>
                        {/* End : Label */}
                        {/* Start : Input */}
                        <input type="text"
                            value={values.project}
                            onChange={handleChange}
                            name="project"
                            id="project"
                            className='col-span-2 border-x-2 border-t-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100'
                            disabled={input}
                            autoComplete='on'
                        />
                        {/* End : Input */}
                    </div>
                    {/* End : Project Name */}
                    {/* Start : Reviewer */}
                    <div className="group grid grid-cols-3">
                        {/* Start : Label */}
                        <label htmlFor="reviewer" className='border-l-2 border-y-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Reviewer Name</label>
                        {/* End : Label */}
                        {/* Start : Input */}
                        <input type="text"
                            value={values.reviewer}
                            onChange={handleChange}
                            name="reviewer"
                            id="reviewer"
                            className='col-span-2 border-x-2 border-y-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100'
                            disabled={input}
                            autoComplete='on'
                        />
                        {/* End : Input */}
                    </div>
                    {/* End : Reviewer */}
                </div>
            </div>
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
                                htmlFor={`q${index + 1}`}
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
                            <div className='border-2 border-zinc-300'>
                                <MemoizedMDXEditor
                                    markdown={values.data[`q${index + 1}`]}
                                    onChange={(markdown) => handleEditorChange(index, markdown)}
                                    id={`q${index + 1}`}
                                    name={`data.q${index + 1}`}
                                    disabled={input}
                                    plugins={[
                                        headingsPlugin(), listsPlugin(), quotePlugin(), thematicBreakPlugin(), linkPlugin(), linkDialogPlugin(), listsPlugin(),
                                        toolbarPlugin({
                                            toolbarContents: () => (
                                                <div className='flex rounded'>
                                                    <UndoRedo />
                                                    <Separator />
                                                    <BoldItalicUnderlineToggles />
                                                    {/* <Separator /> */}
                                                    {/* <InsertThematicBreak /> */}
                                                    {/* <CodeToggle /> */}
                                                    <CreateLink />
                                                    {/* <ListsToggle /> */}
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
            {
                isHome() && (
                    <div className="text-end">
                        <button type='button' className='btn-primary mb-4' onClick={getAllValues}>Submit</button>
                    </div>
                )
            }
        </>
    );
};

export default EmployeeInput;