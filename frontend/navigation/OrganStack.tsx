import 'react-native-gesture-handler';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OrganStackNavigatorParamList } from './types';
import MyOrganizeStackNavigator from './MyOrganizeStack';
import SelectOrganTypeStackNavigator from './SelectOrganTypeStack';


import LoginScreen from '../screens/LoginScreen';
import ShowAllOrganizeScreen from '../screens/ShowAllOrganizeScreen'

// page not finish yet
import FormDonorScreen from '../screens/FormDonorScreen';
import FormRequestOrganScreen from '../screens/FormRequestOrganScreen'

const OrganStack = createNativeStackNavigator<OrganStackNavigatorParamList>();

const OrganStackNavigator = () => {
  return (
    <OrganStack.Navigator >
      <OrganStack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      <OrganStack.Screen name="MyOrganize" component={MyOrganizeStackNavigator} options={{headerShown:false}}/>
      <OrganStack.Screen name="FormDonor" component={FormDonorScreen}/>
      <OrganStack.Screen name="FormRequestOrgan" component={FormRequestOrganScreen}/>
      <OrganStack.Screen name="SelectOrganType" component={SelectOrganTypeStackNavigator} options={{headerShown:false}} />
      <OrganStack.Screen name='ShowAllOrganize'
      options={({route}) => ({title: route.params.nameOrgan})}
       component={ShowAllOrganizeScreen}/>
    </OrganStack.Navigator>
  );
};

export default OrganStackNavigator;