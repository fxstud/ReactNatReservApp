import React, { useContext, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, Pressable, ImageBackground, Button } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import EmojiSelector from 'react-native-emoji-selector'
import { Text, View} from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { FontDisplay } from "expo-font";
import { loadOptions } from "@babel/core";
import { UserContext } from "../contexts/UserContext";

const initialState = {
  react: false,
  next: false,
  vue: false,
  angular: false,
};

export default function LoginScreen({ navigation }: RootStackScreenProps<'Login'>) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [languages, setLanguages] = useState('[]');
  const option = 'Remember Me';

  function pickLanguage(selectedLanguage: any){
    // useless
    //const index = languages.findIndex(language => language === selectedLanguage)

    // if(languages.includes(selectedLanguage  )){
    //   setLanguages(languages.filter(language=> language !== selectedLanguage))
    //   return;
    // }
    setLanguages(languages => languages.concat(selectedLanguage));
  }
  // const [text, onChangeText] = React.useState("Useless Text");
  // const [number, onChangeNumber] = React.useState(null);
   const {setTokens} = useContext(UserContext)
  return (
    <ImageBackground source={require('../assets/images/Salle-de-soins-dentaires.png')} resizeMode="cover" style={styles.image}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      
        <View style={styles.inputContainer}>
          <Text style={styles.titleInput}>Email Address</Text>       
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="email@example.com"
          />
          <Text style={styles.titleInput} >Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
            placeholder="Password"
            keyboardType="numeric"
            
          />
          
          <View style={styles.option}>
              <View key={option} style={styles.language}>
                <TouchableOpacity style={styles.checkbox} onPress={() => pickLanguage(option)}>
                  {languages.includes(option) && <Text style={styles.check}>☑️</Text>}
                </TouchableOpacity>
                <Text style={styles.languageName}>{option}</Text>
              </View>         
          </View>

          <View style={styles.buttonContainer}>
          <TouchableOpacity
             onPress={()=>{setTokens(email, password); navigation.navigate("Main")}}
             style={styles.button}
          >
            <Text style={styles.buttonText}>Sign In</Text>          
          </TouchableOpacity>

          </View>


        </View >

        <View style={styles.inputContainer}>
        <TouchableOpacity
            onPress={() => navigation.push('Inscription')}
            style={styles.buttonOutline}
          >
            <Text style={styles.buttonOutlineText}>New Around here ?</Text>             
          </TouchableOpacity>         
        </View>
        
          
          
        
        
      
    </KeyboardAvoidingView>
    </ImageBackground>

    // <KeyboardAvoidingView 
    //   style={styles.container}
    //   behavior="padding"
    // >
    //   <View style={styles.inputContainer}>
    //     <TextInput
    //       placeholder="Email"
    //       value={email}
    //       onChangeText={text => setEmail(text)}
    //       style={styles.input}
    //     />
    //     <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //     <TextInput
    //       placeholder="Password"
    //       value={password}
    //       onChangeText={text => setPassword(text)}
    //       style={styles.input}
    //       secureTextEntry
    //     />        
    //     {/* <TextInput
    //       style={styles.input}
    //       onChangeText={onChangeText}
    //       value={text}
    //     />      */}
    //     {/* <Image
    //       style={styles.tinyLogo}
    //       source={{
    //         uri: 'https://reactnative.dev/img/tiny_logo.png',
    //       }}
    //     /> */}     
    //     {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
    //   </View>

    //   <View style={styles.buttonContainer}>
    //     <TouchableOpacity
    //       onPress={() => { }}
    //       style={styles.button}
    //     >
    //       <Text style={styles.buttonText}>Login</Text>          
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       onPress={() => { }}
    //       style={[styles.button, styles.buttonOutline]}
    //     >
    //       <Text style={styles.buttonOutlineText}>Register</Text>          
    //     </TouchableOpacity>
    //   </View>
    // </KeyboardAvoidingView>


    
    
  
  );
}

const styles = StyleSheet.create({
  check: {
    alignSelf: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white' Si je veux mettre en blanc
    
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 10,
    height: 10,
    width: 'inherit',
    borderWidth: '1px',
  },
  // tinyLogo: {
  //   width: 50,
  //   height: 50,
  // },
  inputContainer: {
    width: '40%',
    alignItems: 'center',
    padding: '50px',
    borderRadius: '10px',
    borderWidth: '1px',
    opacity: '0.8',
  
    
  },
  titleInput:{
    textAlign: 'left',
    width: '100%',
    marginLeft: '50%',
    fontWeight: 'bold',
    
  },

  input: {
    // backgroundColor: 'white',
    // paddingHorizontal: 15,
    // paddingVertical: 10,
    // borderRadius: 10,
    // marginTop: 5,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%'
  },
  languageName: {
    textTransform: 'capitalize',
    fontSize: 16,
  },
  checkbox :{
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: 'green',
    marginRight: 5,
  },
  option: {
    alignContent: 'flex-start',
    alignSelf: 'center',
    width: '50%'
  },
  language: {
    flexDirection: 'row',
    marginVertical: 10,
    //marginLeft: 40,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    //marginVertical: '50',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  },
  buttonOutline: {
    backgroundColor: 'white',
    
  borderColor: 'white',
    borderWidth: 2,
  },
  buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText:{
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
});
