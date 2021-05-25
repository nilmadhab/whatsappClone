import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10
    },
    mainContainer:{
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems: 'center'
    },

    icon: {
        paddingHorizontal: 5
    },

    input: {
        flex: 1,
        marginHorizontal: 5
    },

    microphone: {
        backgroundColor: Colors.light.tint,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
});

export default styles;