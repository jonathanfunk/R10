import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { goToSpeaker } from './../../lib/navigationHelpers';
import { styles } from './styles';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { timeHelper } from './../../lib/timeHelper';
import { createFave, deleteFave, queryFaves } from './../../config/model';

const queried = queryFaves();

class Session extends Component {

  constructor() {
    super();
    this.state = {
      favedToggle: false,
    }
  }

  componentDidMount() {
    if (queried.includes(this.props.session.session_id)) {
      this.setState({ favedToggle: true })
    } else {
      this.setState({ favedToggle: false })
    }
  }

  render() {

    const createFavorite = (id) => {
      if (this.state.favedToggle) {
        deleteFave(id)
        this.setState({ favedToggle: false })
      } else {
        createFave(id)
        this.setState({ favedToggle: true })
      }
    }
    
    return (

      <ScrollView style={styles.wrap}>
        <View style={styles.locationWrap}>
          <Text style={styles.greyHeader}>{this.props.session.location}</Text>
          {Platform.OS === 'ios' &&
            <Icon name='ios-heart' size={16} color={this.state.favedToggle ? 'red' : 'white'} />
          }
          {Platform.Version === 23 &&
            <Icon name='md-heart' size={16} color={this.state.favedToggle ? 'red' : 'white'} />
          }
        </View>
        <Text style={styles.headerText}>{this.props.session.title}</Text>
        <Text style={styles.time}>{timeHelper(this.props.session.start_time)}</Text>
        <Text style={styles.description}>{this.props.session.description}</Text>
        {
          this.props.speaker &&        
          <View style={styles.speakerLink}>
            <Text style={styles.greyHeader}>Presented by:</Text>
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
        }
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={() => { createFavorite(this.props.session.session_id) }}
          activeOpacity={75 / 100}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.state.favedToggle ? 'Remove from Faves' : 'Add to Faves'}</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default Session;