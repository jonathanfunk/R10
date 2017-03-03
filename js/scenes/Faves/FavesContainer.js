import React, { Component } from 'react';
import Faves from './Faves';

class FavesContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Faves',
    },
  }

  render() {
    return (
      <Faves />
    );
  }
}

export default FavesContainer;

