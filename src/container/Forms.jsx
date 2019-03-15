import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

let result = "";

class Forms extends Component {
    state = {
        artiste: '',
        album: '',
        date: ''
    }

    onSubmit = e => {
        e.preventDefault();
        if (this.state.artiste !== "" && this.state.album !== "" && this.state.date !== "") {
            result = (
                <div >
                    <p>Artiste: {this.state.artiste}</p>
                    <p>Album: {this.state.album}</p>
                    <p>Date: {this.state.date}</p>
                </div>
            );
            this.forceUpdate();
        }

    }

    render() {
        return (
            <div>
                <h3 className="py-3">Form</h3>
                <Form>
                    <FormGroup>
                        <Label for="formArtist">Artiste</Label>
                        <Input
                            type="text"
                            name="artiste"
                            id="formArtist"
                            placeholder="U2"
                            value={this.state.artiste}
                            onChange={e => this.setState({ artiste: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Album</Label>
                        <Input
                            type="text"
                            name="album"
                            id="formAlbum"
                            placeholder="All That You Can't Leave Behind"
                            value={this.state.album}
                            onChange={e => this.setState({ album: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input
                            type="date"
                            name="date"
                            id="formADate"
                            placeholder="2000"
                            value={this.state.date}
                            onChange={e => this.setState({ date: e.target.value })} />
                    </FormGroup>
                    <Button onClick={e => this.onSubmit(e)}>Submit</Button>
                </Form>
                <br/>
                {result}
            </div>
        );
    }
}

export default Forms;