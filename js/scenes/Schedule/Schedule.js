import React from 'react';
import { ListView, View, Text } from 'react-native';


const Schedule = ({data}) => {
  return (
    <ListView
      dataSource={data}
      renderRow={(data) => <View><Text>{data.title}</Text></View>}
    />
  )
}

export default Schedule;