import * as React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import Route from './src/Route.js';
import dynamicLinks from '@react-native-firebase/dynamic-links';
 
const link =  dynamicLinks().buildLink({
  link: 'https://dogb.page.link',
  domainUriPrefix: 'https://dogb.page.link/d6o5',
  analytics: {
    campaign: 'banner',
  },
});

const handleDynamicLink = link => {
  // Handle dynamic link inside your own application
  if (link.url === 'https://invertase.io/offer') {
    // ... navigate to your offers page?
  }
};

useEffect(() => {
  const unsubscribe = firebase.dynamicLinks().onLink(handleDynamicLink);
  // When the is component unmounted, remove the listener
  return () => unsubscribe();
}, []);

export default class App extends React.Component {
  
  render() {
    return (
      <Route />
    );
  }
}

AppRegistry.registerComponent(appName, () => App);
