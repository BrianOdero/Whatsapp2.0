import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { Amplify ,Auth} from 'aws-amplify';
import awsconfig from "./src/aws-exports";
import {getUser} from './src/graphql/queries';
import {createUser} from './src/graphql/mutations';
import {API,graphqlOperation} from 'aws-amplify'

//aws autentication
import { withAuthenticator } from 'aws-amplify-react-native';

//screen imports
import Navigator from './src/navigation/Index';


Amplify.configure({...awsconfig, Analytics: {disabled: true}});


function App() {

  useEffect(() => {

    const syncUser = async() => {
      //get Auth user
      const AuthUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      console.log(AuthUser);
    

      //query the database using auth user id(sub)
      const userData = API.graphql(graphqlOperation(getUser, {id: AuthUser.attributes.sub}));
      console.log(userData);

      //if there is no user in database create one, else do nothing 
      //normally starts withbuerdata followed by data then foloowe query name
      if((await userData).data.getUser)
        {
          console.log("User already exists in database");
          return;
        }

      const newUser = {
        id: AuthUser.attributes.sub,
        name : AuthUser.attributes.phone_number,
        status: 'Hey, I am using whatsapp'
      }

      
      await API.graphql(graphqlOperation(createUser, {input: newUser}))

    }

    syncUser();

  },[])

  return (
    <View style={styles.container}>
      <Navigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    padding: 5,
  },
});

export default withAuthenticator(App);