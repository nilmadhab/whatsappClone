import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    messageBox: {
        borderRadius: 10,
        padding: 10
    },
    name: {
        color: Colors.light.tint
    },
    message: {
        fontSize: 16
    },
    time: {
        alignSelf: "flex-end",
        color: 'grey',
        fontSize: 14
    }
    
});

export default styles;