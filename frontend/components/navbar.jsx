import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-div">
                <p>SKILLS</p>
                <p>PROJECTS</p>
                <p>PATRICK CONDE</p>
                <p>RESUME</p>
                <p>ABOUT</p>
            </div>
        )
    }
}

export default Navbar;