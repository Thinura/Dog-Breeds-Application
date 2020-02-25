import * as React from 'react';
import { View, Text, Image } from 'react-native';

function DetailsScreen() {
   return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Image style={{ width: "100%", height: "80%" }} source={{ uri: 'https://images.dog.ceo/breeds/affenpinscher/n02110627_8695.jpg' }} resizeMode="contain" />
         <Text>Details Screen</Text>
      </View>
   );
};

export default DetailsScreen;