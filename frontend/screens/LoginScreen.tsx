import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../navigation/types';


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
import { type } from 'os';



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

    const navigation = useNavigation<LoginScreenNavigationProp>();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('MyOrganize')
        // navigation.navigate('SelectOrganType')
        console.log(username + " " + password)
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>Login</Text>
                <View style={styles.row}>
                    <Text>Username :</Text>
                    <TextInput
                    value={username}
                    onChangeText={setUsername}></TextInput>
                </View>
                <View style={styles.row}>
                    <Text>Password :</Text>
                    <TextInput
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                </View>
                
                <TouchableOpacity style={styles.button_login} onPress={handleLogin}>
                    <Text>Login</Text>
                </TouchableOpacity> 
                
                
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
export default LoginScreen;