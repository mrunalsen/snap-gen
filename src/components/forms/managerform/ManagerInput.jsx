import React from 'react';

const ManagerInput = (props) => {
    const { values, handleChange, input } = props;
    return (
        <>
            {/* Start : Manager Review */}
            <div className={`${input === 'disabled' ? 'bg-gray-200' : 'bg-white'} overflow-hidden rounded-md mb-4`}>
                <div className="bg-blue-500">
                    <p className='text-white p-3 m-0'>MANAGER REVIEW [TO BE FILLED BY THE REVIEW MANAGER]</p>
                </div>
                <div className="p-3">
                    <div className="group mb-4">
                        <label htmlFor='mq1'>PERFORMANCE DIFFERENTIATORS</label>
                        <input
                            value={values.review.mq1}
                            onChange={handleChange}
                            type="text"
                            id="mq1"
                            name='review.mq1'
                            placeholder='Manager to describe performance differentiators displayed by the employee'
                            className='disabled:cursor-not-allowed border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100 focus:bg-gray-100' disabled={input} />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='mq2'>DEVELOPMENT ACTIONS</label>
                        <input
                            value={values.review.mq2}
                            onChange={handleChange}
                            type="text"
                            id="mq2"
                            name="review.mq2"
                            placeholder='Manager to describe development areas for the employee'
                            className='disabled:cursor-not-allowed border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100 focus:bg-gray-100' disabled={input} />
                    </div>
                    <div className="group mb-4">
                        <label htmlFor='mq2'>FUTURE FOCUS AREAS</label>
                        <input
                            value={values.review.mq3}
                            onChange={handleChange}
                            type="text"
                            id="mq3"
                            name="review.mq3"
                            placeholder='Manager to highlight future focus areas for the employee'
                            className='disabled:cursor-not-allowed border-2 border-zinc-300 outline-0 w-full p-1 focus:bg-gray-100 focus:bg-gray-100' disabled={input} />
                    </div>
                </div>
            </div>
            {/* End : Manager Review */}
        </>
    );
};

export default ManagerInput;