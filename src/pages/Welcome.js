import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from '../Components/Button/index';

function Welcome({navigation}) {

  function goToMemberSign(){

      navigation.navigate('MemberSignScreen')
  }

  return (
    <SafeAreaView style={styles.container}>
     <Text style={styles.header}>Welcome</Text>
    <Button Event={goToMemberSign} name={'üye kaydı oluştur'}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  header:{
    fontSize:30,
    fontWeight:'bold',
    color:'black'
  }
});

export default Welcome;
