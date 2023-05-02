import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';

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
import { SearchBar } from 'react-native-screens';

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
    if (route) {
        console.log(route.params.nameOrgan, route.params.image_organ)
    } else {
        console.log('fail to useRoute ')
    }
    const [updateSearch, setUpdateSearch] = useState('');
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={[styles.seachBar]}>
                    <View style={styles.row2}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setUpdateSearch}
                            value={updateSearch}
                            placeholder="Type Here..."
                            keyboardType="name-phone-pad"
                        />
                    </View>
                </View>
                <View>
                    <CardOrganize
                        organizeName='โรงพยาบาล A'
                        place='75/3 Yothi Rd, Thung Phya Thai, Ratchathewi, Bangkok 10400'
                        phone='02 200 7777'
                        id_organize='1'
                        image_organ={route.params.image_organ}
                        organName='test'
                    ></CardOrganize>

                </View>

            </View>
        </ScrollView>
    )


}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    row: {
        flexDirection: 'row'
    },
    button_login: {
        backgroundColor: '#BAD7E9',
        padding: 10,
        alignSelf: 'center'
    },
    seachBar: {
        padding: 5,
        margin: 9
    },
    row2: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    // label: {
    //     width: 100,
    //     marginRight: 10,
    //     fontSize: 18,
    //     fontFamily: 'Kanit_700Bold'
    // },
    input: {
        flex: 1,
        width: 650,
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
})
export default ShowAllOrganizeScreen;