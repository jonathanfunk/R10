import React, { Component } from 'react';
import About from './About';
import { connect } from 'react-redux';
import { fetchCodeOfConduct } from './../../redux/actions';

class AboutContainer extends Component {

  componentDidMount() {
    this.props.fetchCodeOfConduct()
  }

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  render() {
    const codeOfConduct = this.props.codeOfConduct
    return (
      <About codeOfConducts={codeOfConduct}/>
    );
  }
}

const mapStateToProps = state => ({
  codeOfConduct: state.codeOfConduct,
});

const mapDispatchToProps = dispatch => ({
  fetchCodeOfConduct: () => {
    dispatch(fetchCodeOfConduct());
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);

