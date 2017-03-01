import React, { Component } from 'react';
import Router from './router';
import { Text } from 'react-native';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, typography } from '../config/styles';

export default class TabScreen extends Component {

  render() {

    return (
      <TabNavigation
        tabBarColor="black"
        id="main"
        navigatorUID="main"
        initialTab="about-tab">
        <TabItem
          id="about-tab"
          title="About"
          renderTitle={this._renderTitle}
          renderIcon={isSelected => this._renderIcon('ios-information-circle', isSelected)}
        >
          <StackNavigation
            id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')}
          />
        </TabItem>
        <TabItem
          id="schedule-tab"
          title="Schedule"
          renderTitle={this._renderTitle}
          renderIcon={isSelected => this._renderIcon('ios-information-circle', isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
          />
        </TabItem>
      </TabNavigation>
    );
  }

  _renderIcon(iconName, isSelected) {
    let color = isSelected ? 'white' : colors.mediumGrey;
    return (
      <Icon name={iconName} size={32} color={color} />
    );
  }

  _renderTitle(isSelected, text) {

    const titleStyle = {
      color: isSelected ? 'white' : colors.mediumGrey,
      fontSize: 10,
    }

    return (
      <Text style={titleStyle}>{text}</Text>
    );
  }

}

