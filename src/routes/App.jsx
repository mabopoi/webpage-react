import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} />  
        </Switch>    
    </BrowserRouter>
)

export default App;