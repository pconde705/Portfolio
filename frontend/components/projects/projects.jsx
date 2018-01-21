import React from 'react'
import {Link} from 'react-router-dom'

class Projects extends React.Component{

    componentDidMount() {
        this.props.fetchAllProjects();
    }

    render() {
        
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
                            <div className="overlay-links-div">
                                <p className="overlay-text title">{project.title}</p>
                                <div className="overlay-links-text">
                                        <a href={project.live_url}><p className="overlay-text github"><i className="fa fa-external-link" aria-hidden="true"></i></p></a>
                                    <a href={project.github_url}><p className="overlay-text live-site"><i className="fa fa-github" aria-hidden="true"></i></p></a>
                                </div>
                            </div>    
                        </div>
                    </div>
                    ))}
                </div>
            )
        }
    }
}

export default Projects;