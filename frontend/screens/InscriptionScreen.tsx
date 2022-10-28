import { StatusBar } from 'expo-status-bar';
import {useState, useContext} from 'react';
import { Platform, StyleSheet, ImageBackground, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';
import { UserContext } from "../contexts/UserContext";

export default function InscriptionScreen({ navigation }: RootStackScreenProps<'Inscription'>) {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const {setTokens} = useContext(UserContext)
  return (
    
    <ImageBackground source={require('../assets/images/Salle-de-soins-dentaires.png')} resizeMode="cover" style={styles.image}>
    <KeyboardAvoidingView style={styles.container} behavior="padding">
    <View style={styles.inputContainer}>
          <Text style={styles.titleInput}>Firstname</Text>       
          <TextInput
            style={styles.input}
            onChangeText={text => setFirstname(text)}
            value={firstname}
            placeholder="firstname"
          />
          <Text style={styles.titleInput} >Lastname</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setLastname(text)}
            value={lastname}
            placeholder="lastname"     
          />
          <Text style={styles.titleInput} >Email adress</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="email@example.com"     
          />
          <Text style={styles.titleInput} >Phone</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPhone(text)}
            value={phone}
            placeholder="phone"
            keyboardType="numeric"     
          />
          <Text style={styles.titleInput} >Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="password"
            keyboardType="numeric"
            secureTextEntry     
          />
          <TextInput
            style={styles.input}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="confirmation"
            keyboardType="numeric"
            secureTextEntry     
          />

<View style={styles.buttonContainer}>
          <TouchableOpacity
             onPress={()=>{setTokens(email, password); navigation.navigate("Main")}}
             style={styles.button}
          >
            <Text style={styles.buttonText}>Sign In</Text>          
          </TouchableOpacity>

          </View>
      </View>

    </KeyboardAvoidingView>
    </ImageBackground>
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
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '50%'
  },
  image: {
    flex: 1,
    justifyContent: "center"
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
  buttonText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});
