import { createRouter } from '@exponent/ex-navigation';
import About from './../scenes/About';
import Schedule from './../scenes/Schedule';
import GoogleMap from './../scenes/Map';
import Layout from './NavigationLayout';

const Router = createRouter(() => ({
   //More to come
  layout: () => Layout,
  schedule: () => Schedule,  
  about: () => About,
  map: () => GoogleMap,
}));

export default Router;