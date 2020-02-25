import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home';
import DetailsScreen from './components/Details';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();


function Route() {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   );
}


export default Route;