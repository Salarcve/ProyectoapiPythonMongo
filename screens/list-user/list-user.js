import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import {TouchableHighLigth} from 'react-native-gesture-handler';
import CardComponent from './card-component/CardComponent';
import {useIsFocused} from  '@react-navigation-native';

function listuser(){
    const isFocused = useIsFocused();
    const [users,setUsers] = useState([]);
    const getUsers = async ()=>{
        let response  = await fetch('192.168.1.18:4000'/listCitas);
        let json = await response.json();
        setUsers(json.users);
    }
const detailUser = (item) =>{
  navigation.navigate('Detail',{user:item});

}
    useEffect(()=>{
       listUsers();
    },[isFocused]); 

  return(
    <View style={styles.container}>
        <TouchableHighLigth style={styles.styleButton} onPress = {() => navigation.navigate('Create')}>
            <Text style={textCreateButton}>Create user</Text>
        </TouchableHighLigth>
        <FlatList>
            data = [users]
            renderItem={({item}) => <TouchableHighLigth  onPress={()=> detailUser(item)}style={styles.listButton}>
                <CardComponent user={item}/>
                </TouchableHighLigth>}
                keyExtractor={item => item.id}
        </FlatList>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },

  createButton:{
      marginTop: 10,
      borderRadius: 5,
      backgroundColor: 'purple',
      padding: 15,
      alignItems: 'center',
      width: Dimensions.get('screen').width*0.9
    
  },

  textCreateButton: {
      color: 'white'

  },

  listButton:{
    borderColor:'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
    marginTop: 10,
    width: Dimensions.get('screen').width*0.9

  }
});

export default listuser;

