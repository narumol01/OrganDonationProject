import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';
import CardDonorDetail from '../components/CardDonorDetail';
import { MaterialIcons } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
// import { ShowOrganizeScreenNavigationProp } from '../navigation/types';
import { ShowOrganizeScreenRouteProp } from '../navigation/types';

const ShowOrganizeScreen = () => {
    let [fontsLoaded] = useFonts({
        Kanit_400Regular,
    });

    // const [test, setTest] = useState('');
    const route = useRoute<ShowOrganizeScreenRouteProp>();
    // const navigation = useNavigation<ShowOrganizeScreenNavigationProp>();
    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <View style={[styles.column, { width: '60%' }]}>
                    <Text style={styles.text}>ชื่อหน่วยงาน : {route.params.name_Organize} </Text>
                    <Text style={styles.text}>สถานที่ : {route.params.place} </Text>
                </View>
                <View style={[{ width: '40%' }]}>
                </View>
            </View>
            <Text style={[styles.text, styles.rightAlign]}>ช่องทางติดต่อ : {route.params.phone}</Text>
            <View style={styles.line}></View>
            <CardDonorDetail
            bloodType='o' 
            old='12' 
            sex='ชาย' 
            button_type='request'
            id_donor='1'></CardDonorDetail>
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

export default ShowOrganizeScreen;