import 'react-native-gesture-handler';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MyOrganizeStackNavigatorParamList } from './types';
import OrganDrawerNavigator from './OrganDrawer';
import MyOrganizeScreen from '../screens/MyOrganizeScreen';

const MyOrganizeStack = createNativeStackNavigator<MyOrganizeStackNavigatorParamList>();

const MyOrganizeStackNavigator = () => {
  return (
    <MyOrganizeStack.Navigator >
      <MyOrganizeStack.Screen 
            name="Drawer"
            component={OrganDrawerNavigator}
            options={{headerShown:false}}
            />
      <MyOrganizeStack.Screen name="MyOrganize" component={MyOrganizeScreen} />
    </MyOrganizeStack.Navigator>
  );
};

export default MyOrganizeStackNavigator;