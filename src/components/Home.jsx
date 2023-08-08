import React from 'react';
import Header from '../core/components/navigation/Header';
import EmployeeForm from './form/EmployeeForm';
import brand from '../assets/images/fulllogo.png';

const Home = () => {
    const getDate = new Date();
    const formatDate = (date) => {
        const options = { day: '2-digit', month: 'short', year: 'numeric' };
        const formattedDate = new Date(date).toLocaleDateString('en-US', options);

        // Split the formatted date into day, month, and year parts
        const [month, day, year] = formattedDate.split(' ');

        // Convert the month abbreviation to uppercase
        const capitalizedMonth = month.toUpperCase();

        // Return the formatted date with uppercase month abbreviation and desired format
        return `${day} ${capitalizedMonth} ${year}`;
    };
    return (
        <>
            <Header />
            <div className='bg-body overflow-auto h-full'>
                <div className="container overflow-hidden my-5 mx-auto">
                    <div className='bg-head flex justify-end rounded-md my-4'>
                        <div className='bg-white max-w-[300px] rounded-md px-6 py-10 m-10'>
                            <figure className='mb-4'>
                                <img src={brand} alt="brand" className='mx-auto' />
                            </figure>
                            <p className='text-xl font-semibold border-b-2 border-zinc-300 py-2'>Office of Human Resources</p>
                            <div className='mb-4'>
                                <p className='font-medium text-lg'>Performance Review</p>
                                <p className='font-medium'>{formatDate(getDate)}</p>
                            </div>
                            <p>Hi! Would you mind taking few minutes to complete this form? It would be great if you can submit your response by Aug 9, 2023. Thank you!</p>
                        </div>
                    </div>
                    <EmployeeForm />
                </div>
            </div>
        </>
    );
};

export default Home;