import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking
} from 'react-native';
import { styles } from './styles';

const Speaker = ({ speaker }) => {

  handleClick = () => {
    Linking.canOpenURL(speaker.url).then(supported => {
      if (supported) {
        Linking.openURL(speaker.url);
      } else {
        console.log('Don\'t know how to open URI: ' + speaker.url);
      }
    });
  };

  return (
    <ScrollView style={styles.border}>
      <View style={styles.speakerWrap}>
        <Image
          style={styles.speakerImage}
          resizeMode={"contain"}
          source={{ uri: speaker.image }}
        />
        <Text style={styles.headerText}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={this.handleClick}
          activeOpacity={75 / 100}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Read more on Wikipedia</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>

  );
}

export default Speaker;