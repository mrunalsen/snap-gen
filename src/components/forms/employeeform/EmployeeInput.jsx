import React from 'react';

const EmployeeInput = (props) => {
    const { handleChange, values, input } = props;
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
                    <div className="group mb-4">
                        <label htmlFor='q1' className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}>WHAT WERE YOUR PRIMARY OBJECTIVES IN YOUR ROLE AND TO WHAT EXTENT DO YOU FEEL YOU ACHIEVED THEM?</label>
                        <input type="text"
                            value={values.data.q1}
                            onChange={handleChange}
                            id="q1"
                            name="data.q1"
                            className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q2' className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}>WHAT ARE THREE THINGS THAT YOU DID WELL WITHIN THE LAST YEAR? WHY DO YOU BELIEVE YOU WERE SUCCESSFUL?</label>
                        <input type="text"
                            value={values.data.q2}
                            onChange={handleChange}
                            id="q2"
                            name="data.q2"
                            className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q3' className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}>GIVE AN EXAMPLE OF A DIFFICULT SITUATION YOU HANDLED WELL AND THE STRENGTHS YOU USED TO ACHIEVE THAT END RESULT.</label>
                        <input type="text"
                            value={values.data.q3}
                            onChange={handleChange}
                            id="q3"
                            name="data.q3"
                            className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q4' className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}>WHAT ARE THE ORGANISATIONAL ACTIVITIES YOU PERFORMED, APART FROM YOUR CURRENT ROLE?</label>
                        <input type="text"
                            value={values.data.q4}
                            onChange={handleChange}
                            id="q4"
                            name="data.q4"
                            className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q5' className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}>WHAT JOB-SPECIFIC GOALS WOULD YOU LIKE TO ACCOMPLISH DURING THE UPCOMING EVALUATION PERIOD?</label>
                        <input type="text"
                            value={values.data.q5}
                            onChange={handleChange}
                            id="q5"
                            name="data.q5"
                            className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q6' className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}>WHAT STEPS CAN YOUR MANAGER OR ORGANIZATION TAKE TO HELP YOU REACH THOSE GOALS?</label>
                        <input type="text"
                            value={values.data.q6}
                            onChange={handleChange}
                            id="q6"
                            name="data.q6"
                            className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q7' className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}>WHAT ARE ONE OR TWO EXAMPLES OF WAYS IN WHICH YOU'VE GROWN PROFESSIONALLY WITHIN THE LAST EVALUATION PERIOD?</label>
                        <input type="text"
                            value={values.data.q7}
                            onChange={handleChange}
                            id="q7"
                            name="data.q7"
                            className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q8' className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}>DO YOU FEEL THAT YOU SPENT ENOUGH TIME AND RESOURCES ON YOUR OWN PROFESSIONAL DEVELOPMENT? PLEASE EXPLAIN WHY YOU FEEL YOU DID OR DIDN'T.</label>
                        <input type="text"
                            value={values.data.q8}
                            onChange={handleChange}
                            id="q8"
                            name="data.q8"
                            className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q9' className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}>WHAT CAREER GROWTH OR PROFESSIONAL GOALS DO YOU HOPE TO ACCOMPLISH IN THE NEXT YEAR?</label>
                        <input type="text"
                            value={values.data.q9}
                            onChange={handleChange}
                            id="q9"
                            name="data.q9"
                            className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q10' className={`${input === 'disabled' ? 'text-gray-500' : 'text-black'}`}>WHAT SUPPORT AND RESOURCES CAN THE COMPANY PROVIDE TO HELP YOU ACCOMPLISH THOSE GOALS?</label>
                        <input type="text"
                            value={values.data.q10}
                            onChange={handleChange}
                            id="q10"
                            name="data.q10"
                            className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100'
                            disabled={input}
                        />
                    </div>
                </div>
            </div>
            {/* End : Questions for Employees */}
        </>
    );
};

export default EmployeeInput;