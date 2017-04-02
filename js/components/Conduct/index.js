import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated
} from 'react-native';
import { styles } from './styles';

class Conduct extends Component {

  constructor() {
    super();
    this.state = {
      expanded: false,
      rotateValue: new Animated.Value(0),
    }
  }

  onPress = () => {

    this.state.rotateValue.setValue(0)
    Animated.timing(
      this.state.rotateValue,
      { toValue: 1 }
    ).start()
    LayoutAnimation.linear();
    this.setState({ expanded: !this.state.expanded });

  }

  render() {

    let spin = this.state.rotateValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    let animationStyles = {
      transform: [
        { rotate: spin },
      ]
    }
    
    return (
      <View>
        <TouchableOpacity
          onPress={this.onPress}
        >
          <View style={styles.codeWrap}>
            <Animated.Text style={[styles.expanded, animationStyles]}>{this.state.expanded ? '-' : '+'}</Animated.Text>
            <Text style={styles.codeTitle}>{this.props.codeData.title}</Text>
          </View>
        </TouchableOpacity>
        {this.state.expanded &&
          <Text style={styles.paragraph}>{this.props.codeData.description}</Text>
        }
      </View>
    );
  }
}

export default Conduct;