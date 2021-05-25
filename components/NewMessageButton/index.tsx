import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';

import {View} from 'react-native';
import styles from './Style';

const NewMessageButton = () => {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="message-reply-text" size={24} color='white' />
        </View>
    );
}

export default NewMessageButton;