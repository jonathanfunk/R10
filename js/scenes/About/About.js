import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';
import Conduct from './../../components/Conduct'
import { styles } from './styles';


const About = ({ codeOfConduct }) => {


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
          {codeOfConduct.map((code, i) => (
            <Conduct codeData={code} key={i}/>
          ))}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>&#9400; RED Academy {new Date().getFullYear()}</Text>
        </View>
      </ScrollView>
    )
}

About.propTypes = {
  codeOfConduct: PropTypes.array.isRequired,
}

export default About;