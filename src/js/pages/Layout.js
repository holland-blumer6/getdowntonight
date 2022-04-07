/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default Layout;
