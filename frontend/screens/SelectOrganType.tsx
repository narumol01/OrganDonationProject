import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { SelectOrganTypeScreenNavigationProp } from '../navigation/types';

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


const LoginScreen = () => {
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

    const navigation = useNavigation<SelectOrganTypeScreenNavigationProp>();

    const handleSelectType = (type: string, image: string) => {
        navigation.navigate('ShowAllOrganize', { nameOrgan: type , image_organ: image})
    }
    type SelectTypeButton = {
        type: string;
        image_name: string
    }
    const SelectTypeButton = ({ type, image_name }: SelectTypeButton) => {
        const image = require(`../components/${image_name}.png`);
        return (
            <View>
                <TouchableOpacity onPress={() => handleSelectType(type, image_name)} style={styles.button_login}>
                    <Image source={image} style={styles.Image_} />
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View >
                <View style={styles.row}>
                    <SelectTypeButton
                        type='หัวใจ'
                        image_name='heart'
                    ></SelectTypeButton>
                    <SelectTypeButton
                        type='ปอด'
                        image_name='lungs'
                    ></SelectTypeButton>
                    <SelectTypeButton
                        type='ตับ'
                        image_name='liver'
                    ></SelectTypeButton>
                </View>
                <View style={styles.row}>
                    <SelectTypeButton
                        type='ตับอ่อน'
                        image_name='pancreas'
                    ></SelectTypeButton>
                    <SelectTypeButton
                        type='ไต'
                        image_name='kidney'
                    ></SelectTypeButton>
                    <SelectTypeButton
                        type='ร่างกาย'
                        image_name='body'
                    ></SelectTypeButton>
                </View>

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
    button_login: {
        backgroundColor: '#BAD7E9',
        borderRadius: 100,
        width: 150,
        height: 150,
        padding: 35,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    Image_: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    }
})
export default LoginScreen