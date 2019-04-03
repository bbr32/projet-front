import React, { Component } from 'react';
import { Row, Table } from 'reactstrap';
import axios from 'axios';

class Data extends Component {
    state = {
        //people: [],
        artists: [],
        albums: [],
        tracks: []
    }

    async componentDidMount() {
        /*const url = "https://api.randomuser.me/?results=50";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results });*/
        axios.get(`http://localhost:3000/artists`).then(res => {
            this.setState({ artists: res.data })
        });
        axios.get(`http://localhost:3000/albums`).then(res => {
            this.setState({ albums: res.data })
        });
        axios.get(`http://localhost:3000/tracks`).then(res => {
            this.setState({ tracks: res.data })
        });
    }

    render() {
        return (
            <div>
                <h3 className="py-3">Artists</h3>
                <Row className="table-responsive">
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Albums</th>
                                <th>Birth</th>
                                <th>Followers</th>
                            </tr>
                            {this.state.artists.map(artist => (
                                <tr>
                                    <td>{artist.name}</td>
                                    <td>{artist.albums ? (artist.albums.map(album => 
                                        (<span>{album}<br/></span>)
                                        )) : (console.log("chibre"))}</td>
                                    <td>{artist.birth}</td>
                                    <td>{artist.followers}</td>
                                </tr>
                            ))}
                        </thead>
                    </Table>
                </Row>
                <h3 className="py-3">Albums</h3>
                <Row className="table-responsive">
                    <Table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Year</th>
                                <th>Genre</th>
                                <th>Tracks</th>
                            </tr>
                            {this.state.albums.map(album => (
                                <tr>
                                    <td>{album.title}</td>
                                    <td>{album.year}</td>
                                    <td>{album.genre}</td>
                                    <td>{album.tracks.map(track => 
                                        (<span>{track}<br/></span>)
                                        )}</td>
                                </tr>
                            ))}
                        </thead>
                    </Table>
                </Row>
                <h3 className="py-3">Tracks</h3>
                <Row className="table-responsive">
                    <Table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Duration</th>
                                <th>Likes</th>
                                <th>Listenings</th>
                                <th>Featuring</th>
                            </tr>
                            {this.state.tracks.map(track => (
                                <tr>
                                    <td>{track.title}</td>
                                    <td>{track.duration}</td>
                                    <td>{track.likes}</td>
                                    <td>{track.listenings}</td>
                                    <td>{track.featuring}</td>
                                </tr>
                            ))}
                        </thead>
                    </Table>
                </Row>
            </div>
        );
    }
}

export default Data;