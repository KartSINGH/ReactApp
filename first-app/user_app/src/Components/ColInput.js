import React from 'react';
import { TextInput, View, Text } from 'react-native';
const ColInput = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
    return(
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}           
 />
        </View>
    );
};
const styles = {
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        backgroundColor: '#fff',
        borderColor:'orange',
        fontFamily:'Bangla Sangam MN'
    },
     labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        fontFamily:'Bangla Sangam MN',
        height:100
    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center', 
    }
};
export { ColInput };