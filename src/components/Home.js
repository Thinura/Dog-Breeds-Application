import * as React from 'react';
import { View, Text, Button } from 'react-native';

function HomeScreen({ navigation }) {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Button title={'View'} onPress={() => navigation.navigate('Details')} />
         <Text>Home Screen</Text>
      </View>
   );
};

export default HomeScreen;