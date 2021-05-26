import { API, graphqlOperation } from 'aws-amplify';
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Touchable } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import ChatListItem from '../components/ChatListItems';
import ContactListItem from '../components/ContactListItem';

import EditScreenInfo from '../components/EditScreenInfo';
import NewMessageButton from '../components/NewMessageButton';
import { Text, View } from '../components/Themed';

import Users from  '../data/Users';
import { listUsers } from '../src/graphql/queries';

export default function ContactsScreen() {

  const [users, setusers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await API.graphql(graphqlOperation(listUsers));
        console.log("userData", userData);
        setusers(userData.data.listUsers.items);
      } catch (e) {
        console.log(e);
      }
      
    }
    fetchUsers();
  }, [])

  return (
    <View style={styles.container}>
      <FlatList 
      style={{width: '100%'}}
      data={users}
      renderItem={({item}) => <ContactListItem user={item} />}
      keyExtractor={(item) => item.id}
      />
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
});
