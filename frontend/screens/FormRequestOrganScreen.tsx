import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import Button_uploadData from '../components/Button_uploadData';
import { useFonts, Kanit_700Bold } from '@expo-google-fonts/kanit';

const FormRequestOrganScreen = () => {
  const [nameRequestor, setNameRequestor] = useState('');
  const [docRequestor, setDocRequestor] = useState('');
  const [contactRequestor, setContactRequestor] = useState('');

  const handleSubmit = () => {
    alert(`NameRequestor: ${nameRequestor}, DocRequestor: ${docRequestor}, ContactRequestor: ${contactRequestor}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>ชื่อผู้ยื่นคำร้อง :</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNameRequestor}
          value={nameRequestor}
          placeholder="ชื่อผู้ยื่นคำร้อง"
          keyboardType="name-phone-pad"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>เอกสาร:</Text>
        {/* <TextInput
          style={styles.input}
          onChangeText={setDocRequestor}
          value={docRequestor}
          placeholder="เอกสาร"
        //   keyboardType="email-address"
        /> */}
        {/* <Button_uploadData></Button_uploadData> */}
      </View>
      <View style={styles.row}>
        <Text style={[styles.label]}>ช่องทางการติดต่อ:</Text>
        <TextInput
          style={styles.input}
          multiline
          onChangeText={setContactRequestor}
          value={contactRequestor}
          placeholder="ช่องทางการติดต่อ"
          keyboardType="default"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>ยืนยันคำร้องขอรับอวัยวะ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    width: 200,
    marginRight: 10,
    textAlign: 'right',
    fontSize: 18,
    fontFamily: 'Kanit_700Bold'
  },
  input: {
    flex: 1,
    width: 450,
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    padding: 8,
    color: '#3c4242',
    backgroundColor: '#F3F3F3',
    fontFamily: 'Kanit_700Bold',
  },
  button: {
    width: 500,
    height: 40,
    backgroundColor: '#BAD7E9',
    borderRadius: 60,
    justifyContent: 'center',
    marginTop: 30
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Kanit_700Bold',
  },
})
export default FormRequestOrganScreen;