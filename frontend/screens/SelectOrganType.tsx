import React, { useState } from 'react';
import { StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';

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

const SelectTypeButton = (type: string, image_name: string) => {
    const image = (uri: '../components/'+image_name+'.png' );

    // return(
    //     <ImageBackground source={image}>
    //     <TouchableOpacity style={styles.button_login, { backgroundImage:}} onPress={() => handleSelectType('หัวใจ')}>
    //         <Text>หัวใจ</Text>
    //     </TouchableOpacity>
    //     </ImageBackground>
    // )
    

}

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

    const handleSelectType = (type: string) => {
        navigation.navigate('ShowAllOrganize', { nameOrgan: type })
    }

    return (
        <View style={styles.container}>
            <View >
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button_login} onPress={() => handleSelectType('หัวใจ')}>
                        <Text>หัวใจ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_login} onPress={() => handleSelectType('ปอด')}>
                        <Text>ปอด</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_login} onPress={() => handleSelectType('ไต')}>
                        <Text>ไต</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button_login} onPress={() => handleSelectType('ตับ')}>
                        <Text>ตับ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_login} onPress={() => handleSelectType('ตับอ่อน')}>
                        <Text>ตับอ่อน</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_login} onPress={() => handleSelectType('ร่างกาย')}>
                        <Text>ร่างกาย</Text>
                    </TouchableOpacity>
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
        borderRadius: 100,
        width: 150,
        height: 150,
        backgroundColor: '#BAD7E9',
        padding: 35,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    }
})
export default LoginScreen