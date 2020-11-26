import  React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighLigth } from 'react-native-gesture-handler';


function UpdateUser({route, navigation}){

    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [identification, setidentification] = useState();
    const [birthdate, setbirthdate] = useState("");   
    const [city, setcity] = useState("");
    const [neighborhood, setneighborhood] = useState("");
    const [telephone, settelephone] = useState();

const updateCita =   async ()=>{
    try{
        const response =  await fetch ( '192.168.1.18:4000'/updateCita , { 
            method : 'PUT' , 
            headers : { 
            Acept : 'application / json' , 

            
            'Content-Type' : 'aplicación / json' 
      },
    body: JSON.stringify ( { 
        id:route.params.user.id,
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
    navigation.navigate('Home');

    }catch(error){
        Alet.alert(error);
    }
}
 useEffect(()=>{     
     setName(route.params.user.name);
     setLastname(route.params.user.lastname);
     setiIdentification(route.params.user.identification);
     setBirthdate(route.params.user.birthdate);
     setCity(route.params.user.city);
     setNeighborhood(route.params.user.neighborhood);
     setTelephone(route.params.user.telephone);
     

 },[]);

    return(
    <View>
        <TextInput  style={styles.textInput}  value={name} onChangeText = {text => setName(text)} placerholder = "Name"></TextInput>
        <TextInput  style={styles.textInput}  value={lastname} onChangeText = {text => setLastname(text)} placerholder = "Lastname"></TextInput>
        <TextInput  style={styles.textInput}  value={identification} onChangeText = {text => setIdentification(text)}placerholder = "Identification"></TextInput>
        <TextInput  style={styles.textInput}  value={birthdate} onChangeText = {text => setBirthdate(text)} placerholder = "Birthdate"></TextInput>
        <TextInput  style={styles.textInput}  value={city} onChangeText = {text => setCity(text)}placerholder = "City"></TextInput>
        <TextInput  style={styles.textInput}  value={neighborhood} onChangeText = {text => setNeighborhood(text)}placerholder = "Neighborhood"></TextInput>
        <TextInput  style={styles.textInput}  value={telephone} onChangeText = {text => setTelephone(text)}placerholder = "Telephone"></TextInput>
        <TouchableHighLigth style={styles.styleButton} onPress={updateUser}>
            <Text style={textCreateButton}>Update user</Text>
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

export default UpdateUser;