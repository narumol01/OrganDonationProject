import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OrganStackNavigator from './OrganStack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <OrganStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;