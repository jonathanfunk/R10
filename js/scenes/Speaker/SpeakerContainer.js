import React, { Component } from 'react';
import Speaker from './Speaker';


class SpeakerContainer extends Component {

  static route = {
    navigationBar: {
      title: 'About the Speaker',
      tintColor: 'white',
      backgroundColor: 'black',
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

