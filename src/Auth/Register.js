import React from 'react'
import { Link } from 'react-router-dom';
import { signup } from '../Redux/Actions/AuthAction';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import './Register.css';
const Register = ({signup}) => {
    onst [formData, setFormData]= useState({
        userName:'',
        email:'',
        password:'',
        password_confirmation:''
      });
      const { userName, email, password,password_confirmation } = formData;
      const onchange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

      const onSubmit = async e => {
        e.preventDefault();
        
        signup(userName, email,password,password_confirmation);
       e.target.reset();
      }
    return (
        <div>
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card px-5 py-5" id="form1">
                            <div className="form-data" onSubmit={e =>onSubmit(e)}>
                                <div className="forms-inputs mb-4"> <span>Username</span><input  name='userName' value={userName} onChange={e =>onchange(e)}/>
                                </div>
                                <div className="forms-inputs mb-4"> <span>Email</span><input name='email1' value={email} onChange={e =>onchange(e)} />
                                </div>
                               
                                <div className="forms-inputs mb-4"> <span>Password</span><input autoComplete="off" type="password" value={password} onChange={e =>onchange(e)} />
                                </div>
                                <Link to="/login"><h4>You Have Acount</h4></Link>
                                <div className="mb-3"> <button className="btn btn-dark w-100" type="submit">Signup</button></div>
                                
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
Register.propTypes = {
  
    signup: propTypes.func.isRequired
  }

export default Register
