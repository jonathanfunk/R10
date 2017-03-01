import React, { Component } from 'react';
import Schedule from './Schedule';
import { connect } from 'react-redux';
import { fetchSession } from './../../redux/actions';

class ScheduleContainer extends Component {

  componentDidMount() {
    this.props.fetchSession()
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  render() {
    const session = this.props.session;
    console.log(session)
    return (
      <Schedule />
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSession: () => {
    dispatch(fetchSession());
  },
});

const mapStateToProps = state => ({
  session: state.session,
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);