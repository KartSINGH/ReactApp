import React, { Component } from 'react';
import { ScrollView } from 'react-native';
//import axios from 'axios';
import AlbumContent from './AlbumContent.js';


class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        fetch
            ('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => {
                return response.json();
            })
            .then(responseData => {
                return responseData;
            })
            .then((data) => this.setState({ albums: data }));
    }
    renderAlbums() {
        return this.state.albums.map(album => <AlbumContent key={album.title} album={album} />);
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        );
    }
}

export default AlbumList;
