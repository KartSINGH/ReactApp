import React from 'react';
import {
  Text,
  TouchableOpacity,
  MapView,
  View,
  TouchableHighlight
} from 'react-native'

const GreenButton = ({ onPress, children}) => {
    return (
    <TouchableHighlight style={styles.ButtonStyle} onPress={onPress} >
        <Text style={styles.TextStyle}>{children}</Text>
    </TouchableHighlight>
    );
};
const styles = {
    ButtonStyle: {
             flex: 1,
             alignSelf: 'stretch',
             backgroundColor: '#424242',
             borderWidth: 1,
             marginLeft: 20,
             marginRight: 20,
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
            marginBottom:10
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
export { GreenButton };
