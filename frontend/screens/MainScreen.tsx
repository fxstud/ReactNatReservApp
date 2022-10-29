import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Button, Text, View } from '../components/Themed';
import { TouchableOpacity, ImageBackground, KeyboardAvoidingView, Image } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { RootStackScreenProps } from '../types';

export default function MainScreen({ navigation }: RootStackScreenProps<'Main'>) {
  const {token} = React.useContext(UserContext);
  const {removeTokens} = React.useContext(UserContext);
  
  // NE MARCHE PAS CAR COMPLIQUE EN TYPE SCRIPT 

  // const Token = ()  => {
  //   if (token) {
  //     return ( 

  //         <View style={styles.imgtxtContainer}>
  //         <Image
  //           style={styles.tinyImg}
  //           source={{
  //             uri: 'https://apigroupe.com/wp-content/uploads/2018/09/Visite_routine_dentiste_nettoyage_Laval-1.jpg',
  //           }}
  //         />
  //         <Text style={styles.imgtxt}>Comment consulter en toute simplicité ?   Ne perdez plus votre temps et inscrivez vous chez nous dans la joie et le bonheur</Text>
  //         <TouchableOpacity
  //         onPress={()=>{removeTokens();}}
  //         style={styles.button}
  //         >
  //         <Text style={styles.buttonText}>Sign Out</Text>          
  //         </TouchableOpacity>       
  //       </View >
        

        
  //     )
  //   }
  //   else {
  //   <TouchableOpacity
  //         onPress={()=>{navigation.navigate("Login")}}
  //         style={styles.button}
  //       >
  //       <Text style={styles.buttonText}>return Home</Text>          
  //   </TouchableOpacity>
  //   }
  // }
    

  return (
    <ImageBackground source={require('../assets/images/visuel-dentiste.png')} resizeMode="cover" style={styles.image}>
      {token?
      <KeyboardAvoidingView style={styles.container} behavior="padding">         

            <View style={styles.imgtxtContainer}>
              <Image
              style={styles.tinyImg}
              source={{
                uri: 'https://apigroupe.com/wp-content/uploads/2018/09/Visite_routine_dentiste_nettoyage_Laval-1.jpg',
              }}
              />
              <Text style={styles.imgtxt}>Comment consulter en toute simplicité ?   Ne perdez plus votre temps et inscrivez vous chez nous dans la joie et le bonheur</Text>
              </View>
            <TouchableOpacity
              onPress={()=>{removeTokens();navigation.navigate("Login")}}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sign Out</Text>          
            </TouchableOpacity>
      
      </KeyboardAvoidingView>
         :
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          onPress={()=>{navigation.navigate("Login")}}
          style={styles.button}
        >
        <Text style={styles.buttonText}>return Home</Text>          
        </TouchableOpacity>
      </KeyboardAvoidingView>    
      }
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0.8',
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
  button: {
    backgroundColor: '#0782F9',
    width: '25%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '200px'
  },
  buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  imgtxtContainer: {
    width: 400,
    alignItems: 'center',
    padding: '50px',
    borderRadius: '10px',
    borderWidth: '1px',
    opacity: '1.0',
     
  },
  imgtxtContains:{
    opacity: '1.0',
  },
  tinyImg: {
    paddingTop: '2px',
    width: 350,
    height: 200,
    opacity: '1.0',
  },
  imgtxt: {
    color: 'black',
    fontWeight: '300',
    fontSize: 16,
    paddingTop: '10px',
    textAlign: 'justify'
  },

});
