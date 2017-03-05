import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { goToSpeaker } from './../../lib/navigationHelpers';
import { styles } from './styles';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { timeHelper } from './../../lib/timeHelper';
import { createFave, deleteFave } from './../../config/model';


class Session extends Component {

  constructor() {
    super();
    this.state = {
      faved: false,
      favedText: 'Add to faves',
      heartColor: 'white'
    }
  }

  render() {

    const createFavorite = (id) => {
      this.setState({ faved: !this.state.faved });
      if (this.state.faved) {
        createFave(id)
        this.setState({ favedText: 'Remove from faves' })
        this.setState({ heartColor: 'red' })
      } else {
        deleteFave(id)
        this.setState({ favedText: 'Add to faves' })
        this.setState({ heartColor: 'white' })
      }
    }

    return (

      <View style={styles.wrap}>
        <View style={styles.locationWrap}>
          <Text style={styles.greyHeader}>{this.props.session.location}</Text>
          {Platform.OS === 'ios' &&
            <Icon name='ios-heart' size={16} color={this.state.heartColor} />
          }
          {Platform.Version === 23 &&
            <Icon name='md-heart' size={16} color={this.state.heartColor} />
          }
        </View>
        <Text style={styles.headerText}>{this.props.session.title}</Text>
        <Text style={styles.time}>{timeHelper(this.props.session.start_time)}</Text>
        <Text style={styles.description}>{this.props.session.description}</Text>
        <Text style={styles.greyHeader}>Presented by:</Text>
        <View style={styles.speakerLink}>
          <TouchableOpacity
            onPress={() => { goToSpeaker(this.props.speaker); }}
            activeOpacity={75 / 100}>
            <View style={styles.speakerWrap}>
              <Image
                style={styles.speakerImage}
                resizeMode={"contain"}
                source={{ uri: this.props.speaker.image }}
              />
              <Text>{this.props.speaker.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{alignItems: 'center'}}
          onPress={() => { createFavorite(this.props.session.session_id) }}
          activeOpacity={75 / 100}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.state.favedText}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Session;