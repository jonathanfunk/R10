import React, { Component } from 'react';
import Session from './Session';
import { connect } from 'react-redux';
import { fetchSpeakers } from './../../redux/actions';

class SessionContainer extends Component {

  componentDidMount() {
    const {sessionData} = this.props;
    this.props.fetchSpeakers(sessionData.data.speakers)
  }

  static route = {
    navigationBar: {
      title: 'Session',
    },
  }

  render() {

    console.log(this.props)
    return (
      <Session />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.speakers.loadingResource,
  speakers: state.speakers.items,
});

const mapDispatchToProps = dispatch => ({
  fetchSpeakers: (id) => {
    dispatch(fetchSpeakers(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);

