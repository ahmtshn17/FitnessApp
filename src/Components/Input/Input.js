import React from "react";
import {View,Text,TextInput} from 'react-native';
import styles from './Input.style'

function Input(props){

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
               {props.label}
            </Text>

            <TextInput placeholder={props.placeholder} onChangeText={props.event} style={styles.input_container}/>
        </View>
    )
}


export default Input;