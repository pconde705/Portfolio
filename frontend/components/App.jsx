import React from 'react';
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router';

import Navbar from './navbar/navbar';
import ProjectsContainer from './projects/projects_container';
import About from './about/about';
import Skills from './skills/skills';
import Footer from './footer/footer';
import Resume from './resume/resume';

const App = () => (
    <div>
        <Navbar />
        <div className="not-navbar">
            <Redirect from='/' to="/skills" />
            <Route path="/projects" component={ProjectsContainer} />
            <Route path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/resume" component={Resume} />
        </div>
        <Footer />
    </div>
)

export default App;
