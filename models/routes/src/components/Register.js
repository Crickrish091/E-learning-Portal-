import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        isEducator: false,
    });

    const { name, email, password, isEducator } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/users/register', formData);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
            <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
            <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
            <label>
                <input type="checkbox" name="isEducator" checked={isEducator} onChange={(e) => setFormData({ ...formData, isEducator: e.target.checked })} />
                I am an educator
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
