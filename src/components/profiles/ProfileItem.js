
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name },
    avatar,
    bio
  }
}) => {
  return (
    <Fragment>
      <div className='profiles'>
        <div className="profiles__image">
          <img src={avatar} alt='' className="profiles__image-circular" />
        </div>

        <div className="profiles__content">
          <h3>{name}</h3>
          <p>{bio}</p>
          <Link to={`/profile/${_id}`} className="btn">View Profile</Link>
        </div>
      </div>

    </Fragment>



  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;