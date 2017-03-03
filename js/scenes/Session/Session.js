import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';

const Session = ({session, speaker}) => {
  return (
    <View>
    <Text>{session.location}</Text>
    <Text>{session.title}</Text>
    <Text>{session.description}</Text>
    <Text>Presented by:</Text>
    <Text>Yep</Text>
    </View>
  )
}

export default Session;