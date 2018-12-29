import React from 'react';
import {Text,View, Modal,Dimensions} from 'react-native';
import {CardSection} from './CardSection.js';
import {Button} from './Button.js';

const Confirm=({children,visible,onAccept,onDecline})=>{
    const { containerStyle, cardSectionStyle,textStyle } =styles;
    return(
<Modal
    animationType="slide"
    onRequestClose={()=>{}}
    transparent
    visible={visible}
>
    <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
            <View style={textStyle}>
            {children}
            </View>
        </CardSection>
        <CardSection>
            <Button onPress={onAccept}>
                <Text style={styles.TextStyle}>Send Password Reset Link</Text>
            </Button>
            <Button onPress={onDecline}>
                <Text style={styles.TextStyle}>Cancel</Text>
            </Button>
        </CardSection>
    </View>
</Modal>
);
}
const styles={
    cardSectionStyle:{
        justifyContent:'center',
    },
    textStyle:{
        flex:1,
        height:100
    },
    containerStyle:{
        backgroundColor:'rgba(0,0,0,0.75)',
        position:'relative',
        flex:1,
        justifyContent:'center'
    },
     TextStyle: {
        alignSelf: 'center',
        color: '#424242',
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily:'Bangla Sangam MN'


    }
}

export {Confirm};