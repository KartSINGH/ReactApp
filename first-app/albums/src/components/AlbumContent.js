import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card.js';
import CardSection from './CardSection.js';
import Button from './Button.js';

const AlbumContent = (props) => {
    return (
        <Card>
        <CardSection>
            <View style={styles.thumbnailContainer}>
                <Image 
                    style={styles.thumbnailStyle}
                    source={{ uri: props.album.thumbnail_image }} 
                />
            </View>
            <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>{props.album.title}</Text>
                <Text>{props.album.artist}</Text>
            </View>
            <View />
        </CardSection>
        <CardSection>
            
            <Image 
            style={styles.imageStyle}
                source={{ uri: props.album.image }}
            />
        </CardSection>
        <CardSection>
            <Button onPress={() => Linking.openURL(props.album.url)} >
                Buy Now
            </Button>
        </CardSection>
        </Card>
    );
};
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
       
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
};
export default AlbumContent;
