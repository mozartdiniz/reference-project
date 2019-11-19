import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { HelloWorld } from './components/HelloWorld';
import { HomePage } from './containers/HomePage';

const routing = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/hello-world" component={HelloWorld} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('app'));
