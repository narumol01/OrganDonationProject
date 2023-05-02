import 'react-native-gesture-handler';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { OrganStackNavigatorParamList } from './types';
import MyOrganizeStackNavigator from './MyOrganizeStack';
import SelectOrganTypeStackNavigator from './SelectOrganTypeStack';


import LoginScreen from '../screens/LoginScreen';
import ShowAllOrganizeScreen from '../screens/ShowAllOrganizeScreen'
import ShowOrganizeScreen from '../screens/ShowOrganizeScreen';

// page not finish yet
import FormDonorScreen from '../screens/FormDonorScreen';
import FormRequestOrganScreen from '../screens/FormRequestOrganScreen'
import ManageRequestOrganScreen from '../screens/ManageRequestOrganScreen';

const OrganStack = createNativeStackNavigator<OrganStackNavigatorParamList>();

const OrganStackNavigator = () => {
  return (
    <OrganStack.Navigator >
      <OrganStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <OrganStack.Screen name="MyOrganize" component={MyOrganizeStackNavigator} options={{ headerShown: false }} />
      <OrganStack.Screen name="FormDonor" component={FormDonorScreen} />
      <OrganStack.Screen name="FormRequestOrgan" component={FormRequestOrganScreen} />
      <OrganStack.Screen name="SelectOrganType" component={SelectOrganTypeStackNavigator} options={{ headerShown: false }} />
      <OrganStack.Screen name='ShowAllOrganize'
        options={({ route }) => ({ title: route.params.nameOrgan })}
        component={ShowAllOrganizeScreen} />
      <OrganStack.Screen name='ShowOrganize'
        options={({ route }) => ({ title: route.params.name_Organize })}
        component={ShowOrganizeScreen} />
        <OrganStack.Screen name="ManageRequestOrgan" component={ManageRequestOrganScreen} />
    </OrganStack.Navigator>
  );
};

export default OrganStackNavigator;