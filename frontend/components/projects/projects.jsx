import React from 'react'
import {Link} from 'react-router-dom'

class Projects extends React.Component{

    componentDidMount() {
        this.props.fetchAllProjects();
    }

    render() {
        const hoverColors = {
            color: "black"
        }
        
        const {projects} = this.props
        
        if (projects === []) {
            return ("")
        } else {
            return (
                <div className="container-div">
                    {projects.map((project, key) => (
                    <div className="img-div" key={key}>
                        <img className="project-img" src={project.img_url} alt=""/>
                        <div className="img-overlay">
                            <p className="overlay-text">{project.title}</p>
                            <p className="overlay-text">{project.live_url}</p>
                            <p style={hoverColors} className="overlay-text">{project.github_url}</p>
                        </div>
                    </div>
                    ))}
                </div>
            )
        }
    }
}

export default Projects;