import React from 'react';
import Header from '../core/components/navigation/Header';
import EmployeeForm from './form/EmployeeForm';

const Home = () => {
    return (
        <>
            <Header />
            <div className='bg-body overflow-auto h-full'>
                <div className="container mx-auto">
                    <div className='bg-head flex justify-end rounded-md mt-4'>
                        <div className='max-w-[200px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores praesentium eos quam voluptatum explicabo sequi veritatis earum consequatur dolorem id pariatur est vitae illum autem veniam voluptate ad sunt fuga mollitia assumenda tempora saepe, magni accusantium fugit. Pariatur quasi tempora adipisci architecto assumenda praesentium officiis veniam reiciendis natus nostrum dignissimos voluptatem similique, officia consectetur exercitationem atque animi accusantium. Accusamus, facere minus. Nemo iste autem neque tempora perferendis. Minus ipsam explicabo delectus doloremque cum ex. Aliquid, numquam quam, est eveniet error ex eaque dolorum aspernatur sunt ut qui unde architecto. Itaque, saepe a accusamus tempora aliquid maiores quibusdam cumque hic porro!
                        </div>
                    </div>
                    <EmployeeForm />
                </div>
            </div>
        </>
    );
};

export default Home;