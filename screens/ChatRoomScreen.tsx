import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native';

import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/background.png';
import InputBox from '../components/inputBox';

const ChatRoomScreen = () => {

    const route = useRoute();
    console.log(route.params);
    return (
        <ImageBackground source={BG} style={{ width: '100%', height: '100%'}}>
             <FlatList 
                style={{width: '100%'}}
                data={chatRoomData.messages}
                renderItem={({item}) => <ChatMessage message={item} />}
                keyExtractor={(item) => item.id}
                inverted
                />
                <InputBox/>
        </ImageBackground>
        
    );
}

export default ChatRoomScreen;

