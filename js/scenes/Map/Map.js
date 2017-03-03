import MapView from 'react-native-maps';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

const Map = () => {

  const marker = {
    latlng: {
      latitude: 49.2634011,
      longitude: -123.1382246,
    }
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 49.2634011,
        longitude: -123.1382246,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapView.Marker
        coordinate={marker.latlng}
        image={require('./../../assets/map_pin.png')}
      />
    </MapView>
  );
}

export default Map;