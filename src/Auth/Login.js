import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div id="login">
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card px-5 py-5" id="form1">
                            <div className="form-data" v-if="!submitted">
                                <div className="forms-inputs mb-4"> <span>Email</span> <input />
                                    <div className="invalid-feedback">A valid email is required!</div>
                                </div>
                                <div className="forms-inputs mb-4"> <span>Password</span> <input autoComplete="off" type="password" />
                                    <div className="invalid-feedback">Password must be 8 character!</div>
                                </div>
                                <div className="mb-3"> <button className="btn btn-dark w-100">Login</button> </div>
                            </div>
                            <Link to="/Register"><h4>Register</h4></Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login
