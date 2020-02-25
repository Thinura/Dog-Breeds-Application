import * as React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Route from './src/Route.js';

export default class App extends React.Component {

  render() {
    return (
      <Route />
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
