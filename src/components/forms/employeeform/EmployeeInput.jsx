import React from 'react';

const EmployeeInput = (props) => {
    const { handleChange, values, input, questions } = props;

    return (
        <>
            {/* Start : Employee details */}
            <div className={`${input === 'disabled' ? 'bg-gray-200' : 'bg-white'} overflow-hidden rounded-md mb-4`}>
                <div className='bg-blue-500'>
                    <p className='text-white p-3 m-0'>SNAPSHOT DETAILS [TO BE FILLED BY THE EMPLOYEE]</p>
                </div>
                <div className="p-4">
                    <div className="group grid grid-cols-3">
                        <label htmlFor="id" className='border-l-2 border-t-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Employee ID</label>
                        <input type="text"
                            value={values.id}
                            onChange={handleChange}
                            name="id"
                            id="id"
                            className='col-span-2 border-x-2 border-t-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group grid grid-cols-3">
                        <label htmlFor="name" className='border-l-2 border-t-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Employee Name</label>
                        <input type="text"
                            value={values.name}
                            onChange={handleChange}
                            name="name"
                            id="name"
                            className='col-span-2 border-x-2 border-t-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group grid grid-cols-3">
                        <label htmlFor="project" className='border-l-2 border-t-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Project Name</label>
                        <input type="text"
                            value={values.project}
                            onChange={handleChange}
                            name="project"
                            id="project"
                            className='col-span-2 border-x-2 border-t-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group grid grid-cols-3">
                        <label htmlFor="reviewer" className='border-l-2 border-y-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Reviewer Name</label>
                        <input type="text"
                            value={values.reviewer}
                            onChange={handleChange}
                            name="reviewer"
                            id="reviewer"
                            className='col-span-2 border-x-2 border-y-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                </div>
            </div>
            {/* End : Employee details */}
            {/* Start : Questions for Employees */}
            <div className={`${input === 'disabled' ? 'bg-gray-200' : 'bg-white'} overflow-hidden rounded-md mb-4`}>
                <div className="bg-blue-500">
                    <p className='text-white p-3 m-0'>SELF-ASSESSMENT [TO BE FILLED BY THE EMPLOYEE]</p>
                </div>
                <div className="p-4">
                    {questions.map((question, index) => (
                        <div className="group mb-4" key={index}>
                            <label
                                htmlFor={`q${index + 1}`}
                                className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}
                            >
                                {question.label}
                            </label>
                            <input
                                type="text"
                                value={values.data[`q${index + 1}`]}
                                onChange={handleChange}
                                id={`q${index + 1}`}
                                name={`data.q${index + 1}`}
                                className="border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100"
                                disabled={input}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* End : Questions for Employees */}
        </>
    );
};

export default EmployeeInput;