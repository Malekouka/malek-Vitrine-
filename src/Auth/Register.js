import React from 'react'
import { Link } from 'react-router-dom';
import './Register.css';
const Register = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card px-5 py-5" id="form1">
                            <div className="form-data">
                                <div className="forms-inputs mb-4"> <span>Username</span><input />
                                </div>
                                <div className="forms-inputs mb-4"> <span>Email</span><input />
                                </div>
                               
                                <div className="forms-inputs mb-4"> <span>Password</span><input autoComplete="off" type="password" />
                                </div>
                                <Link to="/login"><h4>You Have Acount</h4></Link>
                                <div className="mb-3"> <button className="btn btn-dark w-100">Signup</button></div>
                                
                            </div>
                           
                            <div className="success-data" v-else>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        
    )
}

export default Register
