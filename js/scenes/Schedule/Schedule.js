import React from 'react';
import {
  ListView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
} from 'react-native';
import { typography, colors } from './../../config/styles';
import { goToSession } from './../../lib/navigationHelpers';
import { styles } from './styles';
import { timeHelper } from './../../lib/timeHelper';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


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
        <TouchableHighlight
          onPress={() => { goToSession('schedule', data); }}
          activeOpacity={75 / 100}
          underlayColor={colors.lightGrey}>
          <View style={styles.row}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.location}>{data.location}</Text>
            {Platform.OS === 'ios' &&
              <Text>You'll only see me on iOS devices.</Text>
            }
            {Platform.Version === 23 &&
              <Text>And I'm only on Android devices running Nougat.</Text>
            }
          </View>
        </TouchableHighlight>
      }
    />
  )

}


export default Schedule;