import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/LeftNavbar';
import '../Styles/AllUsers.css'; // Ensure this is the correct path to your CSS file

export default function AllUsers() {
    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate(); // Hook for navigation

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/auth/accounts');
            const data = await response.json();
            setAccounts(data);
        } catch (error) {
            console.error('Error fetching accounts:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this account?')) {
            try {
                await fetch(`http://localhost:5000/api/auth/accounts/${id}`, {
                    method: 'DELETE',
                });
                fetchAccounts(); // Refresh the accounts list
            } catch (error) {
                console.error('Error deleting account:', error);
            }
        }
    };

    return (
        <div className="all-users-container">
            <LeftNavbar />
            <Navbar />
            <div className="content">
                <h1>All Users</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>first name</th>
                            <th>first name</th>
                            <th>Email</th>
                            <th>Area</th>
                            <th>Sector</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map(account => (
                            <tr key={account._id}>
                                <td>{account.employeeId}</td>
                                <td>{account.firstName}</td>
                                <td>{account.lastName}</td>
                                <td>{account.email}</td>
                                <td>{account.area}</td>
                                <td>{account.sector}</td>
                                <td>
                                    <button className="action-button" onClick={() => navigate('/updateinfo')}>Update</button>
                                    <button className="action-button" onClick={() => handleDelete(account._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
