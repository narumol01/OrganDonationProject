import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormRequestOrganScreen from './frontend/screens/FormRequestOrganScreen';
import FormDonorScreen from './frontend/screens/FormDonorScreen';

import {NavigationContainer} from '@react-navigation/native';
import {
  useFonts,
  Kanit_100Thin,
  Kanit_100Thin_Italic,
  Kanit_200ExtraLight,
  Kanit_200ExtraLight_Italic,
  Kanit_300Light,
  Kanit_300Light_Italic,
  Kanit_400Regular,
  Kanit_400Regular_Italic,
  Kanit_500Medium,
  Kanit_500Medium_Italic,
  Kanit_600SemiBold,
  Kanit_600SemiBold_Italic,
  Kanit_700Bold,
  Kanit_700Bold_Italic,
  Kanit_800ExtraBold,
  Kanit_800ExtraBold_Italic,
  Kanit_900Black,
  Kanit_900Black_Italic,
} from '@expo-google-fonts/kanit';
export default function App() {
  let [fontsLoaded] = useFonts({
    Kanit_300Light,
    Kanit_700Bold,
  });
  
  return (
    // // <View style={styles.container}>
    // //   <Text>พี่เฟรมคนเท่ และพี่เปาคนหล่อ makmak</Text>
    // //   <StatusBar style="auto" />
    // // </View>

    // <FormRequestOrganScreen></FormRequestOrganScreen>
    <FormDonorScreen></FormDonorScreen>

    // <View style={styles.container}>
    //   <Text style={styles.text}>พี่เฟรมคนเท่ และพี่เปาคนหล่อ makmak</Text>
    //   <Text style={styles.text2}> This is for test font</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily: 'Kanit_700Bold'
  },
  text2:{
    fontFamily: 'Kanit_300Light'
  }
});