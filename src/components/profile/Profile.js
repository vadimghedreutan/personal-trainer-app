import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import { getProfileById } from '../../actions/profile';

const Profile = ({ getProfileById, profile: { profile, loading }, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <Fragment>
      { profile === null || loading ? <Spinner /> : 
        <Fragment>
          <section className="section-profile">
            <div className="container">
              
              <div className="profile">
                <ProfileTop profile={profile} />
              </div>

            </div>

            <div className="container">
              <div className="profile-about">
                <ProfileAbout profile={profile} />
              </div>
            </div>


          </section>
        </Fragment>
      }
    </Fragment>
  )
}

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
})

export default connect(mapStateToProps, { getProfileById })(Profile)
