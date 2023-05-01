import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type OrganStackNavigatorParamList = {
    Login: undefined;
    SelectOrganType: undefined;
    ShowAllOrganize: {
      nameOrgan: string;
    }
    MyOrganize:undefined;
    Drawer:undefined;
  };

export type OrganDrawerNavigatorParamList = {
  MyOrganize: undefined;
  SelectOrganType: undefined;
}


export type LoginScreenNavigationProp = NativeStackNavigationProp<
  OrganStackNavigatorParamList,
  'MyOrganize'
>;


export type MyOrganizeScreenNavigationProp = NativeStackNavigationProp<
  OrganStackNavigatorParamList,
  'SelectOrganType'
>;

export type SelectOrganTypeScreenNavigationProp = NativeStackNavigationProp<
  OrganStackNavigatorParamList,
  'SelectOrganType'
>;

export type ShowAllOrganizeScreenNavigationProp = NativeStackNavigationProp<
  OrganStackNavigatorParamList,
  'ShowAllOrganize'
>;


// Route
export type ShowAllOrganizeScreenRouteProp = RouteProp<
  OrganStackNavigatorParamList,
  'ShowAllOrganize'
>;
export type MyOrganizeScreenRouteProp = RouteProp<
  OrganStackNavigatorParamList,
  'MyOrganize'
>;

