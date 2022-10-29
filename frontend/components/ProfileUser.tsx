import { Text, View } from './Themed';
import { TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import Colors from '../constants/Colors';
import { useContext, useState } from 'react';
import { verifEmail, verifFirstname, verifName, verifPhone } from '../helpers/ContactHelpers';
import { ContactsContext } from '../contexts/ContactContext';

export type ContactFormProps = {
    onSave: ()=>void
}

export type ContactProps = {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
};



export default function ProfileUser(formProps: ContactFormProps) {
    const [firstname, setFirstname]= useState("")
    const [lastname, setLastname]= useState("")
    const [email, setEmail]= useState("")
    const [phone, setPhone]= useState("")
    const [errors, setErrors]= useState(Array<String>())

    const {addContact} = useContext(ContactsContext);

    const saveContact= ()=>{
        let errorFirstname= verifFirstname(firstname),
        errorName= verifName(lastname),
        errorPhone= verifPhone(phone),
        errorEmail= verifEmail(email);
        let errorsForm= [];
        if(errorName!="") errorsForm.push(errorName);
        if(errorFirstname!="") errorsForm.push(errorFirstname);
        if(errorPhone!="") errorsForm.push(errorPhone);
        if(errorEmail!="") errorsForm.push(errorEmail);
        setErrors(errorsForm);
        if(errorsForm.length==0){
            addContact({firstname: firstname, lastname: lastname, email:email, phone:phone})
            setFirstname("")
            setLastname("")
            setEmail("")
            setPhone("")
            formProps.onSave();
        }
    }

    return (
        <View>
            <View style={styles.inputLine}>
                <Text style={styles.labelText}>Nom:</Text>
                <TextInput  style={styles.textInput}
                    value={lastname}
                    onChangeText={setLastname}/>
            </View>
            <View style={styles.inputLine}>
                <Text style={styles.labelText}>Prénom:</Text>
                <TextInput  style={styles.textInput}
                    value={firstname}
                    onChangeText={setFirstname}/>
            </View>
            <View style={styles.inputLine}>
                <Text style={styles.labelText}>Téléphone:</Text>
                <TextInput  style={styles.textInput}
                    value={phone}
                    onChangeText={setPhone}/>
            </View>
            <View style={styles.inputLine}>
                <Text style={styles.labelText}>Email:</Text>
                <TextInput  style={styles.textInput}
                    value={email}
                    onChangeText={setEmail}/>
            </View>
            {errors.map((item:String, index)=>{
                return <Text key={index} lightColor='red' darkColor='red'>{item}</Text>
            })}
            <TouchableHighlight style={styles.button}
                onPress={saveContact}>
                <Text style={styles.buttonText}>Ajouter</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    inputLine: {
      flexDirection:'row',
      margin:10,
      flex:1
    },
    labelText: {
      margin:10,
      flex:1
    },
    textInput: {
      borderBottomWidth:2,
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
