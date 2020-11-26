import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer} from '@react-navigation-native';
import ListUser from './screens/list-user/list-user';
import CreateUser from './screens/create-user/create-user';
import DetailUser from './screens/detail-user/detail-user';
import UpdateUser from './screens/update-user/update-user';

const Stack = createStackNavigator();

function App() {

    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.screen name = "Home"   component={ListUser}/>
          <Stack.screen name = "Create" component={CreateUser}/>
          <Stack.screen name = "Detail" component={DetailUser}/>
          <Stack.screen name = "Update" component={UpdateUser}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default App;