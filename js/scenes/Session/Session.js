import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight
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

      <View>
        <Text>{this.props.session.location}</Text>
        {Platform.OS === 'ios' &&
          <Icon name='ios-heart' size={16} color={this.state.heartColor} />
        }
        {Platform.Version === 23 &&
          <Icon name='md-heart' size={16} color={this.state.heartColor} />
        }
        <Text>{this.props.session.title}</Text>
        <Text>{timeHelper(this.props.session.start_time)}</Text>
        <Text>{this.props.session.description}</Text>
        <Text>Presented by:</Text>
        <TouchableHighlight
          onPress={() => { goToSpeaker(this.props.speaker); }}
          activeOpacity={75 / 100}
          underlayColor={'grey'}>
          <Text>{this.props.speaker.name}</Text>
        </TouchableHighlight>
        <Image
          style={{ width: 300, height: 200, }}
          resizeMode={"contain"}
          source={{ uri: this.props.speaker.image }}
        />
        <TouchableHighlight
          onPress={() => { createFavorite(this.props.session.session_id) }}
          activeOpacity={75 / 100}>
          <View style={styles.button}>
            <Text>{this.state.favedText}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default Session;