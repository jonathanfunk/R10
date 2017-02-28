import { createRouter } from '@exponent/ex-navigation';
import About from './../scenes/About'
import Layout from './NavigationLayout';

const Router = createRouter(() => ({
   //More to come
  layout: () => Layout,  
  about: () => About,
}));

export default Router;