import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

let result = "";

class Forms extends Component {
    state = {
        name: '',
        birth: 0,
        followers: 0,
        albums: null,
    }

    update = () => {
        this.forceUpdate();
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.name !== "" && this.state.birth !== 0 && this.state.followers !== 0) {
            /*result = (
                <div >
                    <p>Artiste: {this.state.artist}</p>
                    <p>Album: {this.state.album}</p>
                    <p>Date: {this.state.date}</p>
                </div>
            );
            this.forceUpdate();*/
            axios.put('http://localhost:3000/artist', this.state).then(res => {
                if(res.status === 200)
                    result = (<p>Succesfully added {res.data.name} !</p>);
                else if(res.status === 400)
                    result = (<p>Cannot add to database, fields are not valid</p>);
                else if(res.status === 404)
                    result = (<p>Cannot connect to database</p>);
            });
            this.setState({ });
        } else result = (<p>Invalid fields</p>);
    }

    render() {
        return (
            <div>
                <h3 className="py-3">Add an artist to the database</h3>
                <Form>
                    <FormGroup>
                        <Label for="formArtist">Artist</Label>
                        <Input
                            type="text"
                            name="artiste"
                            id="formArtist"
                            placeholder="U2"
                            value={this.state.name}
                            onChange={e => this.setState({ name: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="formBirth">Birth Year</Label>
                        <Input
                            type="number"
                            name="birth"
                            id="formBirth"
                            placeholder="Birth year"
                            value={this.state.birth}
                            onChange={e => this.setState({ birth: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="formFollowers">Followers</Label>
                        <Input
                            type="number"
                            name="followers"
                            id="formFollowers"
                            placeholder="2029002"
                            value={this.state.followers}
                            onChange={e => this.setState({ followers: e.target.value })} />
                    </FormGroup>
                    <Button onClick={e => this.onSubmit(e)}>Submit</Button>
                </Form>
                {result}
            </div>
        );
    }
}

export default Forms;