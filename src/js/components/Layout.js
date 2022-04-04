/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Welcome',
    };
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Footer />
      </div>
    );
  }
}
