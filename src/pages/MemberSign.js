import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native';

import Input from '../Components/Input';
import Button from '../Components/Button';




function MemberSign({navigation}){

const [userName,setUserName] = useState(null);
const [userSurname,setUserSurname] = useState(null);
const [userAge,setAge] = useState(null);
const [userMail,setUserMail] = useState(null);

function handeleSubmit(){

    if(!userName || !userSurname|| !userAge|| !userMail){
        Alert.alert("Uyarı","İstenilen bilgiler boş geçilemez!!")
        return;
    }

    const user = {
        Name: userName,
        Surname: userSurname,
        Age:userAge,
        Mail:userMail
    }

    navigation.navigate('MemberResultScreen',{user});

    /*
        const user = {
        userName,
        userSurname,
        userAge,
        userMail
    }
    
    yukarıdaki gibi de kulanılabilir. Çünkü key ve value de aynı ismi verdiğimizden dolayı ecmascript yapısı gereği böyle bir tanımlama yapılabilir.
    */
}

    return( 
        <SafeAreaView>
            <Input label={"Üye Adı"} placeholder ={"Üyenin adını giriniz..."} event={setUserName}/>
            <Input label={"Üye Soyadı"} placeholder ={"Üyenin soy adını giriniz..."} event={setUserSurname}/>
            <Input label={"Üye Yaşı"} placeholder ={"Üyenin yaşını giriniz..."} event={setAge}/>
            <Input label={"Üye E-Posta"} placeholder ={"Üyenin e-posta adresini giriniz..."} event={setUserMail}/>
            <Button Event={handeleSubmit} name={'Kaydı Tamamla'}/>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default MemberSign