import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Animated
} from 'react-native';
import { typography, colors } from './../../config/styles';


class Conduct extends Component {

  constructor() {
    super();
    this.state = {
      expanded: false,
      rotateValue: new Animated.Value(0),
      expandedText: "+"
    }
  }

  onPress = () => {
    this.state.rotateValue.setValue(0)
    
    Animated.timing(
      this.state.rotateValue,
      { toValue: 360 }
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
            <Animated.Text style={[styles.expanded, animationStyles]}>{this.state.expandedText}</Animated.Text>
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

const styles = StyleSheet.create({
  codeWrap: {
    flexDirection: 'row',
  },
  paragraph: {
    fontFamily: typography.fontMainLight,
    marginBottom: 10,
  },
  codeTitle: {
    fontFamily: typography.fontMain,
    color: colors.purple,
    marginBottom: 10,
  },
  expanded: {
    alignItems: 'center',
    textAlign: 'center',
    width: 12,
    height: 16,
  }
});

export default Conduct;