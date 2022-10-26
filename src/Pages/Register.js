import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Form, Link } from 'react-router-dom';

import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                setError('');
                toast.success('Account created Successfully')
                console.log(user);
            })
            .catch(e => {
                console.error(e);
                setError(e.message);

            })
    }
    return (
        <div className='w-full h-screen bg-no-repeat bg-cover bg-fixed relative flex justify-center place-items-center '>

            <img src="https://images.pexels.com/photos/8654293/pexels-photo-8654293.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className='w-full h-full absolute' />

            <div className='w-100% mr-0  lg:w-1/3 lg:mr-40 flex-auto absolute text-center flex justify-center place-items-center   rounded-lg shadow-lg border-2 border-blue-500 bg-transparent' style={{ height: "620px" }}>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <h1 className='text-3xl font-bold text-white bg-yellow-600 p-2 text-center'>Sign Up First !!</h1>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-bold text-black">Your Name</span>

                        </label>
                        <input type="text" name='name' placeholder="Enter Name" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text font-bold text-black">Photo URL</span>

                        </label>
                        <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text font-bold text-black">Your Email</span>

                        </label>
                        <input type="email" name='email' placeholder="Enter Email" className="input input-bordered w-full max-w-xs" required />


                        <label className="label">
                            <span className="label-text font-bold text-black">Password</span>

                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text-alt text-red-600 font-bold">{error}</span>

                        </label>
                        <p className='text-xl font-bold text-green-900 pt-3'>Already have an account? Please<button className="btn btn-link"><Link to='/login'>Log In</Link></button></p>
                        <button className="btn btn-primary">Sign Up</button>

                    </div>
                </Form>



            </div>


        </div>
    );
};

export default Register;