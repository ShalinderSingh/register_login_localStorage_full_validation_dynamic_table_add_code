import React, { useState } from 'react'
import { useToast } from './ToastContext';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const { showToast, errorToast } = useToast();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUserData = JSON.parse(localStorage.getItem('registrationData'));
        // console.log(storedUserData, 'LLLLL')

        if (storedUserData) {
            const user = storedUserData.find(
                (userData) =>
                    userData.email === formData.email && userData.password === formData.password
            );
            if (user) {
                console.log(user)
                // localStorage.setItem("auth", ([user.email, user.password]))
                login(user)
                showToast('Login successful!');
                navigate('/dashboard')
                setFormData({
                    email: '',
                    password: '',
                });
            } else {
                errorToast('Invalid email or password. Please try again.');
            }
        } else {
            errorToast('User not registered. Please register first.');
        }
    };


    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login