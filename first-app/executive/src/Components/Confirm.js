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
                Send
            </Button>
            <Button onPress={onDecline}>
                Cancel
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
    }
}

export {Confirm};