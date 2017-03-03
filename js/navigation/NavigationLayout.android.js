import React, { Component } from 'react';
import Router from './router';
import { Text, View } from 'react-native';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
} from '@exponent/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, typography } from '../config/styles';

export default class TabScreen extends Component {

  render() {

    return (
      <DrawerNavigation
        id="main"
        navigatorUID="main"
        drawerWidth={300}
        initialItem="about-tab"
        >
        
        <DrawerNavigationItem
          id="schedule-tab"
          title="Schedule"
          renderTitle={isSelected => this._renderTitle(isSelected, 'Schedule')}
          renderIcon={isSelected => this._renderIcon('md-calendar', isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="map-tab"
          title="Map"
          renderTitle={isSelected => this._renderTitle(isSelected, 'Map')}
          renderIcon={isSelected => this._renderIcon('md-map', isSelected)}
        >
          <StackNavigation
            id="map"
            navigatorUID="map"
            initialRoute={Router.getRoute('map')}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="about-tab"
          title="About"
          renderTitle={isSelected => this._renderTitle(isSelected, 'About')}
          renderIcon={isSelected => this._renderIcon('md-information-circle', isSelected)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  _renderIcon(iconName, isSelected) {
    let color = isSelected ? colors.purple : colors.mediumGrey;
    return (
      <View style={{width: 32}}>
        <Icon name={iconName} size={32} color={color} />
      </View>
    );
  }

  _renderTitle(isSelected, text) {

    const titleStyle = {
      color: isSelected ? colors.purple : colors.mediumGrey,
    }

    return (
      <Text style={titleStyle}>{text}</Text>
    );
  }

}