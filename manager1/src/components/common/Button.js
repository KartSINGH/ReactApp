import React from 'react';
import {
  Text,
  TouchableOpacity,
  MapView,
  View,
} from 'react-native'

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity style={styles.ButtonStyle} onPress={onPress} >
        <Text style={styles.TextStyle}>{children}</Text>
      </TouchableOpacity>
    );
};


const styles = {
    ButtonStyle: {
             flex: 1,
             alignSelf: 'stretch',
             backgroundColor: '#22aa86',
             borderRadius: 0,
             borderWidth: 1,
             borderColor: '#22aa86',
             marginLeft: 5,
             marginRight: 5,

             


    },
    TextStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10

    }
};
export { Button };
