import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableHighlight} from 'react-native';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps, RootTabParamList } from '../types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useColorScheme from '../hooks/useColorScheme';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function AppointmentScreen({ navigation }: RootStackScreenProps<'Appointment'>) {
  
  const [Enable , setEnable]  = useState("Action");
  const BottomTab = createBottomTabNavigator<RootTabParamList>();
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
     
     <form>
      {/*<Picker
          selectedValue={Enable}
          style={{ height: 50, width: 250 }}
          mode={"dialog"}
          onValueChange={(itemValue) => setEnable(itemValue)}
        >
          <Picker.Item label="Action" value="Action" />
          <Picker.Item label="Another action" value="Another action" />
          <Picker.Item label="Something else here" value="Something else here" />
          
  </Picker>*/}
      <FontAwesomeIcon icon={faPlusCircle} />

      
      <View style={styles.inputLine}>
        <Text style={styles.labelText}>{Enable} <FontAwesomeIcon icon={faTrash} /></Text>
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.labelText}>Date:</Text>
        <TextInput  style={styles.textInput}
                    value="27-10-2022"/>
      </View>
      <View style={styles.inputLine}>
        <TouchableHighlight style={styles.button}
>
            <Text style={styles.buttonText}>Ajouter</Text>
          </TouchableHighlight>
      </View>
      </form>

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
  labelText: {
    margin:10,
    flex:1
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

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}