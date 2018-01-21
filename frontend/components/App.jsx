import React from 'react';
import {Route} from 'react-router-dom';

import Navbar from './navbar/navbar';
import ProjectsContainer from './projects/projects_container';
import About from './about/about';
import Skills from './skills/skills';

const App = () => (
    <div>
        <Navbar />
        <div className="not-navbar">
            <Route exact path="/" component={ProjectsContainer} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
        </div>
    </div>
)

export default App;