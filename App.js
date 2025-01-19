import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigator from './components/AppNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
