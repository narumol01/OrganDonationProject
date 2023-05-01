import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View , Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomNavigationTab } from '@ui-kitten/components';
import { OrganDrawerNavigatorParamList} from './types';


import MyOrganizeScreen from '../screens/MyOrganizeScreen';
import SelectOrganTypeScreen from '../screens/SelectOrganType'
const OrganDrawer = createDrawerNavigator<OrganDrawerNavigatorParamList>();


const OrganDrawerNavigator = () => {
    return (
      <OrganDrawer.Navigator>
        <OrganDrawer.Screen name="MyOrganize" component={MyOrganizeScreen} />
        <OrganDrawer.Screen name="SelectOrganType" component={SelectOrganTypeScreen} />
      </OrganDrawer.Navigator>
    );
  };
  
  export default OrganDrawerNavigator;