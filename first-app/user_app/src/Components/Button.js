import React from 'react';
import {
  Text,
  TouchableOpacity,
  MapView,
  View,
} from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome';

const Button = ({ onPress, children, style}) => {
    return (
    <TouchableOpacity style={[styles.ButtonStyle, style]} onPress={onPress} >
       {children}
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
             marginLeft: 0,
             marginRight: 5,
             flexDirection:'column'
    },
    
};
export { Button };
