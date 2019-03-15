import React, { Component } from 'react';
import { Row, Table } from 'reactstrap';

class Data extends Component {
    state = {
        people: []
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=50";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results });
    }

    render() {
        return (
            <div>
                <h3 className="py-2">Data</h3>
                <Row className="table-responsive">
                    <Table>
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>City</th>
                            </tr>
                            {this.state.people.map(person => (
                                <tr>
                                    <td>{person.name.first}</td>
                                    <td>{person.name.last}</td>
                                    <td>{person.email}</td>
                                    <td>{person.location.city}</td>
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