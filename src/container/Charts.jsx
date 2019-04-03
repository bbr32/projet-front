import React, { Component } from 'react';
import { Row, Col, Card } from 'reactstrap';
import {
    XAxis, YAxis, LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie
} from 'recharts';
import axios from 'axios';

class Charts extends Component {
    state = { tracks: []}
    
    componentDidMount() {
        axios.get(`http://localhost:3000/tracks`).then(res => {
            this.setState({ tracks: res.data })
        });
    }

    render() {
        return (
            <div>
                <h3 className="py-3">Charts</h3>
                <Row>
                    <Col lg={6} md={12}>
                        <Card>
                            <h5 className="py-2 px-2">Number of likes per tracks</h5>
                            <ResponsiveContainer aspect={2}>
                                <LineChart data={this.state.tracks}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="title" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="likes" stroke="#8884d8" activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </Card>
                    </Col>

                    <Col lg={6} md={12}>
                        <Card>
                            <h5 className="py-2 px-2">Number of listenings per tracks</h5>
                            <ResponsiveContainer aspect={2}>
                                <AreaChart data={this.state.tracks}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="title" />
                                    <YAxis />
                                    <Tooltip />
                                    <Area type="monotone" dataKey="listenings" stroke="#8884d8" fill="#8884d8" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </Card>
                    </Col>
                    
                    <Col lg={{ size: "6", offset:"3"}} md={12} className="py-4">
                        <Card>
                            <h5 className="py-2 px-2">Duration of tracks</h5>
                            <ResponsiveContainer aspect={2}>
                            <PieChart>
                                <Pie data={this.state.tracks} dataKey="duration" fill="#8884d8" label />
                            </PieChart>
                            </ResponsiveContainer>
                        </Card>
                    </Col>
                    
                </Row>
            </div>
        );
    }
}

export default Charts;