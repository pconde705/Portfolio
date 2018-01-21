import React from 'react';
import {Route} from 'react-router-dom';

import Navbar from './navbar';
import ProjectsContainer from './projects/projects_container';

const App = () => (
    <div>
        <Navbar />
        <div className="not-navbar">
            <Route exact path="/" component={ProjectsContainer} />
        </div>
    </div>
)

export default App;