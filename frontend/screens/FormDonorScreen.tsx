import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import Button_uploadData from '../components/Button_uploadData';
import { useFonts, Kanit_700Bold } from '@expo-google-fonts/kanit';
import { CheckBox, Layout } from '@ui-kitten/components';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const FormDonorScreen = () => {
    const [nameRequestor, setNameRequestor] = useState('');
    const [docRequestor, setDocRequestor] = useState('');
    const [contactRequestor, setContactRequestor] = useState('');
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');

    const handleSubmit = () => {
        alert(`NameRequestor: ${nameRequestor}, DocRequestor: ${docRequestor}, ContactRequestor: ${contactRequestor}`);
    };

    return (
        <View style={styles.bigcontainer}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Text style={styles.label}>เอกสารข้อมูลของผู้บริจาค:</Text>
                    {/* <TextInput
          style={styles.input}
          onChangeText={setDocRequestor}
          value={docRequestor}
          placeholder="เอกสาร"
        //   keyboardType="email-address"
        /> */}
                    <Button_uploadData></Button_uploadData>
                </View>
                <View style={styles.row}>
                    <View style={styles.column2}>
                        <Text style={styles.label2}>หมู่เลือด</Text>
                        <TextInput
                            style={styles.input2}
                            value={text1}
                            onChangeText={(text) => setText1(text)}
                        />
                    </View>
                    <View style={styles.column2}>
                        <Text style={styles.label2}>วัน/เดือน/ปีเกิด</Text>
                        <TextInput
                            style={styles.input2}
                            value={text2}
                            onChangeText={(text) => setText2(text)}
                        />
                    </View>
                    <View style={styles.column2}>
                        <Text style={styles.label2}>เพศ</Text>
                        <TextInput
                            style={styles.input2}
                            value={text3}
                            onChangeText={(text) => setText3(text)}
                        />
                    </View>
                </View>
                <View style={[styles.row]}>
                    <Text style={[styles.label, { textAlign: 'left' }]}>ช่องทางการติดต่อ:</Text>
                </View>
                <View style={[styles.row]}>
                    <View style={[styles.row]}>
                        <BouncyCheckbox></BouncyCheckbox>
                        <Text style={styles.label3}>ทั้งร่างกาย</Text>
                    </View>
                </View>
                <View style={[styles.row]}>
                    <View style={[styles.row, {marginRight: 12}]}>
                        <BouncyCheckbox></BouncyCheckbox>
                        <Text style={styles.label3}>หัวใจ</Text>
                    </View>
                    <View style={[styles.row, {marginRight: 12}]}>
                        <BouncyCheckbox></BouncyCheckbox>
                        <Text style={styles.label3}>ปอด</Text>
                    </View>
                    <View style={[styles.row, {marginRight: 12}]}>
                        <BouncyCheckbox></BouncyCheckbox>
                        <Text style={styles.label3}>ไต</Text>
                    </View>
                    <View style={[styles.row, {marginRight: 12}]}>
                        <BouncyCheckbox></BouncyCheckbox>
                        <Text style={styles.label3}>ตับ</Text>
                    </View>
                    <View style={[styles.row, {marginRight: 12}]}>
                        <BouncyCheckbox></BouncyCheckbox>
                        <Text style={styles.label3}>ตับอ่อน</Text>
                    </View>


                </View>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>ยืนยันเพิ่มข้อมูลอวัยวะบริจาค</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bigcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 0,
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
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Kanit_700Bold',
    },
    column2: {
        flex: 1,
        marginHorizontal: 6,
    },
    column3: {
        // flex: 1,
        marginHorizontal: 50,
    },
    label2: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: 'Kanit_700Bold',
    },
    label3: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontFamily: 'Kanit_700Bold',
    },
    input2: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        fontFamily: 'Kanit_700Bold',
        borderRadius: 45,
        backgroundColor: '#F3F3F3'
    },
    checkbox: {
        alignSelf: 'center',
    },
})
export default FormDonorScreen;