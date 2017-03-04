import React, { Component } from 'react';
import Session from './Session';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { fetchSpeakers } from './../../redux/actions/speakerActions';

class SessionContainer extends Component {

  componentDidMount() {
    this.props.fetchSpeakers(this.props.sessionData.speaker)
  }

  static route = {
    navigationBar: {
      title: 'Session',
    },
  }

  render() {
    const sessionData = this.props.sessionData
    const speakerData = this.props.speakers
    const loading = this.props.isLoading;

    if (loading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <Session
          session={sessionData}
          speaker={speakerData}
        />
      );
    }
  }
}

const mapStateToProps = state => ({
  isLoading: state.speakers.loadingResource,
  speakers: state.speakers.items,
});

const mapDispatchToProps = dispatch => ({
  fetchSpeakers: (id) => {
    dispatch(fetchSpeakers(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);

