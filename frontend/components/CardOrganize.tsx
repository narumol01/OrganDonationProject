import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

interface Props {
    organizeName: string;
    place: string;
    phone: string;
    id_organize: string;
    image_organ: string;
    organName: string;
}

import { useNavigation, useRoute } from '@react-navigation/native';

import { ShowAllOrganizeScreenNavigationProp } from '../navigation/types';
import { ShowAllOrganizeScreenRouteProp } from '../navigation/types';

const CardOrganize = ({
    organizeName,
    place,
    phone,
    id_organize,
    image_organ,
    organName,
    }: Props) => {

    // const route = useRoute<Button_requestRouteProp>();
    const navigation = useNavigation<ShowAllOrganizeScreenNavigationProp>();
    const route = useNavigation<ShowAllOrganizeScreenRouteProp>();

    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('ShowOrganize',
             {nameOrgan: organName,
                id_Organize: id_organize,
                name_Organize: organizeName,
                place: place,
                phone: phone})}>
                <View style={[{ flexDirection: 'row' , display:'flex',}]}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={require(`../components/${image_organ}.png`)} />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.subtitle}>ชื่อองค์กร :  {organizeName}</Text>
                        <Text style={styles.subtitle}>place : {place}</Text>
                        <Text style={[styles.subtitle, {bottom: 5}] }>phone : {phone}</Text>
                    </View>
                </View>

            </TouchableOpacity>

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
        alignItems: 'center',
        alignContent: 'center',
        marginRight: 20,
    },
    image: {
        width: 120,
        height: 120,
    },
    content: {

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

export default CardOrganize;
