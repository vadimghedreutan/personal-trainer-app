import React from 'react'
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (

    <ul className="profiles-dashboard__list">
      <li><Link to="/edit-profile" className="btn"><i className="fas fa-user-edit"></i> Edit Profile</Link></li>
      <li><Link to="/add-experience" className="btn"><i className="fas fa-graduation-cap"></i> Add Experience</Link></li>
    </ul>

  )
}

export default DashboardActions
