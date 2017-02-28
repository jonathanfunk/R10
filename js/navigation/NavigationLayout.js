import React, { Component } from 'react';
import Router from './router'
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@exponent/ex-navigation';

// Treat the TabScreen route like any other route -- you may want to set
// it as the initial route for a top-level StackNavigation
export default class TabScreen extends Component {

  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="about">
        <TabItem
          id="about"
          title="About"
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
}