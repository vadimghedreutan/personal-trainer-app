import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = ({ addExperience, history }) => {

  const [ input, setInput ] = useState({
    location: '',
    from: '',
    to: '',
    description: ''
  });

  const { 
    location,
    from,
    to,
    description
   } = input;

   const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })


  return (
    <section className="section-dashboard">
    <div className="container">
      
      <div className="section-dashboard__title">
        <h1><i className="fas fa-user-alt"></i> Add Experience</h1>
      </div>

      <div className="profiles-dashboard">
        <div className="profiles-dashboard__content">

          <form onSubmit={e => {
            e.preventDefault();
            addExperience(input, history);
          }}>
            <div className="input-field">
              <input placeholder="Location"  type="text" className="input-white" name="location" value={location} onChange={handleInputChange} />
              <span className="input-field__info">School</span>
            </div>
            <div className="input-field">
              <input placeholder="From"  type="date" className="input-white" name="from" value={from} onChange={handleInputChange} required  />
              <span className="input-field__info">From</span>
            </div>
            <div className="input-field">
              <input placeholder="To"  type="date" className="input-white" name="to" value={to} onChange={handleInputChange} required />
              <span className="input-field__info">To</span>
            </div>
            <div className="input-field"> 
              <input placeholder="Description"  type="text" className="input-white" name="description" value={description} onChange={handleInputChange} />
              <span className="input-field__info">Description</span>
            </div>

            <input type="submit" className="btn mt" />
            <Link to="/dashboard" className="btn mt">Go Back</Link>

          </form>


        </div>
      </div>


    </div>

  </section>
  )
}

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
}

export default connect(null, { addExperience })(AddExperience);
