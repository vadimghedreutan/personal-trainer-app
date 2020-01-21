import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section className="section-profiles">
            <div className="container">
            <div className="section-profiles__title">
              <h1>Browse and connect with ours trainers</h1>
            </div>
              <Fragment>
              {profiles.length > 0 ? (
                  profiles.map(profile => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))
                ) : (
                  <h4>No profiles found...</h4>
              )}
              </Fragment>
            </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  )
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfiles }
)(Profiles);
