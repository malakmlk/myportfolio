import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Project from './project';
import Aboutme from'./aboutme';
import Contact from './contact';
import Resume from './resume';
import landingpage from './landingpage';

const Main= () => (
    <Switch>
        <Route exact path="/" component={landingpage} />
        <Route  path="/resume" component={Resume} />
        <Route  path="/project" component={Project} />
        <Route  path="/contact" component={Contact} />
        <Route  path="/aboutme" component={Aboutme} />


    </Switch>
)
export default Main;