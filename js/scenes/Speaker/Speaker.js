import React from 'react';
import { Text, View, Image } from 'react-native';

const Speaker = ({ speaker }) => {

  return (

    <View>
      <Image
        style={{ width: 300, height: 200, }}
        resizeMode={"contain"}
        source={{ uri: speaker.image }}
      />
      <Text>{speaker.name}</Text>
      <Text>{speaker.bio}</Text>
    </View>

  );
}

export default Speaker;