import React from 'react';
import { View, Text } from 'react-native';
import CustomAppBar from '../components/CustomAppBar';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomAppBar navigation={navigation} title="MD Nav App" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>HomeScreen</Text>
      </View>
    </View>
  );
}

export default HomeScreen;