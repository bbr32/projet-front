import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, ResponsiveContainer
} from 'recharts';


const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
];

const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];
const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
];

class Data extends Component {
    render() {
        return (
            <div>
                <h3 className="py-2">Data</h3>
                <Row>
                    <Col lg={8} md={12}>
                        <ResponsiveContainer aspect={2}>
                            <AreaChart
                                data={data}
                                margin={{
                                    top: 10, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                            </AreaChart>

                        </ResponsiveContainer>

                    </Col>
                    <Col md={6} lg={4}>
                        <ResponsiveContainer aspect={1}>
                            <PieChart width={400} height={400}>
                                <Pie data={data01} dataKey="value" cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                                <Pie data={data02} dataKey="value" cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                            </PieChart>
                        </ResponsiveContainer>
                    </Col>

                </Row>

            </div>
        );
    }
}

export default Data;