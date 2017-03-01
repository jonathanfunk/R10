import React, { Component } from 'react';
import Schedule from './Schedule';
import { connect } from 'react-redux';
import { fetchSession } from './../../redux/actions';
import { ListView } from 'react-native';

class ScheduleContainer extends Component {

  componentDidMount() {
    //this.props.fetchSession()
  }

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  render() {
    return (
      <Schedule />
    )
  }
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
})

const mapDispatchToProps = dispatch => ({
  fetchSession: () => {
    dispatch(fetchSession());
  },
  // fetchFavedSessions() {
  //   dispatch(fetchFavedSessions())
  // },
});

const mapStateToProps = state => ({
  dataSource: dataSource.cloneWithRowsAndSections(
    state.session.sessionData.dataBlob,
    state.session.sessionData.sectionIds,
    state.session.sessionData.rowIds,
  ),
  // isLoading: state.sessionsisLoading,
  //session: state.session,
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);