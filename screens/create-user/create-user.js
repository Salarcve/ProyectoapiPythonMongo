import React,{useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighLigth } from '@react-native-gesture-handler';

function CreateUser ({navigation}) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [identification, setIdentification] = useState();
  const [birthdate, setBirthdate] = useState("");   
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [telephone, setTelephone] = useState();


const createuser =   async ()=>{  
    try{
        const response =  await fetch ( '192.168.1.18:4000'/createCitas , { 
            method : 'POST' , 
            headers : { 
            Acept : 'application / json' , 
            'Content-Type' : 'aplicación / json' 
      },
    body: JSON.stringify ( { 
      name: name,
      lastname: lastname,
      identification: identification,
      birthdate: birthdate,
      city: city,
      neighborhood: neighborhood,
      telephone: telephone
      })
    });
    
    const json = await response.json();
    Alert.alert("You have been successful");
    navigation.goBack();

    }catch(error){
        Alet.alert(error);
    }
  }

    return(
    <View>
        <TextInput style={styles.textInput} onChangeText = {text =>  setName(text)} placerholder = "Name"></TextInput>
        <TextInput  style={styles.textInput}  onChangeText = {text => setLastname(text)} placerholder = "Lastname"></TextInput>
        <TextInput  style={styles.textInput}  onChangeText = {text => setIdentification(text)}placerholder = "Identification"></TextInput>
        <TextInput  style={styles.textInput}  onChangeText = {text => setBirthdate(text)} placerholder = "Birthdate"></TextInput>
        <TextInput  style={styles.textInput}  onChangeText = {text => setCity(text)}placerholder = "City"></TextInput>
        <TextInput  style={styles.textInput}  onChangeText = {text => setNeighborhood(text)}placerholder = "Neighborhood"></TextInput>
        <TextInput  style={styles.textInput}  onChangeText = {text => setTelephone(text)}placerholder = "Telephone"></TextInput>
        <TouchableHighLigth style={styles.styleButton} onPress={createUser}>
            <Text style={textCreateButton}>Create user</Text>
        </TouchableHighLigth>

    </View>
  );

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center'
  },

  textInput:{
      marginTop: 10,
      padding: 16,
      borderColor:'black',
      borderWidth: 1,
      borderRadius: 5,
      width: Dimensions.get('screen').width*0.9
  },

  styleButton:{
      backgroundColor: 'purple',
      padding: 15,
      alignItems: 'center',
      marginTop: 10,
      width: Dimensions.get('screen').width*0.9,
      borderRadius: 6,
      
  
},

textCreateButton: {
    color: 'white'

}
});

export default CreateUser;  
