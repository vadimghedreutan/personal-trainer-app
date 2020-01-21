import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map(edx => (
    <tr key={edx._id}>
      <td>{edx.location}</td>
      <td>
        <Moment format="YYYY/MM/DD">{moment.utc(edx.from)}</Moment> -{' '}
        {edx.to === null ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{moment.utc(edx.to)}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(edx._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    
      <div className="profiles-dashboard__table">
        <h2 className="mt">Experience Credentials</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Location</th>
              <th className="hide-sm">Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{experiences}</tbody>
        </table>
      </div>
   
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperience }
)(Experience);