import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';

interface Props {
    name: string;
    phone: string;
    nameOrganize: string;
    id_organize: string;
    id_donor: string;
    docRequest: string;
}

import Button_approveStatus from '../components/Button_approveStatus'
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button_requestRouteProp } from '../navigation/types';



const CardDocRequest = ({name,
    phone,
    nameOrganizename,
    id_organizename,
    id_donorname,
    docRequestname}: Props) => {

    const [isHide, setIsHide] = useState(false)
    // const route = useRoute<Button_requestRouteProp>();
    // const navigation = useNavigation<Button_requestNavigationProp>();
    return (
        <View style={{ display: isHide ? 'none' : 'flex' }}>
            <View style={styles.card2}>
                <Text style={[{ color: 'white' }]}>{nameOrganizename}</Text>
            </View>
            <View style={styles.card}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../components/heart_card.png')} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.subtitle}>ชื่อผู้ยื่นคำร้อง :  {name}</Text>
                    <Text style={styles.subtitle}>ช่องทางหารติดต่อ : {phone}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={[{ paddingBottom: 10 }]}>
                        <TouchableOpacity style={[styles.buttonDoc]} >
                            <Text style={styles.buttonText}>เอกสารคำร้องขอรับอวัยวะ</Text>
                        </TouchableOpacity>

                        <View style={[styles.row]}>
                            <TouchableOpacity onPress={() => setIsHide(true)} style={[styles.buttonDoc2, { backgroundColor: '#45EBCD' }]} >
                                <Text style={styles.buttonText}>อนุมัติคำร้อง</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setIsHide(true)} style={[styles.buttonDoc2, { backgroundColor: '#EB455F' }]} >
                                <Text style={styles.buttonText}>ไม่อนุมัติคำร้อง</Text>
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

export default CardDocRequest;