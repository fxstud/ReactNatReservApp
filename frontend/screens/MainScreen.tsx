import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import * as React from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Button, Text, View } from '../components/Themed';
import { TouchableOpacity } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { RootStackScreenProps } from '../types';

export default function MainScreen({ navigation }: RootStackScreenProps<'Main'>) {
  const {token} = React.useContext(UserContext);
  const {removeTokens} = React.useContext(UserContext);
  // navigation.navigate("Article", { id: "1"});
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accueil</Text>
    
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {token?
        <TouchableOpacity
        onPress={()=>{removeTokens(); navigation.navigate("Login")}}
        style={styles.button}
     >
       <Text style={styles.buttonText}>Sign Out</Text>          
     </TouchableOpacity>
      :<TouchableOpacity
      onPress={()=>{navigation.navigate("Login")}}
      style={styles.button}
   >
     <Text style={styles.buttonText}>return Home</Text>          
   </TouchableOpacity>}
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
  button: {
    backgroundColor: '#0782F9',
    width: '25%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: '20px',
    marginBottom: '20px',
  },
  buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
