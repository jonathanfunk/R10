import React, { Component } from 'react';
import Faves from './Faves';
import { connect } from 'react-redux';
import { ActivityIndicator } from 'react-native';
import { fetchFaves } from './../../redux/actions/realmActions';
import { ListView } from 'react-native';
import { loadingStyle } from './../../config/styles';
import { realm } from './../../config/model'

class FavesContainer extends Component {

  constructor() {
    super();
    realm.addListener('change', () => {
     this.props.fetchFaves()
    });
  }

  componentDidMount() {
    this.props.fetchFaves()
  }

  static route = {
    navigationBar: {
      title: 'Faves',
    },
  }

  render() {
    const favesData = this.props.dataSource
    const loading = this.props.isLoading;

    if (loading) {
      return (
        <ActivityIndicator
          animating={true}
          size="small"
          color="black"
          style={loadingStyle.centered}
        />
      );
    } else {
      return (
        <Faves data={favesData} />
      );
    }
  }
}

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
})

const mapDispatchToProps = dispatch => ({
  fetchFaves: () => {
    dispatch(fetchFaves());
  },
});

const mapStateToProps = state => ({
  dataSource: dataSource.cloneWithRowsAndSections(
    state.faves.sessionData.dataBlob,
    state.faves.sessionData.sectionIds,
    state.faves.sessionData.rowIds,
  ),
  isLoading: state.session.loadingResource,
});

export default connect(mapStateToProps, mapDispatchToProps)(FavesContainer);

