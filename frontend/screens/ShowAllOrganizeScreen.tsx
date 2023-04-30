import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { useFonts, Kanit_400Regular } from '@expo-google-fonts/kanit';
import CardDonorDetail from '../components/CardDonorDetail';
import { MaterialIcons } from '@expo/vector-icons';

const ShowAllOrganizeScreen = () => {
    const [fontsLoaded] = useFonts({
        Kanit_400Regular,
    });

    // const donorDetails = [
    //     { name: 'John', age: 30, bloodType: 'O+' },
    //     { name: 'Mary', age: 25, bloodType: 'AB-' },
    //     { name: 'David', age: 40, bloodType: 'A+' },
    // ];

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text}>คำร้องขอรับอวัยวะ</Text>
                {/* {donorDetails.map((donor, index) => (
                    <CardDonorDetail key={index} name={donor.name} age={donor.age} bloodType={donor.bloodType} />
                ))} */}
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

export default ShowAllOrganizeScreen;