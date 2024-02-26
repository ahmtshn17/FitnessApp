import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import styles from './Button.style'
const Button = (props)=>{
    return(
        <TouchableOpacity onPress={props.Event} style={styles.container}>
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    );
}


export default Button