import React from 'react';
import {
  Text,
  TouchableOpacity,
  MapView,
  View,
} from 'react-native'

const GoogleButton = ({ onPress, children}) => {
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
             backgroundColor: 'rgb(255,45,54)',
             borderRadius: 5,
             borderWidth: 1,
             marginLeft: 5,
             marginRight: 5,
             borderColor:'white',
             flexDirection:'column',
             justifyContent:'center'

             


    },
    TextStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Bangla Sangam MN'


    }
};
export { GoogleButton };
