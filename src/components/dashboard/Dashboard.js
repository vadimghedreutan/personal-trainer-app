import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({ getCurrentProfile, deleteAccount, auth: {user}, profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <section className="section-dashboard">
      <div className="container">
      {loading && profile === null ? <Spinner /> : 
        <Fragment>
        <div className="section-dashboard__title">
          <h1><i className="fas fa-user-alt"></i> Welcome { user && user.name }</h1>
        </div>
        </Fragment>
      }
      {
        profile !== null ? (
          <Fragment>
          <div className="profiles-dashboard">
            <div className="profiles-dashboard__content">
              <DashboardActions />
              <Experience experience={profile.experience} />

              <div className="mt">
                <button
                  onClick={() => deleteAccount()} 
                  className="btn"><i className="fas fa-user-minus"></i> Delete My Account
                </button>
              </div>
            </div>
          </div>
          </Fragment>
          ) : (
        <Fragment>
          <div className="profiles-dashboard">
            <div className="profiles-dashboard__content">
              <p>You have not yet setup a profile, please add some info</p>
              <Link to='/create-profile' className='btn' >Create Profile</Link>
            </div>
          </div>
        </Fragment>
        )
      }
      </div>
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
}) 

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount } )(Dashboard);