import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import {TouchableWithoutFeedback, View} from 'react-native';

import { useNavigation } from '@react-navigation/native'

import styles from './Style';

const NewMessageButton = () => {
    const navigator = useNavigation();

    const onClick = () => {
        navigator.navigate('Contacts');
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="message-reply-text" size={24} color='white' />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default NewMessageButton;