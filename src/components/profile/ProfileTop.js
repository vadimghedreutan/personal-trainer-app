import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({ profile: {
  avatar,
  bio,
  social,
  user: { name }

} }) => {
  return (
    <Fragment>
        <div className="profile__image">
          <img src={avatar} alt="" className="profile__image-circular" />
        </div>

        <div className="profile__content">
          <h3>{name}</h3>
          <p>{bio}</p>
        </div>

        <div className="profile__icons">

          {social && social.facebook && (
            <a href={social.facebook} target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook-square fa-2x"></i></a>
          )}
          {social && social.instagram && (
            <a href={social.instagram} target='_blank' rel='noopener noreferrer'><i className="fab fa-instagram fa-2x"></i></a>
          )}
          {social && social.linkedin && (
            <a href={social.linkedin} target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin fa-2x"></i></a>
          )}
          {social && social.twitter && (
            <a href={social.twitter} target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter-square fa-2x"></i></a>
          )}
          
          
        </div>
    </Fragment>
  )
}

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
}

export default ProfileTop

