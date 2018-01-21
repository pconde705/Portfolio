import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-div">
                <Link to="/skills"><p>SKILLS</p></Link>
                <Link to="/"><p>PROJECTS</p></Link>
                <p>PATRICK CONDE</p>
                <p>RESUME</p>
                <Link to="/about"><p>ABOUT</p></Link>
            </div>
        )
    }
}

export default Navbar;