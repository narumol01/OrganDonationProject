import { type } from 'os';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity, Image } from 'react-native';

const Button_approveStatus = (ApproveOrNot:string) => {
    const [color, setColor] = useState('')
    if(ApproveOrNot == 'อนุมัติคำร้อง'){
       setColor("#45EBCD")
    }else{
        setColor("#EB455F")
    }
    return (
        <TouchableOpacity style={[styles.buttonDoc, {backgroundColor: color}]} >
            <Text style={styles.buttonText}>{ApproveOrNot}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonDoc: {
        width: '200px',
        height: '40px',
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Button_approveStatus;