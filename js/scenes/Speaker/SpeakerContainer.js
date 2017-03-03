import React, { Component } from 'react';
import Speaker from './Speaker';

class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Speaker',
    },
  }

  render() {
    return (
      <Speaker />
    );
  }
}

export default SpeakerContainer;

