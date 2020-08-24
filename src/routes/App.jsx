import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
import ProfileSearch from '../containers/ProfileSearch'
import Tv from '../containers/Tv'
import Error404 from '../containers/Error404'


const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route exact path="/search" component={ProfileSearch} /> 
                <Route exact path='/tv' component={Tv}/>
                <Route component={Error404}/>
            </Switch>    
        </Layout>
    </BrowserRouter>
)

export default App;