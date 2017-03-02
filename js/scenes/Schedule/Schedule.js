import React from 'react';
import {
  ListView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { typography, colors } from './../../config/styles';
import { goToSession } from './../../lib/navigationHelpers'

const time = (timestamp) => {
  let d = new Date(timestamp * 1000);
  let hh = d.getHours();
  let h = hh;
  let min = ('0' + d.getMinutes()).slice(-2);
  let ampm = 'AM';

  if (hh > 12) {
    h = hh - 12;
    ampm = 'PM';
  } else if (hh === 12) {
    h = 12;
    ampm = 'PM';
  } else if (hh == 0) {
    h = 12;
  }
  return h + ':' + min + ' ' + ampm;
}


const Schedule = ({data}) => {
  return (
    <ListView
      dataSource={data}
      renderSectionHeader={(sectionData, startTime) =>
        <View style={styles.header}>
          <Text style={styles.headerText}>{time(startTime)}</Text>
        </View>
      }

      renderRow={data =>
        <TouchableHighlight
          onPress={() => goToSession('schedule', { data })}
          activeOpacity={75 / 100}
          underlayColor={colors.lightGrey}>
          <View style={styles.row}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.location}>{data.location}</Text>
          </View>
        </TouchableHighlight>
      }
    />
  )
}

const styles = StyleSheet.create({
  header: {
    height: 25,
    backgroundColor: colors.lightGrey,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: typography.fontMain,
    fontSize: 12,
  },
  row: {
    padding: 10,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: typography.fontMain,
    marginBottom: 5,
  },
  location: {
    fontFamily: typography.fontMainLight,
    fontSize: 12,
    color: colors.mediumGrey,
  },
});

export default Schedule;