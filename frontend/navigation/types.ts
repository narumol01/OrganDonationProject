import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

export type OrganStackNavigatorParamList = {
    Login: undefined;
    MyOrganize:undefined;
    ManageRequestOrgan:{
      id_Organize:string;
    };
    FormDonor:{
      id_Organize:string;
    }

    SelectOrganType: undefined;
    ShowAllOrganize: {
      nameOrgan: string;
      image_organ: string;
    }
    ShowOrganize:{
      nameOrgan: string;
      id_Organize: string;
      name_Organize: string;
      place: string;
      phone: string;
    }
    FormRequestOrgan:{
      id:string;
    };

  };

export type ButtonNavigatorParamList = {
  FormRequestOrgan:{
    id:string;
  };
};
  
export type MyOrganizeStackNavigatorParamList = {
  MyOrganize:undefined;
  Drawer:undefined;
};

export type SelectOrganTypeStackNavigatorParamList = {
  SelectOrganType:undefined;
  Drawer:undefined;
};

export type OrganDrawerNavigatorParamList = {
  MyOrganize: undefined;
  SelectOrganType: undefined;
  Logout:undefined;
}

//////////




export type LoginScreenNavigationProp = NativeStackNavigationProp<
  OrganStackNavigatorParamList,
  'MyOrganize'
>;


export type MyOrganizeScreenNavigationProp = NativeStackNavigationProp<
  OrganStackNavigatorParamList,
  'FormDonor',
  'ManageRequestOrgan'
>;

export type ManageRequestOrganScreenNavigationProp = NativeStackNavigationProp<
  OrganStackNavigatorParamList
>;


export type Button_requestNavigationProp = NativeStackNavigationProp<
ButtonNavigatorParamList,
  'FormRequestOrgan'
>;

export type ShowOrganizeNavigationProp = NativeStackNavigationProp<
  OrganStackNavigatorParamList,
  'SelectOrganType'
>;

export type SelectOrganTypeScreenNavigationProp = NativeStackNavigationProp<
  OrganStackNavigatorParamList,
  'SelectOrganType'
>;

export type ShowAllOrganizeScreenNavigationProp = NativeStackNavigationProp<
  OrganStackNavigatorParamList,
  'ShowOrganize'
>;


// Route
export type ShowAllOrganizeScreenRouteProp = RouteProp<
  OrganStackNavigatorParamList,
  'ShowAllOrganize'
>;
export type ShowOrganizeScreenRouteProp = RouteProp<
  OrganStackNavigatorParamList,
  'ShowOrganize'
>;
export type MyOrganizeScreenRouteProp = RouteProp<
  OrganStackNavigatorParamList,
  'MyOrganize'
>;
export type Button_requestRouteProp = RouteProp<
  ButtonNavigatorParamList,
  'FormRequestOrgan'
>;
export type ManageRequestOrganRouteProp = RouteProp<
  OrganStackNavigatorParamList,
  'ManageRequestOrgan'
>;

