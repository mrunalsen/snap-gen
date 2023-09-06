import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../core/components/navigation/Header';
import CreateEmployee from './CreateEmployee';

const ManageEmployee = () => {
    const [employees, setEmployees] = useState([]);
    /* Defining a role-to-color object */
    const roleColors = {
        admin: 'bg-red-500',
        manager: 'bg-orange-500',
        employee: 'bg-green-500',
    };

    const addEmployee = (newEmployee) => {
        // You can add validation here if needed.
        // Assuming the newEmployee parameter contains the data for the new employee.

        // Send a POST request to add the new employee to the server
        axios.post('http://localhost:3000/users', newEmployee)
            .then((response) => {
                // Update the employees list with the newly added employee
                setEmployees((prevEmployees) => [...prevEmployees, response.data]);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const deleteUser = (userId) => {
        axios.delete(`http://localhost:3000/users/${userId}`).then(res =>
            setEmployees((prevEmployees) => prevEmployees.filter((user) => user.id !== userId)),
        ).catch((err) => {
            console.error(err);
        });
    };

    useEffect(() => {
        axios.get('http://localhost:3000/users').then(res =>
            setEmployees(res.data)
        ).catch(err => {
            console.error(err);
        });
    }, []);

    return (
        <>
            <Header />
            <div className="bg-body h-full overflow-auto">
                <div className="container mx-auto p-4 sm:p-0">
                    <div className='flex justify-between items-center'>
                        <h1 className='text-4xl my-4'>Manage Employees</h1>
                        <label htmlFor="addemployee" className='btn-outline-primary  text-blue-500 hover:text-white h-full'>Add Employee</label>
                    </div>
                    <div>
                        <input type="checkbox" name="addemployee" id="addemployee" className='hidden peer' />
                        <div className='rounded bg-white max-h-0 overflow-hidden transition-all duration-300 ease-linear peer-checked:max-h-[500px] w-full'>
                            <CreateEmployee addEmployee={addEmployee} />
                        </div>
                    </div>


                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Role</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((user) => (
                                <tr key={user.id}>
                                    <td className="px-4 py-2">{user.name}</td>
                                    <td className="px-4 py-2">
                                        <span
                                            className={
                                                `${roleColors[user.role] || ''} rounded-md text-sm text-white p-1`
                                            }
                                        >
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2">{user.email}</td>
                                    <td className="px-4 py-2">
                                        <button className='text-rose-500' onClick={() => deleteUser(user.id)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
};

export default ManageEmployee;