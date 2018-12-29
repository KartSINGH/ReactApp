import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
const { textStyle, viewStyle } = styles;
return (
<View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
</View>
);
};

const styles = {
    viewStyle: {
        backgroundColor: '#22aa86',
        height: 60,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25,
        color:'white'
    }
};
export { Header };
