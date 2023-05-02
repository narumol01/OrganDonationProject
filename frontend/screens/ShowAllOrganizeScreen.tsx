import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { ShowAllOrganizeScreenNavigationProp } from '../navigation/types';
import { ShowAllOrganizeScreenRouteProp } from '../navigation/types'

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

import CardOrganize from '../components/CardOrganize';

const ShowAllOrganizeScreen = () => {
    let [fontsLoaded] = useFonts({
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
    });


    const route = useRoute<ShowAllOrganizeScreenRouteProp>();
    if(route){
         console.log(route.params.nameOrgan)
    }else{
        console.log('fail to useRoute ')
    }
   


    // const handleDonor = () => {
    // }
    // const handle = () => {
    // }

    return (
        <View style={styles.container}>
            <View>
                <CardOrganize
                organizeName='โรงพยาบาล มหิดล'
                place='75/3 Yothi Rd, Thung Phya Thai, Ratchathewi, Bangkok 10400'
                phone='02 200 7777'
                id_organize='1'
                organName='test'
                ></CardOrganize>
            </View>

        </View>
    )


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    row: {
        flexDirection: 'row'
    },
    button_login:{
        backgroundColor: '#BAD7E9',
        padding: 10,
        alignSelf: 'center'
    }
})
export default ShowAllOrganizeScreen;