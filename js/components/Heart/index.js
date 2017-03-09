import React, { Component } from 'react';
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { queryFaves } from './../../config/model';


class Heart extends Component {

  constructor() {
    super();
    this.state = {
      isFaved: false,
    }
    this.queried = queryFaves();
  }

  componentDidMount() {
    if (this.queried.includes(this.props.data)) {
      this.setState({ isFaved: true })
    } else {
      this.setState({ isFaved: false })
    }
  }

  render() {
    return (
      <Icon name={this.props.iconName} size={12} color={this.state.isFaved ? 'red' : 'white'} />
    )
  }
}

export default Heart;


