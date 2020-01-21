import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ProfileExperience from './ProfileExperience';

const ProfileAbout = ({ profile: {
  education,
  hobbies,
  why,
  location,
  certifications,
  experience
} }) => {
  return (
    <Fragment>
        <div className="profile-about__left">
          <h3>LOCATION:</h3>
          <p>{location}</p>
          <div className="line"></div>
          <h3>PROFESSIONAL EXPERIENCE:</h3>
          { experience.length > 0 ? (<Fragment>
            {experience.map(experience => (
              <ProfileExperience key={ experience._id } experience={experience} />
            ))}
          </Fragment>) : ( <h3>No experience credentials</h3> ) }
          <div className="line"></div>
          {
            why && (
              <Fragment>
                <h3>HOBBIES / INTERESTS:</h3>
                <p>{hobbies}</p>
              </Fragment>
            )
          }
        </div>

        <div className="profile-about__right">
          <h3>EDUCATION:</h3>
          <p>{education}</p>
          <div className="line"></div>
          <h3>CERTIFICATIONS:</h3>
          <p>{certifications}</p>
          <div className="line"></div>
          {
            why && (
              <Fragment>
                <h3>WHY I TRAIN:</h3>
                <p>{why}</p>
              </Fragment>
            )
          }
        </div>
    </Fragment>
  )
}

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileAbout
