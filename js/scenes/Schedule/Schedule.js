import React from 'react';
import { 
  ListView, 
  View, 
  Text,
  StyleSheet 
} from 'react-native';
import { typography, colors } from './../../config/styles'

const time = (timestamp) => {
  let d = new Date(timestamp * 1000);
	let hh = d.getHours();
	let	h = hh;
	let min = ('0' + d.getMinutes()).slice(-2);
	let	ampm = 'AM';
  
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
        <View>
          <Text>{time(startTime)}</Text>
        </View>
      }
      
      renderRow={(data) => 
        <View>
          <Text>{data.title}</Text>
          <Text>{data.location}</Text>
        </View>
      }
    />
  )
}

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: colors.mediumGrey,
  },
});

export default Schedule;