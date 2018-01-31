import React from 'react'
import {Link} from 'react-router-dom'

class Projects extends React.Component{
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.fetchAllProjects();
    }

    render() {
        const colors = ["#3128C8", "#EA168C", "#ED352A", "#095D62"]
        let styles = {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)]
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
                        <p className="text-over-img">{project.title}</p>
                            <div className="img-overlay" style={styles}>
                            <div className="overlay-links-div">
                                <p className="overlay-text title">{project.title}</p>
                                <p className="overlay-text subtitle">{project.subtitle}</p>
                                <hr className="line" />
                                <div className="overlay-links-text">
                                    <a target="_blank" href={project.live_url}><p className="overlay-text github"><i className="fa fa-external-link" aria-hidden="true"></i></p></a>
                                    <a target="_blank" href={project.github_url}><p className="overlay-text live-site"><i className="fa fa-github" aria-hidden="true"></i></p></a>
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
