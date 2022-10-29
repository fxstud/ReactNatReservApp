import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, AppRegistry, TextInput, TouchableHighlight } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabScreenProps } from '../types';
import 'react-native-gesture-handler';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function ContactScreen({ navigation }: RootTabScreenProps<'Contact'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact</Text>
      <View style={[styles.balloon, { backgroundColor: '#1084ff' }]}>
        <Text style={{ paddingTop: 5, color: 'white' }}>Hey!</Text>
        <View
          style={[
            styles.arrowContainer,
            styles.arrowLeftContainer,
          ]}
        >
          <View style={styles.arrowLeft}>
          </View>
        </View>
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.labelText}>Saisissez votre message</Text>
        <TextInput style={styles.textInput}
          value=""/>
          <TouchableHighlight style={styles.button}>
                <Text style={styles.buttonText}>Envoyer</Text>
            </TouchableHighlight>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    marginVertical: 14,
    flexDirection: 'row'
 },
 itemIn: {
     marginLeft: 10
 },
 itemOut: {
    alignSelf: 'flex-end',
    marginRight: 10
 },
 balloon: {
    maxWidth: scale(250),
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20,
 },
 arrowContainer: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     zIndex: -1
     // backgroundColor: 'red'
 },
 arrowLeftContainer: {
     justifyContent: 'center',
     alignItems: 'flex-start',
     // backgroundColor: 'green'
 },
 
 arrowLeft: {
     left: -20,
 },
 textInput: {
  borderBottomWidth:2,
  flex:1
},
inputLine: {
  flexDirection:'row',
  margin:10,
  flex:1
},
labelText: {
  margin:10,
  flex:1
},
button:{
  backgroundColor: Colors.light.tint,
  padding:10,
  marginTop:20
},
buttonText:{
  color: 'white',
  textAlign:'center'
}
});

function scale(arg0: number): any | string | number | undefined {
  throw new Error('Function not implemented.');
}

