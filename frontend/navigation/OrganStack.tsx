import 'react-native-gesture-handler';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OrganStackNavigatorParamList } from './types';
import OrganDrawerNavigator from './OrganDrawer';

import LoginScreen from '../screens/LoginScreen';
import SelectOrganTypeScreen from '../screens/SelectOrganType'
import ShowAllOrganizeScreen from '../screens/ShowAllOrganizeScreen'
import MyOrganizeScreen from '../screens/MyOrganizeScreen';

const OrganStack = createNativeStackNavigator<OrganStackNavigatorParamList>();

const OrganStackNavigator = () => {
  return (
    <OrganStack.Navigator >
      <OrganStack.Screen 
            name="Drawer"
            component={OrganDrawerNavigator}
            options={{headerShown:false}}
            />
      <OrganStack.Screen name="Login" component={LoginScreen} />
      
      <OrganStack.Screen name="MyOrganize" component={MyOrganizeScreen} />
      <OrganStack.Screen name="SelectOrganType" component={SelectOrganTypeScreen} />
      <OrganStack.Screen name='ShowAllOrganize'
      options={({route}) => ({title: route.params.nameOrgan})}
       component={ShowAllOrganizeScreen}/>
    </OrganStack.Navigator>
  );
};

export default OrganStackNavigator;