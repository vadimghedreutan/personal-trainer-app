import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const imgAuth = require('../../img/auth-img.jpg');

const Login = ({ login, isAuthenticated }) => {
  
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const { email, password } = input;

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })
  
  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  }

  // Redirect if logged in
  if(isAuthenticated) {
    return <Redirect to='/dashboard' />
  }

  return (
  <Fragment>
    <section className="section-register">
      <div className="container-auth">

        <div className="auth-image" style={ { backgroundImage: `url(${imgAuth})` } }></div>


        <div className="auth-register">
          <div className="auth-register__home">
            <Link to='/'><i className="fas fa-arrow-left"></i></Link> 
          </div>
          
          <div className="container-width">
            
            <form onSubmit={e => onSubmit(e)}>
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
              <div>
                <input type="submit" value="Sign In" className="btn" />
              </div>
            </form>
            <p className="input-field__login">Don't have an account? <Link to='/register'>Register</Link></p>
          </div>
  
        </div>

      </div>
    </section>
  </Fragment>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
