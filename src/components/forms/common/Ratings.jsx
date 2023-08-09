import React from 'react';

const Ratings = (props) => {
    const { values, input } = props;
    let value = values.review;
    return (
        <div>
            {/* Start : Ratings */}
            <div className={`${input === 'disabled' ? 'bg-gray-200' : 'bg-white'} overflow-hidden rounded-md mb-4`}>
                <div className="bg-blue-500">
                    <p className="text-white p-3 m-0">RATINGS [TO BE FILLED BY THE REVIEW MANAGER]</p>
                </div>
                {/* Start : Leadership */}
                <div className="p-4">
                    <p className='mb-3 font-semibold'>Leadership</p>
                    <div className="flex">
                        <div className="group-radio flex">
                            <input
                                type="radio"
                                name="leadership"
                                className='group-input'
                                id='leadRate1'
                                value={1}
                                disabled={input}
                            />
                            <label htmlFor="leadRate1" className='group-label'>1</label>
                        </div>
                        <div className="group-radio flex">
                            <input
                                type="radio"
                                name="leadership"
                                className='group-input'
                                id="leadRate2"
                                value={2}
                                disabled={input}
                            />
                            <label htmlFor="leadRate2" className='group-label'>2</label>
                        </div>
                        <div className="group-radio flex">
                            <input
                                type="radio"
                                name="leadership"
                                className='group-input'
                                id="leadRate3"
                                value={3}
                                disabled={input} />
                            <label htmlFor="leadRate3" className='group-label'>3</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="leadership"
                                className='group-input'
                                id="leadRate4"
                                value={4}
                                disabled={input}
                            />
                            <label htmlFor="leadRate4" className='group-label'>4</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="leadership"
                                className='group-input'
                                id="leadRate5"
                                value={5}
                                disabled={input}
                            />
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
                            <input type="radio"
                                name="business"
                                className='group-input'
                                id='business1'
                                value={1}
                                disabled={input}
                            />
                            <label htmlFor="business1" className='group-label'>1</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="business"
                                className='group-input'
                                id="business2"
                                value={2}
                                disabled={input}
                            />
                            <label htmlFor="business2" className='group-label'>2</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="business"
                                className='group-input'
                                id="business3"
                                value={3}
                                disabled={input}
                            />
                            <label htmlFor="business3" className='group-label'>3</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="business"
                                className='group-input'
                                id="business4"
                                value={4}
                                disabled={input}
                            />
                            <label htmlFor="business4" className='group-label'>4</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="business"
                                className='group-input'
                                id="business5"
                                value={5}
                                disabled={input}
                            />
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
                            <input type="radio"
                                name="technology"
                                className='group-input'
                                id='technology1'
                                value={1}
                                disabled={input}
                            />
                            <label htmlFor="technology1" className='group-label'>1</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="technology"
                                className='group-input'
                                id="technology2"
                                value={2}
                                disabled={input}
                            />
                            <label htmlFor="technology2" className='group-label'>2</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="technology"
                                className='group-input'
                                id="technology3"
                                value={3}
                                disabled={input}
                            />
                            <label htmlFor="technology3" className='group-label'>3</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="technology"
                                className='group-input'
                                id="technology4"
                                value={4}
                                disabled={input}
                            />
                            <label htmlFor="technology4" className='group-label'>4</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="technology"
                                className='group-input'
                                id="technology5"
                                value={5}
                                disabled={input}
                            />
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
                            <input type="radio"
                                name="inclusive"
                                className='group-input'
                                id='inclusive1'
                                value={1}
                                disabled={input}
                            />
                            <label htmlFor="inclusive1" className='group-label'>1</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="inclusive"
                                className='group-input'
                                id="inclusive2"
                                value={2}
                                disabled={input}
                            />
                            <label htmlFor="inclusive2" className='group-label'>2</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="inclusive"
                                className='group-input'
                                id="inclusive3"
                                value={3}
                                disabled={input}
                            />
                            <label htmlFor="inclusive3" className='group-label'>3</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="inclusive"
                                className='group-input'
                                id="inclusive4"
                                value={4}
                                disabled={input}
                            />
                            <label htmlFor="inclusive4" className='group-label'>4</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="inclusive"
                                className='group-input'
                                id="inclusive5"
                                value={5}
                                disabled={input}
                            />
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
                            <input type="radio"
                                name="collaboration"
                                className='group-input'
                                id='collaboration1'
                                value={1}
                                disabled={input}
                            />
                            <label htmlFor="collaboration1" className='group-label'>1</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="collaboration"
                                className='group-input'
                                id="collaboration2"
                                value={2}
                                disabled={input}
                            />
                            <label htmlFor="collaboration2" className='group-label'>2</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="collaboration"
                                className='group-input'
                                id="collaboration3"
                                value={3}
                                disabled={input}
                            />
                            <label htmlFor="collaboration3" className='group-label'>3</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="collaboration"
                                className='group-input'
                                id="collaboration4"
                                value={4}
                                disabled={input}
                            />
                            <label htmlFor="collaboration4" className='group-label'>4</label>
                        </div>
                        <div className="group-radio flex">
                            <input type="radio"
                                name="collaboration"
                                className='group-input'
                                id="collaboration5"
                                value={5}
                                disabled={input}
                            />
                            <label htmlFor="collaboration5" className='group-label'>5</label>
                        </div>
                    </div>
                </div>
                {/* End : Collaboration */}
                {/* Start : Rating Guide */}
                <div className="border-t-2 border-gray-400 p-4">
                    <h6 className="text-lg mb-3">Rating Guide :</h6>
                    <div className='mb-3'>
                        <p className='font-semibold underline'>1 = Not at level :</p>
                        <p>The performance of the individual being rated is below the expected level indicating that the performance is not up to par with what is expected. This rating is usually given when the performance is not satisfactory.</p>
                        <p>(This may also be given if there's not enough information available to give a higher rating.)</p>
                    </div>
                    <div className='mb-3'>
                        <p className='font-semibold underline'>2 = Partially at Level :</p>
                        <p> The individual is not meeting all the expectations for their current position but is still performing at an acceptable level.</p>
                    </div>
                    <div className='mb-3'>
                        <p className='font-semibold underline'>3 = At Level :</p>
                        <p>The performance of the individual is meeting all the expectations for their current position</p>
                    </div>
                    <div className='mb-3'>
                        <p className='font-semibold underline'>4 = Partially at Next Level :</p>
                        <p>The performance of the individual is meeting all the expectations for their current position and has demonstrated some of the skills required for the next level.</p>
                    </div>
                    <div className='mb-3'>
                        <p className='font-semibold underline'>5 = At Next Level :</p>
                        <p>The individual is performing exceptionally well in current field and also has shown potential that goes beyond their current level of achievement.</p>
                    </div>
                </div>
                {/* End : Rating Guide */}
            </div>
            {/* End : Ratings */}
        </div>
    );
};

export default Ratings;