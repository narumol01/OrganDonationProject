import 'react-native-gesture-handler';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SelectOrganTypeStackNavigatorParamList } from './types';
import OrganDrawerNavigator from './OrganDrawer';
import SelectOrganType from '../screens/SelectOrganType';

const SelectOrganTypeStack = createNativeStackNavigator<SelectOrganTypeStackNavigatorParamList>();

const SelectOrganTypeStackNavigator = () => {
  return (
    <SelectOrganTypeStack.Navigator >
      <SelectOrganTypeStack.Screen 
            name="Drawer"
            component={OrganDrawerNavigator}
            options={{headerShown:false}}
            />
      <SelectOrganTypeStack.Screen name="SelectOrganType" component={SelectOrganType} />
    </SelectOrganTypeStack.Navigator>
  );
};

export default SelectOrganTypeStackNavigator;