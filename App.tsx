import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormRequestOrganScreen from './frontend/screens/FormRequestOrganScreen';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>พี่เฟรมคนเท่ และพี่เปาคนหล่อ makmak</Text>
    //   <StatusBar style="auto" />
    // </View>
    <FormRequestOrganScreen></FormRequestOrganScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
