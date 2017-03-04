import React, { Component } from 'react';
import Faves from './Faves';
import { connect } from 'react-redux';
import { fetchFaves } from './../../redux/actions/realmActions';

class FavesContainer extends Component {

  componentDidMount() {
    this.props.fetchFaves()
  }

  static route = {
    navigationBar: {
      title: 'Faves',
    },
  }

  render() {
    const FavesData = this.props

    console.log('faves is...', FavesData)
    return (
      <Faves />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.faves.loadingResource,
  faves: state.faves.items,
});

const mapDispatchToProps = dispatch => ({
  fetchFaves: () => {
    dispatch(fetchFaves());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FavesContainer);

