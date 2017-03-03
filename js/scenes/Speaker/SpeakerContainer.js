import React, { Component } from 'react';
import Speaker from './Speaker';

class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Speaker',
    },
  }

  render() {
    const speakerData = this.props.speakerData
    return (
      <Speaker speaker={speakerData} />
    );
  }
}

export default SpeakerContainer;

