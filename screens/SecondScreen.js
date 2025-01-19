import React from 'react';
import { View, Text } from 'react-native';
import CustomAppBar from '../components/CustomAppBar';

function SecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <CustomAppBar navigation={navigation} title="MD Nav App" back />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>SecondScreen</Text>
      </View>
    </View>
  );
}

export default SecondScreen;