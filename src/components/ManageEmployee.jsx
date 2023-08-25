import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageEmployee = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/users').then(res =>
            setEmployees(res.data)
        ).catch(err => {
            console.error(err);
        });
    }, []);

    return (
        <div>
            <h1>Manage Employees</h1>
            <ul>
                {employees.map(user => (
                    <li key={user.id}>
                        <strong>Name:</strong> {user.name} <br />
                        <strong>Email:</strong> {user.email} <br />
                        <strong>Role:</strong> {user.role} <br />
                        <strong>Submitted Forms:</strong> {user.submittedForm.join(', ')} <br />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageEmployee;