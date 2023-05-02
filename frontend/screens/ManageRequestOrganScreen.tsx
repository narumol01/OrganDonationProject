import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';

import CardStatusRequest from '../components/CardStatusRequest';
import CardDocRequest from '../components/CardDocRequest';

import { MaterialIcons } from '@expo/vector-icons';
import Button_approveStatus from '../components/Button_approveStatus'
const ManageRequestOrganScreen = () => {
    const [fontsLoaded] = useFonts({
        Kanit_400Regular,
    });


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>คำร้องขอรับอวัยวะ</Text>
                <CardDocRequest
                name='ดร. นฤมล ทองเชื้อ'
                phone='02 200 7777'
                nameOrganize='โรงพยาบาล มหิดล'
                id_organize='1'
                id_donor='32'
                docRequest='doc.pdf'
                ></CardDocRequest>

            </View>
            <View style={styles.line}></View>
            <View>
                <Text style={styles.text}>สถานะคำร้องขอรับอวัยวะ</Text>
                <CardStatusRequest
                    bloodType='A'
                    old='30'
                    sex='หญิง'
                    id_donor='1'
                    nameOrganize='โรงพยาบาล มหิดล'
                    id_Organize='1'
                    statusApprove='ผ่านการอนุมัติ'
                ></CardStatusRequest>
                
                <CardStatusRequest
                    bloodType='A'
                    old='32'
                    sex='ชาย'
                    id_donor='99'
                    nameOrganize='โรงพยาบาล บางเขน'
                    id_Organize='1'
                    statusApprove='รอการอนุมัติ'
                ></CardStatusRequest>
                <CardStatusRequest
                    bloodType='B'
                    old='40'
                    sex='ชาย'
                    id_donor='124'
                    nameOrganize='โรงพยาบาล บางเขน'
                    id_Organize='1'
                    statusApprove='ไม่ผ่านการอนุมัติ'
                ></CardStatusRequest>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 50,
    },
    rightAlign: {
        textAlign: 'right',
    },
    text: {
        fontFamily: 'Kanit_400Regular',
        fontSize: 16,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    column: {
        flex: 1,
        marginHorizontal: 6,
    },
    button: {
        height: 40,
        backgroundColor: '#BAD7E9',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDoc: {
        width: '200px',
        height: '40px',
        backgroundColor: '#BAD7E9',
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonConfirm: {
        width: '200px',
        height: '40px',
        backgroundColor: '#EB455F',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Kanit_700Bold',
    },
    line: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginVertical: 20
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        shadowRadius: 7,
    },
    imageContainer: {
        flex: 1,
    },
    image: {
        width: 120,
        height: 120,
    },
    content: {
        flex: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Kanit_700Bold',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
});

export default ManageRequestOrganScreen;