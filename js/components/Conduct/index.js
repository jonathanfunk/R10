import React, { Component, PropTypes } from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation
} from 'react-native';
import { typography, colors } from './../../config/styles';


class Conduct extends Component {

  constructor(){
    super();
    this.state = {
      expanded: false,
    }
  }

  onPress = () => {
    LayoutAnimation.linear();
    this.setState({ expanded: !this.state.expanded });
  }

  render() {

    console.log(this.props)
    return (
      <View>
        <TouchableOpacity
          onPress={this.onPress}
         >
          <Text style={styles.codeTitle}>{this.props.codeData.title}</Text>
        </TouchableOpacity>
        {this.state.expanded &&
          <Text style={styles.paragraph}>{this.props.codeData.description}</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aboutWrap: {
    padding: 10,
  },
  logo: {
    width: 200,
  },
  logoWrap: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  aboutContent: {
    paddingTop: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: typography.fontMain,
    color: colors.mediumGrey,
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
  footer: {
    borderTopColor: colors.lightGrey,
    borderTopWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  footerText: {
    fontFamily: typography.fontMainLight,
  }
});

export default Conduct;