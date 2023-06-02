import React from 'react';
import PropTypes from 'prop-types';

const UserDetails = ({ info }) => {
  const { userName, email, phone } = info;

  return (
    <div>
      <h2>User Details</h2>
      <p>Username: {userName}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  );
};

UserDetails.propTypes = {
  info: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserDetails;
