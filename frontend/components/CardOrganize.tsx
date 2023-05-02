import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

interface Props {
    organizeName: string;
    place: string;
    phone: string;
    id_organize:string;
    organName:string;
    button_type: 'request' | 'confirm';
}

import { useNavigation, useRoute } from '@react-navigation/native';
import { Button_requestNavigationProp } from '../navigation/types';
import { Button_requestRouteProp } from '../navigation/types';




const CardOrganize = ({ 
    organizeName,
    place,
    phone,
    id_organize,
    organName, 
    button_type}: Props) => {

    // const route = useRoute<Button_requestRouteProp>();
    const navigation = useNavigation<Button_requestNavigationProp>();

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../components/heart.png')} />
            </View>
            <View style={styles.content}>
                <Text style={styles.subtitle}>ชื่อองค์กร :  {organizeName}</Text>
                <Text style={styles.subtitle}>place : {place}</Text>
                <Text style={styles.subtitle}>phone : {phone}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <View style={[{ paddingBottom: 10 }]}>
                    <TouchableOpacity style={[styles.buttonDoc]} >
                        <Text style={styles.buttonText}>เอกสารข้อมูลผู้บริจาค</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity
                            style={[styles.buttonConfirm]}
                            onPress={() =>
                                button_type === 'confirm'
                                    ? navigation.navigate('FormRequestOrgan', { id: id_donor })
                                    : console.log('concon')
                            }
                        >
                            <Text style={styles.buttonText}>
                                {button_type === 'confirm' ? 'ขอรับอวัยวะ' : 'ยืนยันความพร้อม'}
                            </Text>
                        </TouchableOpacity>
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
        flex: 1,
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

// import React from 'react';
// import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

// interface Props {
//     organizeName: string;
//     place: string;
//     phone: string;
//     id_organize: string;
//     organName: string;
// }

// import { useNavigation, useRoute } from '@react-navigation/native';
// import { ShowAllOrganizeScreenNavigationProp } from '../navigation/types';


// const navigation = useNavigation<ShowAllOrganizeScreenNavigationProp>();
// const handleShowOrganize = (organName:string , id_organize:string, organizeName:string, place:string, phone:s) => {
//     navigation.navigate('ShowOrganize', {
//         nameOrgan: organName, 
//         id_Organize:id_organize, 
//         name_Organize: organizeName,
//         place: place,
//         phone: phone} )
// }
// const CardOrganize = ({ organizeName, place, phone, id_organize, organName }: Props) => {

//     return (
//         <TouchableOpacity onPress={() => handleShowOrganize(organName, id_organize, organizeName, place, phone)}>
//             <View style={styles.card}>
//                 <View style={styles.imageContainer}>
//                     <Image style={styles.image} source={require('../components/heart.png')} />
//                 </View>
//                 <View style={styles.content}>
//                     <Text style={styles.subtitle}>ชื่อหน่วยงาน :  {organizeName}</Text>
//                     <Text style={styles.subtitle}>สถานที่ : {place}</Text>
//                 </View>
//                 <View style={styles.buttonContainer}>
//                     <View style={[{ paddingBottom: 10 }]}>
//                         <Text>ช่องทางติดต่อ : {phone}</Text>
//                     </View>
//                 </View>
//             </View>
//         </TouchableOpacity>
//     );
// };

// const styles = StyleSheet.create({
//     button: {
//         height: 40,
//         backgroundColor: '#BAD7E9',
//         borderRadius: 60,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     buttonDoc: {
//         width: '200px',
//         height: '40px',
//         backgroundColor: '#BAD7E9',
//         borderRadius: 0,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     buttonConfirm: {
//         width: '200px',
//         height: '40px',
//         backgroundColor: '#EB455F',
//         borderRadius: 10,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     buttonText: {
//         color: 'black',
//         fontWeight: 'bold',
//         textAlign: 'center',
//         fontFamily: 'Kanit_700Bold',
//     },
//     line: {
//         borderBottomColor: 'black',
//         borderBottomWidth: 1,
//         marginVertical: 20
//     },
//     card: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: 'white',
//         padding: 16,
//         borderRadius: 8,
//         marginVertical: 8,
//         marginHorizontal: 16,
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         elevation: 2,
//         shadowRadius: 7,
//     },
//     imageContainer: {
//         flex: 1,
//     },
//     image: {
//         width: 120,
//         height: 120,
//     },
//     content: {
//         flex: 2,
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 4,
//     },
//     subtitle: {
//         fontSize: 16,
//         fontFamily: 'Kanit_700Bold',
//     },
//     buttonContainer: {
//         flex: 1,
//         alignItems: 'flex-end',
//     },
// });

// export default CardOrganize;