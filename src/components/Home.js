import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { firebase } from '@react-native-firebase/dynamic-links';

class HomeScreen extends React.Component {

   async componentDidMount() {
      try {
         const initialLink = await firebase.dynamicLinks().getInitialLink();
         console.log('initialLink ', initialLink);
         if (initialLink.url !== null) {
            // Handle dynamic link inside your own application
            if (initialLink.url === 'https://dogb.page.link/AY2a') return this.props.navigation.navigate('Details')
         }
      } catch (error) {
      }
   }

   render() {
      return (
         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button title={'View'} onPress={() => this.props.navigation.navigate('Details')} />
            <Text>Home Screen</Text>
         </View>
      );
   }
};

export default HomeScreen;