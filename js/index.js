import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Router from './navigation/router';
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import Store from './redux/store';
import { Provider } from 'react-redux';


export default class R10 extends Component {

  render() {

    const navigationContext = new NavigationContext({
      router: Router,
      store: Store,
    })

    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation navigatorUID="root" initialRoute={Router.getRoute('layout')} />
        </NavigationProvider>
      </Provider>
    );
  }
}
