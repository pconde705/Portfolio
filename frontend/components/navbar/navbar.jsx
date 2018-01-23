import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-div">
                <Link className="navbar-link" to="/skills"><p>SKILLS</p></Link>
                <Link className="navbar-link" to="/"><p>PROJECTS</p></Link>
                <p className="navbar-name">PATRICK CONDE</p>
                <p>RESUME</p>
                <Link className="navbar-link" to="/about"><p>ABOUT</p></Link>
            </div>
        )
    }
}

export default Navbar;