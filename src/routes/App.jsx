import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import ProfileSearch from '../containers/ProfileSearch'

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/search" component={ProfileSearch} /> 
            </Switch>    
        </Layout>
    </BrowserRouter>
)

export default App;