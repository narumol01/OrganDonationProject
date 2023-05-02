import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';

interface Props {
    bloodType: string;
    old: string;
    sex: string;
    id_donor: string;
    nameOrganize:string;
    id_Organize:string;
    statusApprove:string;
}

import Button_approveStatus from '../components/Button_approveStatus'
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button_requestRouteProp } from '../navigation/types';



const CardStatusRequest = ({ bloodType, old, sex, id_donor, nameOrganize,id_Organize , statusApprove }: Props) => {

    const [color, setColor] = useState('#D8D8D8')
    if(statusApprove == 'ผ่านการอนุมัติ'){
        setColor('#45EBCD')
    }else if(statusApprove == 'ไม่ผ่านการอนุมัติ'){
        setColor('#EB455F')
    }else{
        setColor('#D8D8D8')
    }
    // const route = useRoute<Button_requestRouteProp>();
    // const navigation = useNavigation<Button_requestNavigationProp>();
    return (
        <View>
            <View style={styles.card2}>
                <Text style={[{ color: 'white' }]}>โรงพยาบาล มหิดล</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../components/heart_card.png')} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.subtitle}>กรุ๊ปเลือด :  {bloodType}</Text>
                    <Text style={styles.subtitle}>อายุ : {old}</Text>
                    <Text style={styles.subtitle}>เพศ : {sex}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={[{ paddingBottom: 10 }]}>
                        <TouchableOpacity style={[styles.buttonDoc]} >
                            <Text style={styles.buttonText}>ข้อมูลผู้บริจาค</Text>
                        </TouchableOpacity>

                        <View style={[styles.row]}>
                            <TouchableOpacity style={[styles.buttonDoc2, { backgroundColor: color }]} >
                                <Text style={styles.buttonText}>อนุมัติคำร้อง</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
    buttonDoc2: {
        width: '100px',
        height: '40px',
        backgroundColor: '#BAD7E9',
        borderRadius: 2,
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
        marginBottom: 10,
        marginHorizontal: 16,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        shadowRadius: 7,
    },
    card2: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2B3467',
        padding: 16,
        borderRadius: 8,
        marginBottom: 0,
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
    row: {
        flexDirection: 'row'
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

export default CardStatusRequest;