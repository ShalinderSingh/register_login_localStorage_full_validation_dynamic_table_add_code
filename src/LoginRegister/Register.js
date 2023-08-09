import React, { useState } from 'react'
import './Register.css'
import { ToastContainer } from 'react-toastify';
import { useToast } from './ToastContext';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const { showToast, errorToast } = useToast();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        phone: '',
    });
    const [formErrors, setFormErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const validateForm = () => {
        const newErrors = {};

        const nameRegex = /^[A-Za-z]+$/;
        if (!formData.fname.match(nameRegex)) {
            newErrors.fname = 'First name should only contain alphabets.';
        }
        if (!formData.lname.match(nameRegex)) {
            newErrors.lname = 'Last name should only contain alphabets.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.match(emailRegex)) {
            newErrors.email = 'Invalid email address.';
        }

        if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long.';
        }



        const phonePattern = /^\d{10}$/
        if (!formData.phone.match(phonePattern)) {
            newErrors.phone = 'Phone number is required';

        }
        setFormErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const existingData = JSON.parse(localStorage.getItem('registrationData'));

            const newData = Array.isArray(existingData) ? existingData : [];

            const isDuplicate = newData.some(
                (data) =>
                    data.email === formData.email ||
                    data.phone === formData.phone

            )
            if (isDuplicate) {
                errorToast('Email already registered. Please use a different email.');
                return;
            }
            const { email, password, phone } = formData;
            newData.push({ email, password, phone })
            localStorage.setItem('registrationData', JSON.stringify(newData));
            showToast('Registration successful!');


        } else {
            errorToast('Registration failed. Please correct the errors.');
        }
    };

    return (
        <>
            <div className="register-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            First Name:
                            <input
                                id='fname'
                                type="text"
                                name="fname"
                                value={formData.fname}
                                onChange={handleChange}
                            />
                        </label>
                        {formErrors.fname && <span>{formErrors.fname}</span>}
                    </div>
                    <div>
                        <label>
                            Last Name:
                            <input
                                id='lname'
                                type="text"
                                name="lname"
                                value={formData.lname}
                                onChange={handleChange}
                            />
                        </label>
                        {formErrors.lname && <span>{formErrors.lname}</span>}
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                id='email'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                        {formErrors.email && <span>{formErrors.email}</span>}
                    </div>
                    <div>
                        <label>
                            Password:
                            <input
                                id='password'
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </label>
                        {formErrors.password && <span>{formErrors.password}</span>}
                    </div>
                    <div>
                        <label>
                            Phone Number:
                            <input
                                id='phone'
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </label>
                        {formErrors.phone && <span>{formErrors.phone}</span>}
                    </div>
                    <button type="submit">Register</button>
                    <ToastContainer />
                </form>
                <Link to={"/login"}>Please login</Link>

            </div>

        </>
    )
}

export default Register