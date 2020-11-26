import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';


function CardComponent (props){
    const {name, lastname,identification  } = props.user;
    return(
        <View>            
            <Text>{name} {lastname}</Text>
            <Text>{identification}</Text>         
        </View>
    )
    };


const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      flexDirection: 'row'
    },
  
    styleButton:{
        backgroundColor: 'purple',
        padding: 15,
        alignItems: 'center'
      
    },
  
    textCreateButton: {
        color: 'white'
  
    }
  });

  export default CardComponent;