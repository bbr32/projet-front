import React, { Component } from 'react';
import Calendar from 'react-calendar';

class Calendarr extends Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <h2 className="py-3">Calendar</h2>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
               <p>{this.state.date.toUTCString()}</p>
            </div>
        );
    }
}

export default Calendarr;