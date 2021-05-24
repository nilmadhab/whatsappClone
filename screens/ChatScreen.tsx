import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItem from '../components/ChatListItems';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import ChatRooms from  '../data/Chatrooms';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
      style={{width: '100%'}}
      data={ChatRooms}
      renderItem={({item}) => <ChatListItem chatRoom={item} />}
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