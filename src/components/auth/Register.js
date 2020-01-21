import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const imgAuth = require('../../img/auth-img.jpg');

const Register = ({ setAlert, register, isAuthenticated }) => {
  
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const { name, email, password, password2 } = input;
  
  const onSubmit = e => {
    e.preventDefault();

    if(input.password !== input.password2) {
      setAlert('Passwords do not match', 'danger')
    } else {
      register({ name, email, password });
    }
  }

  if(isAuthenticated) {
    return <Redirect to='dashboard' />
  }

  return (
  <Fragment>
    <section className="section-register">
      <div className="container-auth">

        <div className="auth-image" style={ { backgroundImage: `url(${imgAuth})` } }></div>


        <div className="auth-register">
          <div className="auth-register__home">
            <Link to="/"><i className="fas fa-arrow-left"></i></Link> 
          </div>
          
          <div className="container-width">
            
            <form onSubmit={e => onSubmit(e)}>
              <div className="input-field">
                <input 
                  placeholder="Name" 
                  id="first_name" 
                  type="text" 
                  className="validate"
                  name="name"
                  value={name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="input-field">
                <input 
                  placeholder="Email" 
                  id="email" 
                  type="text"
                  name="email"
                  value={email} 
                  className="validate"
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="input-field">
                <input 
                  placeholder="Password" 
                  id="password" 
                  type="text"
                  name="password"
                  value={password} 
                  className="validate"
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-field">
                <input 
                  placeholder="Confirm Password" 
                  type="text"
                  name="password2"
                  value={password2} 
                  className="validate"
                  onChange={handleInputChange} 
                />
              </div>
              <div>
                <input type="submit" value="Register" className="btn" />
              </div>
            </form>
            <p className="input-field__login">Already have an accunt? <Link to='/login'>Sign In</Link></p>
          </div>
  
        </div>

      </div>
    </section>
  </Fragment>
  )
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);
