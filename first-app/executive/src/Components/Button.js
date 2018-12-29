import React from 'react';
import {
  Text,
  TouchableOpacity,
  MapView,
  View,
} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome';

const Button = ({ onPress, children}) => {
    return (
    <TouchableOpacity style={styles.ButtonStyle} onPress={onPress} >
        <Text style={styles.TextStyle}> {children}</Text>
    </TouchableOpacity>
    );
};
const styles = {
    ButtonStyle: {
             flex: 1,
             alignSelf: 'stretch',
             backgroundColor: 'white',
             borderRadius: 0,
             borderWidth: 2,
             borderColor: '#22aa86',
             marginLeft: 5,
             marginRight: 5,
    },
    TextStyle: {
        alignSelf: 'center',
        color: '#22aa86',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Bangla Sangam MN'

    }
};
export { Button };
