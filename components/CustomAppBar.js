import React from 'react';
import { Appbar } from 'react-native-paper';

const CustomAppBar = ({ navigation, title, back }) => {
  return (

    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : null}
      <Appbar.Content title={title} titleStyle={{ fontSize: 25 }} />
      {!back ? <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} /> : null}
    </Appbar.Header>
  );
};

export default CustomAppBar;