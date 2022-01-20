import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { log } from '../Redux/Actions/AuthAction';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './Login.css';
const Login = ({log, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
      const { email, password } = formData;
    
      const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    
      const onSubmit = async e => {
        e.preventDefault();
        log(email, password);
      }
      if (isAuthenticated) {
        return <Redirect to="/" />;
      };
    return (
        <div id="login">
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card px-5 py-5" id="form1">
                            <div className="form-data" v-if="!submitted" onSubmit={e => onSubmit(e)}>
                                <div className="forms-inputs mb-4" > <span>Email</span> < input placeholder="Email" name='email'  value={email} onChange={e =>onchange(e)} />
                                    <div className="invalid-feedback">A valid email is required!</div>
                                </div>
                                <div className="forms-inputs mb-4"> <span>Password</span> <input autoComplete="off" type="password"  placeholder="Password"  name='password' value={password} onChange={e =>onchange(e) } />
                                    <div className="invalid-feedback">Password must be 8 character!</div>
                                </div>
                                <div className="mb-3"> <button className="btn btn-dark w-100" type="submit">Login</button> </div>
                            </div>
                            <Link to="/Register"><h4>Register</h4></Link>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
Login.propTypes = {
    log: propTypes.func.isRequired 
}
const mapStateToProps = state => ({
    isAuthenticated: state.Login.isAuthenticated
  })
export default connect (mapStateToProps, {log}) (Login)
