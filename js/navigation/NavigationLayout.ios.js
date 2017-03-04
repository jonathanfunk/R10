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
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles'

const defaultRouteConfig = {
  navigationBar: {
    titleStyle: {
      color: 'white'
    },
    renderBackground: () => 
      <LinearGradient
        start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
        locations={[0,1]}
        colors={[colors.red, colors.purple]}
        style={styles.linearGradient} />
  }
}

export default class TabScreen extends Component {

  render() {

    return (
      <TabNavigation
        tabBarColor="black"
        id="main"
        navigatorUID="main"
        initialTab="schedule-tab">
        <TabItem
          id="schedule-tab"
          title="Schedule"
          renderTitle={this._renderTitle}
          renderIcon={isSelected => this._renderIcon('ios-calendar', isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </TabItem>
        <TabItem
          id="faves-tab"
          title="Faves"
          renderTitle={this._renderTitle}
          renderIcon={isSelected => this._renderIcon('ios-heart', isSelected)}
        >
          <StackNavigation
            id="faves"
            navigatorUID="faves"
            initialRoute={Router.getRoute('faves')}
          />
        </TabItem>
        <TabItem
          id="map-tab"
          title="Map"
          renderTitle={this._renderTitle}
          renderIcon={isSelected => this._renderIcon('ios-map', isSelected)}
        >
          <StackNavigation
            id="map"
            navigatorUID="map"
            initialRoute={Router.getRoute('map')}
          />
        </TabItem>
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

