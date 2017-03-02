import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { typography, colors } from './../../config/styles';
import Conduct from './../../components/Conduct'


class About extends Component {

  render() {

    return (
      <ScrollView style={styles.aboutWrap}>
        <View style={styles.logoWrap}>
          <Image
            style={styles.logo}
            resizeMode={"contain"}
            source={require('./../../assets/r10_logo.png')}
          />
        </View>
        <View style={styles.aboutContent}>
          <Text style={styles.paragraph}>R10 is a conference that focuses on just about any topic related to dev.</Text>
          <Text style={styles.header}>Date & Venue</Text>
          <Text style={styles.paragraph}>R10 is a conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.</Text>
          <Text style={styles.header}>Code of Conduct</Text>
        </View>
        <View>
          {this.props.codeOfConduct.map((code, i) => (
            <Conduct codeData={code} key={i}/>
          ))}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>&#9400; RED Academy {new Date().getFullYear()}</Text>
        </View>
      </ScrollView>
    )
  }
}

About.propTypes = {
  codeOfConduct: PropTypes.array.isRequired,
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


export default About;