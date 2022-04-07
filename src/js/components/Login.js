/* eslint-disable react/button-has-type */
import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button>
        onClick={() => {
        dispatch(login({ value: { name: 'Holland', age: 24, email: 'asea@assdas.com' } }));
      } } Login
      </button>
      <button>
        onClick={() => {
        dispatch(logout({ value: { name: '', age: 0, email: '' } }));
      } } Logout
      </button>
    </div>
  );
}

export default Login;
