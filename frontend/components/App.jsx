import React from 'react';
import {Route} from 'react-router-dom';

import Navbar from './navbar';
import ProjectsContainer from './projects/projects_container';

const App = () => (
    <div>
        <Navbar />
        <Route exact path="/" component={ProjectsContainer} />
    </div>
)

export default App;