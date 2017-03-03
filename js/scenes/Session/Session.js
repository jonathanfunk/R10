import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { goToSpeaker } from './../../lib/navigationHelpers';


const Session = ({ session, speaker }) => {
  return (
    <View>
      <Text>{session.location}</Text>
      <Text>{session.title}</Text>
      <Text>{session.description}</Text>
      <Text>Presented by:</Text>
      <TouchableHighlight
        onPress={() => { goToSpeaker(speaker); }}
        activeOpacity={75 / 100}
        underlayColor={'grey'}>
        <Text>{speaker.name}</Text>
      </TouchableHighlight>
      <Image
        style={{ width: 300, height: 200, }}
        resizeMode={"contain"}
        source={{ uri: speaker.image }}
      />
    </View>
  )
}

export default Session;