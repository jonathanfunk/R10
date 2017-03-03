import React, { Component } from 'react';
import About from './About';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { fetchCodeOfConduct } from './../../redux/actions/codeOfConductActions';

class AboutContainer extends Component {

  componentDidMount() {
    this.props.fetchCodeOfConduct()
  }

  static route = {
    navigationBar: {
      title: 'About',
    },
  }

  render() {
    const codeOfConduct = this.props.codeOfConduct;
    const loading = this.props.loading;
    if (loading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <About codeOfConduct={codeOfConduct} />
      );
    }
  }
}

const mapStateToProps = state => ({
  loading: state.codeOfConduct.loadingResource,
  codeOfConduct: state.codeOfConduct.items,
});

const mapDispatchToProps = dispatch => ({
  fetchCodeOfConduct: () => {
    dispatch(fetchCodeOfConduct());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);

