import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { useState } from 'react';
import { Touchable, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import styles from './Style';

const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicronphonePress = () => {

    }

    const onSendPress = () => {
        console.log("send", message);
        setMessage('');
    }

    const onPress = () => {
        if (!message) {
            onMicronphonePress();
        } else {
            onSendPress();
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color='grey' />
                <TextInput 
                    multiline={true} 
                    style={styles.input}
                    value={message}
                    placeholder="Type a message"
                    onChangeText={setMessage} />
                <Entypo name="attachment" size={24} style={styles.icon} color='grey'/>
                {!message && <Fontisto name="camera" size={24} color='grey' style={styles.icon} />}
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.microphone}>
                    {!message? 
                    <MaterialCommunityIcons name="microphone" size={24} color='white' /> :
                    <MaterialIcons name="send"  size={24} color='white' />
                    }
                </View>
            </TouchableOpacity>
            
        </View>
    );
}

export default InputBox;