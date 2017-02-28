import React, { Component } from 'react';
import About from './About';

export default class AboutContainer extends Component {

  constructor() {
    super();
    this.state = {
      codeConductData: [],
      isLoading: true,
    };
  }

  componentDidMount() {

    const endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
    fetch(endpoint)
      // if fetch is successful, read our JSON out of the response
      .then((response) => response.json())
      .then((result) => {
        this.setState({ codeConductData: result });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }

  render() {
    return (
      <About codeOfConducts={this.state.codeConductData}/>
    );
  }
}

