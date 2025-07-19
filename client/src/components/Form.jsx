import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Form = () => {
    const [data, setData] = useState({ uname: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setData((oldData) => ({
            ...oldData,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const postData = await axios.post('http://127.0.0.1:4000/users', data);
            console.log(postData.data);
            setData({ uname: '', email: '', password: '' });
            setMessage('User data submitted successfully!');
            setTimeout(() => {
                setTimeout(() => {
                    setMessage('');
                }, 0);
            }, 1000);
        } catch (error) {
            console.error(error);
            setMessage(error.response?.data?.error || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">User Information Form</h2>
            {message && (
                <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`}>
                    {message}
                </div>
            )}
            <form id="user-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="uname" className="form-label">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="uname"
                        name="uname"
                        placeholder="Enter your name"
                        value={data.uname}
                        onChange={handleChange}
                        required
                    />
                </div>


                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        value={data.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        value={data.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-primary me-2"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
                <Link  to="/display">
                    <button type="button" className="btn btn-secondary">View Data</button>
                </Link>
            </form>
        </div>
    );
};

export default Form;