/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Profile;
