import React,{ useState } from 'react';
import { StyleSheet, Text, View, Dimensions,Alert } from 'react-native';
import { TouchableHighLigth } from 'react-native-gesture-handler';


function DetailUser ({route,navigation}){
    
    const {name,lastname,identification,birthdate,city, neighborhood,telephone } = route.params.user;
    const deleteCita = async () =>{
        try{
            const response =    await fetch ( '192.168.1.18:4000' , { 
                method : 'DELETE' , 
                headers : { 
                Acept : 'application / json' , 
                'Content-Type' : 'aplicación / json' 
          },
         body: JSON.stringify ( { 
            id:id
          })
        });
        
        const json = await response.json();
        Alert.alert("You have been successful");
        navigation.goBack();
    
        }catch(error){
            Alet.alert(error);
        }
    }

    const updateUser = ()=>{
        navigation.navigate('Update',{user:route.params.user});
    }

    return(
        <View style = {styles.container}>
           <View style= {styles.detailCard}>
            <Text> Name: {name} {lastname} </Text>
            <Text> Identification: {identification} </Text>
            <Text> Birthdate:{birthdate}</Text>
            <Text> City:{city}</Text>
            <Text> Neighborhood:{neighborhood}</Text>
            <Text> Telephone:{telephone}</Text>
               <View style={styles.buttonsView}>
                   <TouchableHighLigth  onPress= {updateUser}style={styles.editButton}>
                       <Text style={styles.textButtoncrud}>Edit</Text>
                   </TouchableHighLigth>
                   <TouchableHighLigth  onPress = {deleteUser} style={styles.deleteButton}>
                       <Text style={styles.textButtoncrud}>Delete</Text>
                   </TouchableHighLigth>
               </View>
           </View>
        </View>
    )
    };

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'center',
    },
  
    datailCard:{
       marginTop: 10,
       borderColor: 'black',
       borderRadius: 5,
       borderWidth: 1,
       width: Dimensions.get('screen').width*0.4
      
    },
  
    textCreateButton: {
        color: 'white'
  
    },

    buttonsView:{
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    editButton: {
      marginTop: 10,
      marginBottom: 10,
      borderRadius: 5,
      backgroundColor: 'purple',
      padding: 15,
      alignItems: 'center',
      width: Dimensions.get('screen').width*0.4


    },

    
    deleteButton: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: 'purple',
        padding: 15,
        alignItems: 'center',
        width: Dimensions.get('screen').width*0.4
  
  
      },

      textButtoncrud:{
          color: 'white'
      }

  });

  export default DetailUser;