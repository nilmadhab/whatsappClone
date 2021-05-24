import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
      },
      container: {
        flexDirection: 'row',
        width: "100%",
        padding: 10,
        justifyContent: 'space-between',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5
      },

      midContainer: {

      },

      username: {
        fontWeight: 'bold',
        fontSize: 16
      },

      lastMessage: {
        fontSize: 16,
        color: 'grey'
      },

      lefContainer: {
        flexDirection: 'row'
      },

      time: {
        fontSize: 14,
        color: 'grey'
      }

});

export default styles;
