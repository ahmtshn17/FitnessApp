import React from "react";
import { Text,SafeAreaView } from "react-native";

function MemberResult({route}){

    const {user} = route.params;
    return(
        <SafeAreaView>

            <Text>Kayıt Tamamlandı</Text>
            <Text>Üye Adı: {user.Name}</Text>
            <Text>Üye Soy Adı: {user.Surname}</Text>
            <Text>Üye Yaşı: {user.Age}</Text>
            <Text>Üye E-Posta: {user.Mail}</Text>

        </SafeAreaView>
    )
}

export default MemberResult