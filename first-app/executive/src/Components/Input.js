import React from 'react';
import { TextInput, View, Text } from 'react-native';

 
const Input = ({icon,label, value, onChangeText, placeholder, secureTextEntry,bool,keyboardType,maxLength}) => {
    return(
        <View style={styles.containerStyle}>
            
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.inputStyle}
                value={value}
                multiline={false}
                maxLength={maxLength}
                keyboardType={keyboardType}
                onChangeText={onChangeText}  
                underlineColorAndroid= 'transparent' 
                editable={bool}      
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
        lineHeight: 28,
        flex: 2,
        backgroundColor: '#fff',
        fontFamily:'Bangla Sangam MN',
        textAlign:'center',
        alignSelf:'center'
    },
     labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 0,
        fontFamily:'Bangla Sangam MN'
    },
    containerStyle:{
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        
    }
};
export { Input };