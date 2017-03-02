import { NavigationActions } from '@exponent/ex-navigation';
import Store from '../redux/store';
import Router from '../navigation/router';

export const goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(NavigationActions.push(
    currentNavigatorUID, 
    Router.getRoute('session', { sessionData })
  ));
}
