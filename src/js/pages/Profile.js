/* eslint-disable prefer-const */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Profile() {
  let navigate = useNavigate();
  let { username } = useParams();
  let { article } = useParams();
  return (
    <div>
      <h1>THIS IS THE PROFILE PAGE FOR {username}!</h1>
      <h1> this is an {article}</h1>
      <button
        onClick={() => {
          navigate('/about');
        }}
      >
        {' '}
        Change to about page
      </button>
    </div>
  );
}

export default Profile;
