import React from 'react';
import {
  Text,
  TouchableOpacity,
  MapView,
  View,
} from 'react-native'

const OrangeButton = ({ onPress, children}) => {
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
             borderWidth: 1,
             marginLeft: 5,
             marginRight: 5,
             borderColor:'white',
             flexDirection:'column',
             justifyContent:'center',
           
        shadowColor: '#000',
        shadowOffset: {
            width: 3,
            height: 2
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
             


    },
    TextStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Bangla Sangam MN'


    }
};
export { OrangeButton };
