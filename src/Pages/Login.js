import React from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle, FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const [error, setError] = useState('');
    const { signIn, providerSignIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();

    const handleGithubSignIn = () => {
        providerSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                setError('');
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.log(e);
                setError('');
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogleSignIn = () => {
        providerSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(e => {
                console.log(e);
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                toast.success('Thanks for your access');
                navigate(from, { replace: true });
            })
            .catch(e => {
                setError(e.message)
            })
            .finally(() => {
                setLoading(false);
            })

    }
    return (
        <div className='w-full h-screen bg-no-repeat bg-cover bg-fixed relative flex flex-row-reverse place-items-center '>

            <img src="https://media.istockphoto.com/photos/world-autism-awareness-day-concept-adult-and-child-hands-holding-on-picture-id1387347551?b=1&k=20&m=1387347551&s=170667a&w=0&h=lWchBQB_QZnF2KsD63CXV7X_4u74bADcKxnz8zwyV58=" alt="" className='w-full h-full absolute' />

            <div className='w-100% mr-0  lg:w-1/4 lg:mr-40 flex-auto absolute text-center   p-8  rounded-lg shadow-lg  bg-blue-400' style={{ height: "500px" }}>
                <Form onSubmit={handleSubmit}>

                    <div ><FaUserCircle className=' m-auto text-yellow-700' style={{ height: "60px", width: "60px" }}></FaUserCircle></div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>

                        </label>
                        <input type="email" name='email' placeholder="Enter Email" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered w-full max-w-xs" required />
                        <label className="label">
                            <span className="label-text-alt text-red-600 font-bold">{error}</span>

                        </label>
                        <p className='text-xl text-green-900 pt-3'>New to this side? Please<button className="btn btn-link"><Link to='/register'>Sign Up</Link></button></p>
                        <button className="btn btn-primary">Log In</button>

                    </div>
                </Form>
                <div className='flex mt-3 align-items-center'>
                    <button onClick={handleGithubSignIn} className="btn btn-outline  mr-4"><FaGithub className='h-7 w-7'></FaGithub></button>
                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary"><FaGoogle className='h-7 w-7'></FaGoogle></button>


                </div>


            </div>
            <div className='flex-auto w-50%'>

            </div>

        </div>
    );
};

export default Login;