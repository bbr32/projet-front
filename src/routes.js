import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Weather from './container/Weather';
import Calendarr from './container/Calendar';
import Data from './container/Data';

export default () => (
    <Switch>
        <Route path="/" exact component={Data} />
        <Route path="/calendar" exact component={Calendarr} />
        <Route path="/weather" exact component={Weather} />
    </Switch>
);
