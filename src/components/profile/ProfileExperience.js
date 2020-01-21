import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';

const ProfileExperience = ({ experience: {
  location,
  from,
  to,
  description
} }) => <div>
        <p>{location}</p>        
        <p><Moment format='YYYY/MM/DD'>{from}</Moment> - <Moment format='YYYY/MM/DD'>{to}</Moment> </p>
        <p>{description}</p>
        </div>;


ProfileExperience.propTypes = {
experience: PropTypes.object.isRequired
}

export default ProfileExperience
