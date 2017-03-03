import React, { Component, PropTypes } from 'react';
import { Text, View, Image } from 'react-native';

const Session = ({ session, speaker }) => {
  return (
    <View>
      <Text>{session.location}</Text>
      <Text>{session.title}</Text>
      <Text>{session.description}</Text>
      <Text>Presented by:</Text>
      <Text>{speaker.name}</Text>
      <Image
        style={{ width: 300, height: 200, }}
        resizeMode={"contain"}
        source={{ uri: speaker.image }}
      />
    </View>
  )
}

export default Session;