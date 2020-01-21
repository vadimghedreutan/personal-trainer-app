import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({ profile: { profile, loading }, createProfile, getCurrentProfile, history }) => {
  const [ input, setInput ] = useState({
    bio: '',
    education: '',
    avatar: '',
    location: '',
    hobbies: '',
    certifications: '',
    why: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    getCurrentProfile();

    setInput({
      bio: loading || !profile.bio ? '' : profile.bio,
      education: loading || !profile.education ? '' : profile.education,
      avatar: loading || !profile.avatar ? '' : profile.avatar,
      location: loading || !profile.location ? '' : profile.location,
      hobbies: loading || !profile.hobbies ? '' : profile.hobbies,
      certifications: loading || !profile.certifications ? '' : profile.certifications,
      why: loading || !profile.why ? '' : profile.why,
      facebook: loading || !profile.social ? '' : profile.social.facebook,
      instagram: loading || !profile.social ? '' : profile.social.instagram,
      linkedin: loading || !profile.social ? '' : profile.social.linkedin,
      twitter: loading || !profile.social ? '' : profile.social.twitter
    });
  }, [loading, getCurrentProfile]);

  const { 
    bio,
    education,
    avatar,
    location,
    hobbies,
    certifications,
    why,
    facebook,
    instagram,
    linkedin,
    twitter
   } = input;

   const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  const onSubmit = e => {
    e.preventDefault();
    createProfile(input, history, true);
  }

  return (
    <Fragment>
      <section className="section-dashboard">
        <div className="container">
          
          <div className="section-dashboard__title">
            <h1><i className="fas fa-user-alt"></i> Create your profile</h1>
          </div>

          <div className="profiles-dashboard">
            <div className="profiles-dashboard__content">

              <form onSubmit={e => onSubmit(e)}>
                <div className="input-field">
                  <textarea placeholder="A short bio of yourserlf" className="input-white" name="bio" value={bio} onChange={handleInputChange}></textarea>
                  <span className="input-field__info">Tell us a little about yourself</span>
                </div>
                <div className="input-field">
                  <input placeholder="Avatar"  type="text" className="input-white" name="avatar" value={avatar} onChange={handleInputChange} />
                  <span className="input-field__info">(eg. https://images.unsplash.com/photo.jpg)</span>
                </div>
                <div className="input-field">
                  <input placeholder="Education"  type="text" className="input-white" name="education" value={education} onChange={handleInputChange} />
                  <span className="input-field__info">Give us an idea about your Education.</span>
                </div>
                <div className="input-field">
                  <input placeholder="Location"  type="text" className="input-white" name="location" value={location} onChange={handleInputChange} />
                  <span className="input-field__info">City & state suggested (eg. Boston, MA)</span>
                </div>
                <div className="input-field">
                  <input placeholder="Hobbies"  type="text" className="input-white" name="hobbies" value={hobbies} onChange={handleInputChange} />
                  <span className="input-field__info">Tell us a little about your hobbies</span>
                </div>
                <div className="input-field">
                  <input placeholder="Certification"  type="text" className="input-white" name="certifications" value={certifications} onChange={handleInputChange} />
                  <span className="input-field__info">About your certification</span>
                </div>
                <div className="input-field"> 
                  <input placeholder="Why you train"  type="text" className="input-white" name="why" value={why} onChange={handleInputChange} />
                  <span className="input-field__info">Why you train, tell us a little about that.</span>
                </div>

                <div>
                  <button onClick={(e) => {
                    e.preventDefault();
                    toggleSocialInputs(!displaySocialInputs)
                  }} className="btn mt">Add Social Network Links</button>
                </div>

                {displaySocialInputs && (
                
                <Fragment>
                  <div className="input-field">
                    <i className="fab fa-facebook fa-2x"></i>
                    <input placeholder="Facebook URL"  type="text" className="input-white" name="facebook" value={facebook} onChange={handleInputChange} />
                  </div>

                  <div className="input-field">
                    <i className="fab fa-instagram fa-2x"></i>
                    <input placeholder="Instagram URL"  type="text" className="input-white" name="instagram" value={instagram} onChange={handleInputChange} />
                  </div>

                  <div className="input-field">
                    <i className="fab fa-linkedin fa-2x"></i>
                    <input placeholder="Linkedin URL"  type="text" className="input-white" name="linkedin" value={linkedin} onChange={handleInputChange} />
                  </div>

                  <div className="input-field">
                    <i className="fab fa-twitter fa-2x"></i>
                    <input placeholder="Twitter URL"  type="text" className="input-white" name="twitter" value={twitter} onChange={handleInputChange} />
                  </div>
                </Fragment>
                
                )}

                <input type="submit" className="btn mt" />
                <Link to="/dashboard" className="btn mt">Go Back</Link>

              </form>


            </div>
          </div>


        </div>

      </section>
    </Fragment>
  )
}

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));
