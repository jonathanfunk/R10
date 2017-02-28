import React, { PropTypes } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

const About = ({ codeOfConducts }) => (
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
      {codeOfConducts.map((codeOfConduct, i) => (
        <View key={i}>
          <Text style={styles.codeTitle}>{codeOfConduct.title}</Text>
          <Text style={styles.paragraph}>{codeOfConduct.description}</Text>
        </View>
      ))}
    </View>
    <View style={styles.footer}>
      <Text style={styles.footerText}>&#9400; RED Academy { new Date().getFullYear() }</Text>
    </View>
  </ScrollView>
);

About.propTypes = {
  codeOfConducts: PropTypes.array.isRequired,
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
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  aboutContent: {
    paddingTop: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    marginBottom: 10,
  },
  codeTitle: {
    color: '#9963ea',
    marginBottom: 10,
  },
  footer: {
    borderTopColor: '#e6e6e6',
    borderTopWidth: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
  footerText: {
    fontWeight: '300',
  }
});


export default About