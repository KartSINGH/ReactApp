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
        backgroundColor: 'teal',
        height: 60,
        paddingTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'yellow',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        elevation: 2,
        position: 'relative'


    },
    textStyle: {
        fontSize: 20,
    }
};
export default Header;
