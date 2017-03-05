import React from 'react';
import {
  ListView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import { typography, colors } from './../../config/styles';
import { goToSession } from './../../lib/navigationHelpers';
import { styles } from './styles';
import { timeHelper } from './../../lib/timeHelper';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { queryFaves } from './../../config/model'

const queried = queryFaves();

console.log(queried)

const heartColor = (id) => {
  if(queried.includes(id)){
    return colors.red;
  } else {
    return 'white'
  }
}


const Schedule = ({ data }) => {

  return (
    <ListView
      dataSource={data}
      renderSectionHeader={(sectionData, startTime) =>
        <View style={styles.header}>
          <Text style={styles.headerText}>{timeHelper(startTime)}</Text>
        </View>
      }

      renderRow={data =>
        <View style={styles.row}>
        <TouchableOpacity
          onPress={() => { goToSession('schedule', data); }}
          activeOpacity={75 / 100}>
          <View>
            <Text style={styles.title}>{data.title}</Text>
            <View style={styles.locationWrap}>
              <Text style={styles.location}>{data.location}</Text>
              {Platform.OS === 'ios' &&
                <Icon name='ios-heart' size={12} color={heartColor(data.session_id)} />
              }
              {Platform.Version === 23 &&
                <Icon name='md-heart' size={12} color={heartColor(data.session_id)} />
              }
            </View>
          </View>
        </TouchableOpacity>
        </View>
      }
    />
  )

}


export default Schedule;