import React from 'react';

const EmployeeForm = () => {
    return (
        <>
            {/* Start : Employee details */}
            <div className='bg-white overflow-hidden rounded-md mb-4'>
                <div className='bg-blue-500'>
                    <p className='text-white p-3 m-0'>SNAPSHOT DETAILS [TO BE FILLED BY THE EMPLOYEE]</p>
                </div>
                <div className="p-4">
                    <div className="group grid grid-cols-3">
                        <label htmlFor="id" className='border-l-2 border-t-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Employee ID</label>
                        <input type="text" name="employee id" id="id" className='col-span-2 border-x-2 border-t-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100' />
                    </div>
                    <div className="group grid grid-cols-3">
                        <label htmlFor="name" className='border-l-2 border-t-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Employee Name</label>
                        <input type="text" name="employee name" id="name" className='col-span-2 border-x-2 border-t-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100' />
                    </div>
                    <div className="group grid grid-cols-3">
                        <label htmlFor="project" className='border-l-2 border-t-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Project Name</label>
                        <input type="text" name="project name" id="project" className='col-span-2 border-x-2 border-t-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100' />
                    </div>
                    <div className="group grid grid-cols-3">
                        <label htmlFor="reviewer" className='border-l-2 border-y-2 border-zinc-300 group-focus-within:text-blue-500 transition-all duration-300 p-1'>Reviewer Name</label>
                        <input type="text" name="reviewer name" id="reviewer" className='col-span-2 border-x-2 border-y-2 border-zinc-300 outline-0 p-1 focus:bg-gray-100' />
                    </div>
                </div>
            </div>
            {/* End : Employee details */}
            {/* Start : Questions for Employees */}
            <div className="bg-white overflow-hidden rounded-md mb-4">
                <div className="bg-blue-500">
                    <p className='text-white p-3 m-0'>SELF-ASSESSMENT [TO BE FILLED BY THE EMPLOYEE]</p>
                </div>
                <div className="p-4">
                    <div className="group mb-4">
                        <label htmlFor='q1'>WHAT WERE YOUR PRIMARY OBJECTIVES IN YOUR ROLE AND TO WHAT EXTENT DO YOU FEEL YOU ACHIEVED THEM?</label>
                        <input type="text" id="q1" className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100 focus:bg-gray-100' />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q2'>WHAT ARE THREE THINGS THAT YOU DID WELL WITHIN THE LAST YEAR? WHY DO YOU BELIEVE YOU WERE SUCCESSFUL?</label>
                        <input type="text" id="q2" className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q3'>GIVE AN EXAMPLE OF A DIFFICULT SITUATION YOU HANDLED WELL AND THE STRENGTHS YOU USED TO ACHIEVE THAT END RESULT.</label>
                        <input type="text" id="q3" className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q4'>WHAT ARE THE ORGANISATIONAL ACTIVITIES YOU PERFORMED, APART FROM YOUR CURRENT ROLE?</label>
                        <input type="text" id="q4" className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q5'>WHAT JOB-SPECIFIC GOALS WOULD YOU LIKE TO ACCOMPLISH DURING THE UPCOMING EVALUATION PERIOD?</label>
                        <input type="text" id="q5" className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q6'>WHAT STEPS CAN YOUR MANAGER OR ORGANIZATION TAKE TO HELP YOU REACH THOSE GOALS?</label>
                        <input type="text" id="q6" className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q7'>WHAT ARE ONE OR TWO EXAMPLES OF WAYS IN WHICH YOU'VE GROWN PROFESSIONALLY WITHIN THE LAST EVALUATION PERIOD?</label>
                        <input type="text" id="q7" className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q8'>DO YOU FEEL THAT YOU SPENT ENOUGH TIME AND RESOURCES ON YOUR OWN PROFESSIONAL DEVELOPMENT? PLEASE EXPLAIN WHY YOU FEEL YOU DID OR DIDN'T.</label>
                        <input type="text" id="q8" className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q9'>WHAT CAREER GROWTH OR PROFESSIONAL GOALS DO YOU HOPE TO ACCOMPLISH IN THE NEXT YEAR?</label>
                        <input type="text" id="q9" className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='q10'>WHAT SUPPORT AND RESOURCES CAN THE COMPANY PROVIDE TO HELP YOU ACCOMPLISH THOSE GOALS?</label>
                        <input type="text" id="q10" className='border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100' />
                    </div>
                </div>
            </div>
            {/* End : Questions for Employees */}
            {/* Start : Manager Review */}
            <div className="bg-gray-200 overflow-hidden rounded-md mb-4">
                <div className="bg-blue-500">
                    <p className='text-white p-3 m-0'>MANAGER REVIEW [TO BE FILLED BY THE REVIEW MANAGER]</p>
                </div>
                <div className="p-3">
                    <div className="group mb-4">
                        <label htmlFor='mq1'>PERFORMANCE DIFFERENTIATORS</label>
                        <input type="text" id="mq1" placeholder='Manager to describe performance differentiators displayed by the employee' className='cursor-not-allowed border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100 focus:bg-gray-100' disabled />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='mq2'>DEVELOPMENT ACTIONS</label>
                        <input type="text" id="mq2" placeholder='Manager to describe development areas for the employee' className='cursor-not-allowed border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100 focus:bg-gray-100' disabled />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='mq2'>FUTURE FOCUS AREAS</label>
                        <input type="text" id="mq2" placeholder='Manager to highlight future focus areas for the employee' className='cursor-not-allowed border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100 focus:bg-gray-100' disabled />
                    </div>
                </div>
            </div>
            {/* End : Manager Review */}
            {/* Start : Ratings */}
            <div className="bg-gray-200 overflow-hidden rounded-md mb-4">
                <div className="bg-blue-500">
                    <p className="text-white p-3 m-0">RATINGS [TO BE FILLED BY THE REVIEW MANAGER]</p>
                </div>
                {/* Start : Leadership */}
                <div className="p-4">
                    <p className='mb-3 font-semibold'>Leadership</p>
                    <div className="flex">
                        <div className="group-radio flex">
                            <input type="radio" name="leadership" className='group-input' id='leadRate1' value={1} />
                            <label htmlFor="leadRate1" className='group-label'>1</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="leadership" className='group-input' id="leadRate2" value={2} />
                            <label htmlFor="leadRate2" className='group-label'>2</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="leadership" className='group-input' id="leadRate3" value={3} />
                            <label htmlFor="leadRate3" className='group-label'>3</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="leadership" className='group-input' id="leadRate4" value={4} />
                            <label htmlFor="leadRate4" className='group-label'>4</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="leadership" className='group-input' id="leadRate5" value={5} />
                            <label htmlFor="leadRate5" className='group-label'>5</label>
                        </div>
                    </div>
                </div>
                {/* End : Leadership */}
                {/* Start : Business Accumen */}
                <div className="p-4">
                    <p className='mb-3 font-semibold'>Business Accumen</p>
                    <div className="flex">
                        <div className="group-radio flex">
                            <input type="radio" name="business" className='group-input' id='business1' value={1} />
                            <label htmlFor="business1" className='group-label'>1</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="business" className='group-input' id="business2" value={2} />
                            <label htmlFor="business2" className='group-label'>2</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="business" className='group-input' id="business3" value={3} />
                            <label htmlFor="business3" className='group-label'>3</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="business" className='group-input' id="business4" value={4} />
                            <label htmlFor="business4" className='group-label'>4</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="business" className='group-input' id="business5" value={5} />
                            <label htmlFor="business5" className='group-label'>5</label>
                        </div>
                    </div>
                </div>
                {/* End : Business Accumen */}
                {/* Start : Digital & Technology */}
                <div className="p-4">
                    <p className='mb-3 font-semibold'>Digital & Technology</p>
                    <div className="flex">
                        <div className="group-radio flex">
                            <input type="radio" name="technology" className='group-input' id='technology1' value={1} />
                            <label htmlFor="technology1" className='group-label'>1</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="technology" className='group-input' id="technology2" value={2} />
                            <label htmlFor="technology2" className='group-label'>2</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="technology" className='group-input' id="technology3" value={3} />
                            <label htmlFor="technology3" className='group-label'>3</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="technology" className='group-input' id="technology4" value={4} />
                            <label htmlFor="technology4" className='group-label'>4</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="technology" className='group-input' id="technology5" value={5} />
                            <label htmlFor="technology5" className='group-label'>5</label>
                        </div>
                    </div>
                </div>
                {/* End : Digital & Technology */}
                {/* Start : Global & Inclusive */}
                <div className="p-4">
                    <p className='mb-3 font-semibold'>Global & Inclusive</p>
                    <div className="flex">
                        <div className="group-radio flex">
                            <input type="radio" name="inclusive" className='group-input' id='inclusive1' value={1} />
                            <label htmlFor="inclusive1" className='group-label'>1</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="inclusive" className='group-input' id="inclusive2" value={2} />
                            <label htmlFor="inclusive2" className='group-label'>2</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="inclusive" className='group-input' id="inclusive3" value={3} />
                            <label htmlFor="inclusive3" className='group-label'>3</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="inclusive" className='group-input' id="inclusive4" value={4} />
                            <label htmlFor="inclusive4" className='group-label'>4</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="inclusive" className='group-input' id="inclusive5" value={5} />
                            <label htmlFor="inclusive5" className='group-label'>5</label>
                        </div>
                    </div>
                </div>
                {/* End : Global & Inclusive */}
                {/* Start : Collaboration */}
                <div className="p-4">
                    <p className='mb-3 font-semibold'>Collaboration</p>
                    <div className="flex">
                        <div className="group-radio flex">
                            <input type="radio" name="collaboration" className='group-input' id='collaboration1' value={1} />
                            <label htmlFor="collaboration1" className='group-label'>1</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="collaboration" className='group-input' id="collaboration2" value={2} />
                            <label htmlFor="collaboration2" className='group-label'>2</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="collaboration" className='group-input' id="collaboration3" value={3} />
                            <label htmlFor="collaboration3" className='group-label'>3</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="collaboration" className='group-input' id="collaboration4" value={4} />
                            <label htmlFor="collaboration4" className='group-label'>4</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio" name="collaboration" className='group-input' id="collaboration5" value={5} />
                            <label htmlFor="collaboration5" className='group-label'>5</label>
                        </div>
                    </div>
                </div>
                {/* End : Collaboration */}
                {/* Start : Rating Guide */}
                <div className="border-t-2 border-gray-400 p-4">
                    <h6 className="text-lg">Rating Guide</h6>
                    <div>
                        <p className='font-semibold underline'>1 = Not at level :</p>
                        <p>The performance of the individual being rated is below the expected level indicating that the performance is not up to par with what is expected. This rating is usually given when the performance is not satisfactory.</p>
                        <p>This may also be given if there's not enough information available to give a higher rating.</p>
                    </div>
                </div>
                {/* End : Rating Guide */}
            </div>
            {/* End : Ratings */}

        </>
    );
};

export default EmployeeForm;